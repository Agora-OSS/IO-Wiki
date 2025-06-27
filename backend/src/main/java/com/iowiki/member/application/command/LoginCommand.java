package com.iowiki.member.application.command;

public record LoginCommand(
        String email,
        String password
) {}
