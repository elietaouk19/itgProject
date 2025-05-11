package com.itg.springproject.common;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CustomResponse<T> {
    private String status;
    private String message;
    private T data;

    public static <T> CustomResponse<T> of(String status, String message, T data) {
        CustomResponse<T> customResponse = new CustomResponse<>();
        customResponse.setStatus(status);
        customResponse.setMessage(message);
        customResponse.setData(data);
        return customResponse;
    }
   
}
