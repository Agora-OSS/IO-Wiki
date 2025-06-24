package com.iowiki.member.domain;

import com.iowiki.member.utils.SecureRandomHolder;
import org.springframework.stereotype.Component;

import java.util.regex.Pattern;

@Component
public class AllowedCharRule implements PasswordRule {
    private static final String ALLOWED = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@$!%*#?&_";
    private static final Pattern PATTERN = Pattern.compile("^[" + Pattern.quote(ALLOWED) + "]+$");

    @Override
    public char generateChar() {
        return ALLOWED.charAt(SecureRandomHolder.INSTANCE.nextInt(ALLOWED.length()));
    }

    @Override
    public int getMinCount() {
        return 0;
    }

    @Override
    public boolean matches(String value) {
        return value != null && PATTERN.matcher(value).matches();
    }

    @Override
    public String getErrorMessage() {
        return "허용되지 않는 문자가 포함되어 있습니다.";
    }
}