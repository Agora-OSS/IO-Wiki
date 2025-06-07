package com.iowiki.common.exception;

import com.iowiki.common.web.CommonResponse;
import com.iowiki.member.exception.InvalidPasswordException;
import com.iowiki.member.exception.MemberDuplicateException;
import com.iowiki.member.exception.MemberNotFoundException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

@Slf4j
@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<CommonResponse<Void>> handleValidationException(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getFieldErrors()
                .forEach(fieldError -> errors.put(fieldError.getField(), fieldError.getDefaultMessage()));

        String summary = errors.entrySet().stream()
                .map(entry -> entry.getKey() + ": " + entry.getValue())
                .collect(Collectors.joining(", "));

        return ResponseEntity
                .badRequest()
                .body(CommonResponse.fail(summary));
    }

    @ExceptionHandler(exception = {
            InvalidPasswordException.class
    })
    public ResponseEntity<CommonResponse<Void>> handleBadRequestException(Exception e) {
        return ResponseEntity
                .badRequest()
                .body(CommonResponse.fail(e.getMessage()));
    }

    @ExceptionHandler(exception = {
            MemberDuplicateException.class
    })
    public ResponseEntity<CommonResponse<Void>> handleConflictException(Exception e) {
        return ResponseEntity
                .status(HttpStatus.CONFLICT)
                .body(CommonResponse.fail(e.getMessage()));
    }

    @ExceptionHandler(exception = {
            MemberNotFoundException.class
    })
    public ResponseEntity<CommonResponse<Void>> handleNotFoundException(Exception e) {
        return ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .body(CommonResponse.fail(e.getMessage()));
    }

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<CommonResponse<Void>> handleInternalServerException(Exception e) {
        log.info("An internal server error occurred: {}", e.getMessage(), e);
        return ResponseEntity
                .internalServerError()
                .body(CommonResponse.fail(e.getMessage()));
    }
}
