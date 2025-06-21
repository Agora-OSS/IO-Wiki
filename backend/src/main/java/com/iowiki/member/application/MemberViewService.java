package com.iowiki.member.application;

import com.iowiki.member.application.command.MemberPageCommand;
import com.iowiki.member.application.port.in.MemberViewUsecase;
import com.iowiki.member.application.port.out.MemberRepositoryPort;
import com.iowiki.member.domain.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberViewService implements MemberViewUsecase {
    private final MemberRepositoryPort memberRepositoryPort;

    @Override
    public Page<Member> viewMemberPage(MemberPageCommand command) {
        return memberRepositoryPort.findBy(command.pageable());
    }
}
