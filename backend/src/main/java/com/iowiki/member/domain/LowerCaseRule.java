package com.iowiki.member.domain;

import com.iowiki.member.utils.SecureRandomHolder;
import org.springframework.stereotype.Component;

import java.util.regex.Pattern;

@Component
public class LowerCaseRule implements PasswordRule {
    private static final String LOWER = "abcdefghijklmnopqrstuvwxyz";
    private static final Pattern LOWER_PATTERN = Pattern.compile(".*[a-z].*");

    @Override
    public char generateChar() {
        return LOWER.charAt(SecureRandomHolder.INSTANCE.nextInt(LOWER.length()));
    }

    @Override
    public int getMinCount() {
        return 1;
    }

    @Override
    public boolean matches(String password) {
        return password != null && LOWER_PATTERN.matcher(password).matches();
    }

    @Override
    public String getErrorMessage() {
        return "소문자를 최소 1자 포함해야 합니다.";
    }
}
