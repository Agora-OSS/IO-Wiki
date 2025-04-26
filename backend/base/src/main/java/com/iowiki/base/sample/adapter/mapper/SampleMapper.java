package com.iowiki.base.sample.adapter.mapper;

import com.iowiki.base.sample.adapter.out.persistence.SampleEntity;
import com.iowiki.base.sample.application.command.CreateSampleCommand;
import com.iowiki.base.sample.domain.Sample;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface SampleMapper {
    Sample toDomain(SampleEntity sampleEntity);
    Sample toDomain(CreateSampleCommand.Request requestCommand);
    SampleEntity toEntity(Sample sample);
}
