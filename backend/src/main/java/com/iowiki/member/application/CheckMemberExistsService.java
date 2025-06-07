package com.iowiki.member.application;

import com.iowiki.member.adapter.in.web.dto.MemberExistsDto;
import com.iowiki.member.application.command.MemberExistsCommand;
import com.iowiki.member.application.port.in.CheckMemberExistsUsecase;
import com.iowiki.member.application.port.out.MemberRepositoryPort;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CheckMemberExistsService implements CheckMemberExistsUsecase {
    private final MemberRepositoryPort memberRepositoryPort;

    @Override
    public MemberExistsDto.Response exists(MemberExistsCommand command) {
        return MemberExistsDto.Response.from(memberRepositoryPort.existsByEmail(command.email()));
    }
}
