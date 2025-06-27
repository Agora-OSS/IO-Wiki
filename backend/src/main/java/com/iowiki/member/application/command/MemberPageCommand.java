package com.iowiki.member.application.command;

import com.iowiki.member.adapter.in.web.dto.MemberPageDto;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

public record MemberPageCommand(
    Pageable pageable
) {
    public MemberPageCommand(MemberPageDto.Request pageRequest) {
        this(PageRequest.of(pageRequest.page(), pageRequest.size()));
    }
}
