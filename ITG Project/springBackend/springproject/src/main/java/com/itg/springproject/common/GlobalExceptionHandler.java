package com.itg.springproject.common;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.server.ResponseStatusException;

import jakarta.persistence.EntityNotFoundException;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity<CustomResponse<Void>> handleEntityNotFound(EntityNotFoundException ex) {
        return ResponseBuilder.notFound(ex.getMessage());
    }

  @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<CustomResponse<String>> handleValidationErrors(MethodArgumentNotValidException ex) {
        return ResponseBuilder.badRequest(ex.getMessage());
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<CustomResponse<Void>> handleGeneralException(Exception ex) {
        return ResponseBuilder.internalError("An unexpected error occurred");
    }

@ExceptionHandler(ResponseStatusException.class)
    public ResponseEntity<CustomResponse<Void>> handleConflict(ResponseStatusException ex) {
        if (ex.getStatusCode() == HttpStatus.CONFLICT) {
            return ResponseBuilder.conflict(ex.getReason());
        }
        return ResponseBuilder.internalError("Unexpected error: " + ex.getReason());
    }


}
