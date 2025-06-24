package com.iowiki.member.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ApprovalType {
    PEN("미승인"),
    APP("승인");

    private final String description;
}
