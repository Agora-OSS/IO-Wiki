package com.iowiki.member.domain;

public interface PasswordRule {
    char generateChar();
    int getMinCount();
    boolean matches(String password);
    String getErrorMessage();
}
