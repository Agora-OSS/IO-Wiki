package com.iowiki.base.sample.application;

import com.iowiki.base.sample.application.command.CreateSampleCommand;
import com.iowiki.base.sample.application.port.in.ManageSampleUsecase;
import com.iowiki.base.sample.application.port.out.SampleRepositoryPort;
import com.iowiki.base.sample.domain.Sample;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class SampleService implements ManageSampleUsecase {
    private final SampleRepositoryPort sampleRepositoryPort;

    @Override
    public CreateSampleCommand.Response create(CreateSampleCommand.Request requestCommand) {
        Sample sample = Sample.from(requestCommand.name());

        // sample 도메인 로직 수행

        return toResponse(sampleRepositoryPort.create(sample));
    }

    private CreateSampleCommand.Response toResponse(UUID saved) {
        return CreateSampleCommand.Response.builder()
                .id(saved)
                .build();
    }
}
