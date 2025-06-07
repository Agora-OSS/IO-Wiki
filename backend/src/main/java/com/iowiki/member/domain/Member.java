package com.iowiki.member.domain;

import lombok.Builder;
import lombok.Getter;

import java.util.UUID;

@Getter
@Builder(toBuilder = true)
public class Member {
    private UUID uuid;
    private String email;
    private String password;
    private Role role;

    public Member signUpWith(String encodedPassword) {
        return this.toBuilder()
                .uuid(UUID.randomUUID())
                .password(encodedPassword)
                .role(Role.from(RoleType.NML))
                .build();
    }
}