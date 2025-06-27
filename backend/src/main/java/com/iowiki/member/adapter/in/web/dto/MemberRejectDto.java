package com.iowiki.member.adapter.in.web.dto;

import lombok.Builder;

public interface MemberRejectDto {
    @Builder
    record Request(
            String email
    ) { }
}
