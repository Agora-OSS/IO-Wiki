package com.iowiki.member.application.port.in;

import com.iowiki.member.application.command.InitPasswordCommand;

public interface MemberChangePasswordUsecase {
    String initPassword(InitPasswordCommand command);
}
