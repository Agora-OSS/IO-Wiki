package com.iowiki.base.sample.application;

import com.iowiki.base.sample.adapter.mapper.SampleMapper;
import com.iowiki.base.sample.application.command.CreateSampleCommand;
import com.iowiki.base.sample.application.port.in.ManageSampleUsecase;
import com.iowiki.base.sample.application.port.out.SampleRepositoryPort;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SampleService implements ManageSampleUsecase {
    private final SampleRepositoryPort sampleRepositoryPort;
    private final SampleMapper sampleMapper;

    @Override
    public CreateSampleCommand.Response create(CreateSampleCommand.Request requestCommand) {
        var sample = sampleMapper.toDomain(requestCommand);
        sample.generateId();

        return sampleMapper.toResponse(sampleRepositoryPort.create(sample));
    }
}
