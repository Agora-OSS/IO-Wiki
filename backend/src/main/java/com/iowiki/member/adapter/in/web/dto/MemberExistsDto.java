package com.iowiki.member.adapter.in.web.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Builder;

public interface MemberExistsDto {
    @Builder(toBuilder = true)
    record Request (
            @NotBlank @Email String email
    ) {}

    @Builder(toBuilder = true)
    record Response (
            boolean exists
    ) {
        public static Response from(boolean exists) {
            return new Response(exists);
        }
    }
}
