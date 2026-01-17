package com.resume.backend.Controller;

import com.resume.backend.Dto.ApiResponse;
import com.resume.backend.ResumeRequest;
import com.resume.backend.Service.ResumeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Map;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/resume")
public class ResumeController {

    private final ResumeService resumeService;

    public ResumeController(ResumeService resumeService) {
        this.resumeService = resumeService;
    }

    @PostMapping("/generate")
    public ResponseEntity<ApiResponse> getResumeData(@RequestBody ResumeRequest resumeRequest) throws IOException {
        try {
            Map<String, Object> stringObjectMap = resumeService.generateResumeResponse(resumeRequest.userDescription());
            boolean strictSuccess = stringObjectMap.get("data") != null;
            String message = strictSuccess ? "Resume generated successfully"
                    : "Resume generation failed: parsed data is null";
            return new ResponseEntity<>(new ApiResponse(message, stringObjectMap, strictSuccess), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(new ApiResponse("Error generating resume: " + e.getMessage(), null, false),
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
