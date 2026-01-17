package com.resume.backend;

import com.resume.backend.Service.ResumeService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import java.io.IOException;

@SpringBootTest
class ResumeAiBackendApplicationTests {

	@Autowired
	private ResumeService resumeService; // fixed

	@Test
	void contextLoads() throws IOException {
		resumeService.generateResumeResponse("Hello there my name is adityarana wth 2yrs of exp in java and also i complete my graduation in 2026 in gurkula kangri vishwavidhalaya");
	}
}
