package com.iowiki.member.application;

import com.iowiki.member.application.command.MemberApproveCommand;
import com.iowiki.member.application.command.MemberRejectCommand;
import com.iowiki.member.application.port.in.MemberChangeApprovalUsecase;
import com.iowiki.member.application.port.out.MemberRepositoryPort;
import com.iowiki.member.exception.MemberNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class MemberChangeApprovalService implements MemberChangeApprovalUsecase {
    private final MemberRepositoryPort memberRepositoryPort;

    @Override
    public void approve(MemberApproveCommand command) {
        var member = memberRepositoryPort.findByEmail(command.email())
                        .orElseThrow(MemberNotFoundException::new);

        member.approve();

        memberRepositoryPort.update(member);
    }

    @Override
    public void reject(MemberRejectCommand command) {
        var member = memberRepositoryPort.findByEmail(command.email())
                .orElseThrow(MemberNotFoundException::new);

        if (!member.isPending()) {
            throw new IllegalArgumentException("승인 대기 상태 회원이 아닙니다.");
        }

        memberRepositoryPort.deleteById(member.getUuid());
    }
}
