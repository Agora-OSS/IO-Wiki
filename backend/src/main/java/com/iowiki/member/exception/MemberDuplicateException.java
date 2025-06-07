package com.iowiki.member.exception;

public class MemberDuplicateException extends RuntimeException {
    private static final String MESSAGE = "중복된 회원입니다.";

    public MemberDuplicateException() {
        super(MESSAGE);
    }
}
