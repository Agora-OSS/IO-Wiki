package com.iowiki.base.common.web;

public record CommonResponse<T>(boolean success, String message, T data) {

    public static <T> CommonResponse<T> success(T data) {
        return new CommonResponse<>(true, null, data);
    }

    public static <T> CommonResponse<T> success(String message, T data) {
        return new CommonResponse<>(true, message, data);
    }

    public static <T> CommonResponse<T> fail(String message) {
        return new CommonResponse<>(false, message, null);
    }
}