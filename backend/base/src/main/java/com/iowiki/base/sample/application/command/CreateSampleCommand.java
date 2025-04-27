package com.iowiki.base.sample.application.command;

import lombok.Builder;

@Builder(toBuilder = true)
public record CreateSampleCommand(
        String name
) {}