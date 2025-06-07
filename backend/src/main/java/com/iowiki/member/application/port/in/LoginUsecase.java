package com.iowiki.member.application.port.in;

import com.iowiki.member.application.command.LoginCommand;

public interface LoginUsecase {
    String login(LoginCommand command);
}
