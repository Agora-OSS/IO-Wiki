package com.iowiki.member.adapter.in.web.dto;

import com.iowiki.member.annotation.Password;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Builder;

public interface SignUpDto {
    @Builder(toBuilder = true)
    record Request (
            @NotBlank @Email String email,
            @NotBlank @Size(min = 8, max = 50) @Password String password
    ) {}
}
