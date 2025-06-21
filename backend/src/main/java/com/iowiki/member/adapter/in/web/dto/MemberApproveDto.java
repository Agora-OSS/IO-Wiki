package com.iowiki.member.adapter.in.web.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Builder;

public interface MemberApproveDto {
    @Builder(toBuilder = true)
    record Request(
            @NotBlank @Email String email
    ) { }
}
