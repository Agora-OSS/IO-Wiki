package com.iowiki.member.adapter.in.web.dto;

import lombok.Builder;

public interface MemberSelfViewDto {
    @Builder(toBuilder = true)
    record Response(
        String email
    ) {}
}
