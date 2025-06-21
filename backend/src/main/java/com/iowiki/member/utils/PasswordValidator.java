package com.iowiki.member.utils;

import com.iowiki.member.annotation.Password;
import com.iowiki.member.domain.PasswordRule;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class PasswordValidator implements ConstraintValidator<Password, String> {

    private final List<PasswordRule> rules;

    public PasswordValidator(List<PasswordRule> rules) {
        this.rules = rules;
    }

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        if (value == null) return false;

        List<String> errorMessages = rules.stream()
                .filter(rule -> !rule.matches(value))
                .map(PasswordRule::getErrorMessage)
                .toList();

        if (!errorMessages.isEmpty()) {
            context.disableDefaultConstraintViolation();
            errorMessages.forEach(msg ->
                    context.buildConstraintViolationWithTemplate(msg).addConstraintViolation());
            return false;
        }
        return true;
    }
}