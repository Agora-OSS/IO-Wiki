package com.iowiki.base.sample.domain;

import lombok.Builder;
import lombok.Getter;

import java.util.UUID;

@Getter
@Builder(toBuilder = true)
public class Sample {
    private UUID id;
    private String name;

    public void generateId() {
        this.id = UUID.randomUUID();
    }
}