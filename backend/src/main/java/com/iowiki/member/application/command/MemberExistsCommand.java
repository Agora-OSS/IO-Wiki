package com.iowiki.member.application.command;

import lombok.Builder;

@Builder(toBuilder = true)
public record MemberExistsCommand(
        String email
) {}
