package com.iowiki.member.application;

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
    public boolean exists(MemberExistsCommand command) {
        return memberRepositoryPort.existsByEmail(command.email());
    }
}
