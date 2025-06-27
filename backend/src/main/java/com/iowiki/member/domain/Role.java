package com.iowiki.member.domain;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder(toBuilder = true)
public class Role {
    private final RoleType roleType;

    public static Role from(RoleType roleType) {
        return Role.builder()
                .roleType(roleType)
                .build();
    }
}
