package com.iowiki.member.adapter.in.web.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.Builder;

public interface SignUpDto {
    @Builder(toBuilder = true)
    record Request (
            @NotBlank @Email String email,
            @NotBlank @Pattern(regexp = "^(?=.*[a-z])(?=.*[@$!%*#?&_])[A-Za-z\\d@$!%*#?&_]{8,}$") String password
    ) {}
}
