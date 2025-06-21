package com.iowiki.member.adapter.in.web.dto;

import com.iowiki.member.domain.Member;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import lombok.Builder;

public interface MemberPageDto {
    @Builder(toBuilder = true)
    record Request(
        @Min(0) int page,
        @Min(1) @Max(100) int size
    ) {}

    @Builder(toBuilder = true)
    record Response(
        String email
    ) {
        public static Response from(Member member) {
            return Response.builder()
                    .email(member.getEmail())
                    .build();
        }
    }
}
