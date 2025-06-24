package com.iowiki.member.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum RoleType {
    NML("일반 회원"),
    ADM("관리자");

    private final String description;
}