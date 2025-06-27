package com.iowiki.member.application.port.in;

import com.iowiki.member.application.command.MemberApproveCommand;
import com.iowiki.member.application.command.MemberRejectCommand;

public interface MemberChangeApprovalUsecase {
    void approve(MemberApproveCommand command);
    void reject(MemberRejectCommand command);
}
