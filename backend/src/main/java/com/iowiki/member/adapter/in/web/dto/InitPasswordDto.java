package com.iowiki.member.adapter.in.web.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Builder;

public interface InitPasswordDto {
    @Builder(toBuilder = true)
    record Request(
        @NotBlank @Email String email
    ) { }

    record Response(
        String newPassword
    ) {
        public static Response from(String newPassword) {
            return new Response(newPassword);
        }
    }
}
