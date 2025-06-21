package com.iowiki.member.application.port.in;

import com.iowiki.member.application.command.MemberExistsCommand;

public interface CheckMemberExistsUsecase {
    boolean exists(MemberExistsCommand command);
}
