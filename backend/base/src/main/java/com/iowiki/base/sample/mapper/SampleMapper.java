package com.iowiki.base.sample.mapper;

import com.iowiki.base.sample.adapter.out.persistence.SampleEntity;
import com.iowiki.base.sample.application.command.CreateSampleCommand;
import com.iowiki.base.sample.domain.Sample;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.UUID;

@Mapper(componentModel = "spring")
public interface SampleMapper {
    Sample toDomain(SampleEntity sampleEntity);
    Sample toDomain(CreateSampleCommand.Request requestCommand);
    SampleEntity toEntity(Sample sample);

    @Mapping(source = "saved", target = "id")
    CreateSampleCommand.Response toResponse(UUID saved);
}