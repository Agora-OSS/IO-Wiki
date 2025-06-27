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
    private RoleType roleType;
    private ApprovalType approvalType;

    public Member signUpWith(String encodedPassword) {
        return this.toBuilder()
                .uuid(UUID.randomUUID())
                .password(encodedPassword)
                .roleType(RoleType.NML)
                .approvalType(ApprovalType.PEN)
                .build();
    }

    public void updatePassword(String encodedPassword) {
        this.password = encodedPassword;
    }

    public void approve() {
        approvalType = ApprovalType.APP;
    }

    public boolean isPending() {
        return approvalType == ApprovalType.PEN;
    }
}