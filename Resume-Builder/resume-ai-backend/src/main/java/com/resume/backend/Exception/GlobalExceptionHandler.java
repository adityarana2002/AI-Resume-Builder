package com.resume.backend.Exception;

import com.resume.backend.Dto.ApiResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.io.IOException;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ApiResponse> handleGlobalException(Exception ex) {
        ApiResponse response = new ApiResponse(ex.getMessage(), null, false);
        return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(IOException.class)
    public ResponseEntity<ApiResponse> handleIOException(IOException ex) {
        ApiResponse response = new ApiResponse("IO Error caused by: " + ex.getMessage(), null, false);
        return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    
    // You can add more specific exception handlers here (e.g., specific AI service exceptions)
}
