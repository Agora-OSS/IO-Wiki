package com.iowiki.member.application.port.in;

import com.iowiki.member.application.command.SignUpCommand;

public interface SignUpUsecase {
    void signUp(SignUpCommand command);
}
