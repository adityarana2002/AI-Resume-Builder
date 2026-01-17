package com.resume.backend.ServiceImpl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.resume.backend.Service.ResumeService;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.HashMap;
import java.util.Map;

@Service
public class ResumeServiceImpl implements ResumeService {
    private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(ResumeServiceImpl.class);

    private final ChatClient chatClient;
    private final ObjectMapper objectMapper;

    public ResumeServiceImpl(ChatClient.Builder builder, ObjectMapper objectMapper) {
        this.chatClient = builder.build();
        this.objectMapper = objectMapper;
        // Allow comments and loose JSON
        this.objectMapper.configure(com.fasterxml.jackson.core.JsonParser.Feature.ALLOW_COMMENTS, true);
        this.objectMapper.configure(com.fasterxml.jackson.core.JsonParser.Feature.ALLOW_YAML_COMMENTS, true);
        this.objectMapper.configure(com.fasterxml.jackson.core.JsonParser.Feature.ALLOW_TRAILING_COMMA, true);
    }

    @Override
    public Map<String, Object> generateResumeResponse(String userResumeDescription) throws IOException {
        log.info("Generating resume for description: {}", userResumeDescription);

        // Sanitize input to prevent prompt injection or formatting issues
        String sanitizedDescription = userResumeDescription.replace("\"", "\\\"").replace("\n", " ");

        String promptString = this.loadPromptFromFile("resume_prompt.txt");
        String promptContent = this.putValuesToTemplate(promptString, Map.of(
                "userDescription", sanitizedDescription));

        Prompt prompt = new Prompt(promptContent);

        String response = "";
        try {
            response = chatClient.prompt(prompt).call().content();
        } catch (Exception e) {
            log.error("Error calling AI service", e);
            throw new RuntimeException("AI Service is unavailable or timed out: " + e.getMessage());
        }

        log.debug("AI Response: {}", response);

        Map<String, Object> stringObjectMap = parseMultipleResponse(response);
        return stringObjectMap;
    }

    private String loadPromptFromFile(String fileName) throws IOException {
        Path path = new ClassPathResource(fileName).getFile().toPath();
        return Files.readString(path);
    }

    private String putValuesToTemplate(String template, Map<String, String> values) {
        for (Map.Entry<String, String> entry : values.entrySet()) {
            template = template.replace("{" + entry.getKey() + "}", entry.getValue());
        }
        return template;
    }

    public Map<String, Object> parseMultipleResponse(String response) {
        Map<String, Object> jsonResponse = new HashMap<>();

        try {
            // --- Extract <think> ---
            String thinkContent = null;
            int thinkStart = response.indexOf("<think>");
            int thinkEnd = response.indexOf("</think>");
            if (thinkStart != -1 && thinkEnd != -1 && thinkStart < thinkEnd) {
                thinkContent = response.substring(thinkStart + 7, thinkEnd).trim();
                jsonResponse.put("think", thinkContent);
                // Remove think block to avoid confusion with JSON parsing
                response = response.substring(0, thinkStart) + response.substring(thinkEnd + 8);
            } else {
                jsonResponse.put("think", null);
            }

            // --- Extract JSON ---
            String jsonContent = null;

            // Try to find JSON between markdown code blocks first
            int fenceStart = response.indexOf("```json");
            if (fenceStart == -1)
                fenceStart = response.indexOf("```");

            int fenceEnd = response.lastIndexOf("```");

            if (fenceStart != -1 && fenceEnd != -1 && fenceStart < fenceEnd) {
                // Adjust start to exclude the marker
                int contentStart = response.indexOf("\n", fenceStart);
                if (contentStart != -1 && contentStart < fenceEnd) {
                    jsonContent = response.substring(contentStart, fenceEnd).trim();
                } else {
                    // Fallback if no newline after ```json
                    // Just strip the markers roughly
                    String candidate = response.substring(fenceStart, fenceEnd);
                    candidate = candidate.replace("```json", "").replace("```", "").trim();
                    jsonContent = candidate;
                }
            } else {
                // No code blocks, try to find the outer-most braces
                int openBrace = response.indexOf("{");
                int closeBrace = response.lastIndexOf("}");
                if (openBrace != -1 && closeBrace != -1 && openBrace < closeBrace) {
                    jsonContent = response.substring(openBrace, closeBrace + 1).trim();
                }
            }

            if (jsonContent != null && !jsonContent.isEmpty()) {
                // Sanitize JSON content to fix common AI errors like missing commas
                jsonContent = sanitizeJsonContent(jsonContent);
                log.debug("Sanitized JSON: {}", jsonContent);

                @SuppressWarnings("unchecked")
                Map<String, Object> dataContent = objectMapper.readValue(jsonContent, Map.class);

                // Normalization: Ensure certain fields are Lists, even if AI returns single
                // Objects
                normalizeToList(dataContent, "experience");
                normalizeToList(dataContent, "education");
                normalizeToList(dataContent, "certifications");
                normalizeToList(dataContent, "projects");
                normalizeToList(dataContent, "achievements");
                normalizeToList(dataContent, "languages");
                normalizeToList(dataContent, "interests");
                // Note: 'skills' is an Object in the schema, so we don't normalize it to a List
                // unless the schema changes.
                // However, user logs showed 'skills' as an Array. If schema says object, we
                // keep object.
                // If AI returns array for skills, it might be an issue if frontend expects
                // object.
                // But the schema in prompt says "skills": { ... }, so we expect Map.

                jsonResponse.put("data", dataContent);
            } else {
                log.error("Could not extract JSON from response: {}", response);
                throw new RuntimeException("No JSON found in AI response");
            }

        } catch (Exception e) {
            log.error("Error parsing JSON response. Raw Response: {}", response, e);
            throw new RuntimeException("Failed to parse AI response: " + e.getMessage());
        }

        return jsonResponse;
    }

    private void normalizeToList(Map<String, Object> map, String key) {
        Object value = map.get(key);
        if (value != null && !(value instanceof java.util.List)) {
            // If it's not a list (e.g., a single Map or String), wrap it in a List
            java.util.List<Object> list = new java.util.ArrayList<>();
            list.add(value);
            map.put(key, list);
            log.warn("Normalized '{}' from {} to List", key, value.getClass().getSimpleName());
        }
    }

    private String sanitizeJsonContent(String json) {
        if (json == null)
            return null;
        // Fix missing commas between key-value pairs
        // Matches: "value" "key" -> "value", "key"
        // Matches: } "key" -> }, "key"
        // Matches: ] "key" -> ], "key"
        String sanitized = json.replaceAll("(?<=[}\\]\"])\\s+(?=\")", ",");
        return sanitized;
    }
}
