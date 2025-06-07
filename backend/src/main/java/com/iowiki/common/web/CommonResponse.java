package com.iowiki.common.web;

public record CommonResponse<T>(boolean success, String message, T data) {
    public static <T> CommonResponse<T> empty() {
        return success(null);
    }

    public static <T> CommonResponse<T> success(T data) {
        return success(null, data);
    }

    public static <T> CommonResponse<T> success(String message, T data) {
        return new CommonResponse<>(true, message, data);
    }

    public static <T> CommonResponse<T> fail(String message) {
        return new CommonResponse<>(false, message, null);
    }
}