package com.iowiki.member.application.command;

import lombok.Builder;

@Builder(toBuilder = true)
public record SignUpCommand(
        String email,
        String password
) {}
