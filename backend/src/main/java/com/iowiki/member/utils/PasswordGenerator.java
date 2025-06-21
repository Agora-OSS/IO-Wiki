package com.iowiki.member.utils;

import com.iowiki.member.domain.PasswordRule;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Component
@RequiredArgsConstructor
public class PasswordGenerator {
    private final List<PasswordRule> rules;

    public String generate(int length) {
        int minLength = rules.stream().mapToInt(PasswordRule::getMinCount).sum();
        if (length < minLength) {
            throw new IllegalArgumentException();
        }

        // 필수 문자 생성
        List<Character> chars = rules.stream()
                .flatMap(rule -> IntStream.range(0, rule.getMinCount())
                        .mapToObj(i -> rule.generateChar()))
                .collect(Collectors.toList());

        // 남은 자리 채우기
        PasswordRule filler = rules.stream()
                .filter(r -> r.getMinCount() == 0)
                .findAny()
                .orElseThrow(IllegalStateException::new);

        while (chars.size() < length) {
            chars.add(filler.generateChar());
        }

        Collections.shuffle(chars, SecureRandomHolder.INSTANCE);

        StringBuilder sb = new StringBuilder();
        chars.forEach(sb::append);
        return sb.toString();
    }
}

