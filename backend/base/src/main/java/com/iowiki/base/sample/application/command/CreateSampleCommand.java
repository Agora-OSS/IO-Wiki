package com.iowiki.base.sample.application.command;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Builder;

import java.util.UUID;

public interface CreateSampleCommand {

    @Builder(toBuilder = true)
    record Request (
        @NotBlank @Size(max = 100) String name
    ) {}

    @Builder(toBuilder = true)
    record Response (
        UUID id
    ) {}
}