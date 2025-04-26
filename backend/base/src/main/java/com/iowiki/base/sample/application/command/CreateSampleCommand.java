package com.iowiki.base.sample.application.command;

import io.swagger.v3.oas.annotations.media.Schema;
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
        @Schema(description = "자동생성 UUID", example = "123e4567-e89b-12d3-a456-426614174000")
        UUID id
    ) {}
}