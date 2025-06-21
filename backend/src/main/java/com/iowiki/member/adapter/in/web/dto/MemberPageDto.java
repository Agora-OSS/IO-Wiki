package com.iowiki.member.adapter.in.web.dto;

import com.iowiki.member.domain.Member;
import lombok.Builder;

public interface MemberPageDto {
    @Builder(toBuilder = true)
    record Request(
        int page,
        int size
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
