package com.iowiki.base.sample.adapter.out.persistence;

import com.iowiki.base.sample.adapter.mapper.SampleMapper;
import com.iowiki.base.sample.application.port.out.SampleRepositoryPort;
import com.iowiki.base.sample.domain.Sample;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
@RequiredArgsConstructor
public class SamplePersistenceAdapter implements SampleRepositoryPort {
    private final SampleRepository sampleRepository;
    private final SampleMapper sampleMapper;

    @Override
    public UUID create(Sample sample) {
        return sampleRepository.save(sampleMapper.toEntity(sample)).getId();
    }
}
