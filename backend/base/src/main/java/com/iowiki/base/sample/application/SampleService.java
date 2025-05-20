package com.iowiki.base.sample.application;

import com.iowiki.base.sample.adapter.in.web.dto.SampleCreateDto;
import com.iowiki.base.sample.application.command.CreateSampleCommand;
import com.iowiki.base.sample.application.port.in.CreateSampleUsecase;
import com.iowiki.base.sample.application.port.out.SampleRepositoryPort;
import com.iowiki.base.sample.mapper.SampleMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SampleService implements CreateSampleUsecase {
    private final SampleRepositoryPort sampleRepositoryPort;
    private final SampleMapper sampleMapper;

    @Override
    public SampleCreateDto.Response create(CreateSampleCommand requestCommand) {
        var sample = sampleMapper.toDomain(requestCommand);
        sample.generateId();

        return sampleMapper.toResponse(sampleRepositoryPort.create(sample));
    }
}
