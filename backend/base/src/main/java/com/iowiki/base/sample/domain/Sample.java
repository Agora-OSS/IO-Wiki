package com.iowiki.base.sample.domain;


import lombok.AccessLevel;
import lombok.Builder;

import java.util.UUID;

@Builder(access = AccessLevel.PRIVATE)
public record Sample (
        UUID id,
        String name
) {
    public static Sample from(String name) {
        return Sample.builder()
                .id(UUID.randomUUID())
                .name(name)
                .build();
    }
}
