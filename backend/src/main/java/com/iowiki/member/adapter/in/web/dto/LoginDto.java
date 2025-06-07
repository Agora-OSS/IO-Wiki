package com.iowiki.member.adapter.in.web.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Builder;

public interface LoginDto {
    record Request(
            @NotBlank @Email String email,
            @NotBlank String password
    ) {}

    @Builder
    record Response(
            String redirectUrl
    ) {}
}
