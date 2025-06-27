package com.iowiki.member.domain;

import com.iowiki.member.utils.SecureRandomHolder;
import org.springframework.stereotype.Component;

import java.util.regex.Pattern;

@Component
public class DigitRule implements PasswordRule {
    private static final String DIGITS = "0123456789";
    private static final Pattern PATTERN = Pattern.compile(".*\\d.*");

    @Override
    public char generateChar() {
        return DIGITS.charAt(SecureRandomHolder.INSTANCE.nextInt(DIGITS.length()));
    }

    @Override
    public int getMinCount() {
        return 1;
    }

    @Override
    public boolean matches(String value) {
        return value != null && PATTERN.matcher(value).matches();
    }

    @Override
    public String getErrorMessage() {
        return "숫자를 최소 1자 포함해야 합니다.";
    }
}
