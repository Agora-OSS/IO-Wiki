package com.iowiki.base.sample.adapter.out.persistence;

import com.iowiki.base.sample.application.port.out.SampleRepositoryPort;
import com.iowiki.base.sample.domain.Sample;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
@RequiredArgsConstructor
public class SamplePersistenceAdapter implements SampleRepositoryPort {
    private final SampleRepository sampleRepository;

    @Override
    public UUID create(Sample sample) {
        return sampleRepository.save(toEntity(sample)).getId();
    }

    private SampleEntity toEntity(Sample sample) {
        return SampleEntity.builder()
                .id(sample.id())
                .name(sample.name())
                .build();
    }
}
