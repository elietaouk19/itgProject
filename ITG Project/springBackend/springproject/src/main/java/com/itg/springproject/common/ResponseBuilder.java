package com.itg.springproject.common;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class ResponseBuilder {

    public static <T> ResponseEntity<CustomResponse<T>> ok(String message, T data) {
        return ResponseEntity.ok(CustomResponse.of("success", message, data)); 
    }

    public static <T> ResponseEntity<CustomResponse<T>> created(String message, T data) {
        return ResponseEntity.status(HttpStatus.CREATED).body(CustomResponse.of("success", message, data));
    }

    public static <T> ResponseEntity<CustomResponse<T>> noContent(String message) {
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(CustomResponse.of("success", message, null)); 
    }

    public static <T> ResponseEntity<CustomResponse<T>> badRequest(String message) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(CustomResponse.of("fail", message, null)); 
    }

    public static <T> ResponseEntity<CustomResponse<T>> unauthorized(String message) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(CustomResponse.of("fail", message, null)); 
    }

    public static <T> ResponseEntity<CustomResponse<T>> forbidden(String message) {
        return ResponseEntity.status(HttpStatus.FORBIDDEN).body(CustomResponse.of("fail", message, null)); 
    }

    public static <T> ResponseEntity<CustomResponse<T>> notFound(String message) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(CustomResponse.of("fail", message, null));
    }

    public static <T> ResponseEntity<CustomResponse<T>> internalError(String message) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(CustomResponse.of("fail", message, null));
    }

    public static <T> ResponseEntity<CustomResponse<T>> serviceUnavailable(String message) {
        return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE).body(CustomResponse.of("fail", message, null)); 
    }
    
    public static <T> ResponseEntity<CustomResponse<T>> conflict(String message) {
        return ResponseEntity.status(HttpStatus.CONFLICT).body(CustomResponse.of("fail", message, null));
    }

}
