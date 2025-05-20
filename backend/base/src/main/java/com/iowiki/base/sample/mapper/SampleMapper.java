package com.iowiki.base.sample.mapper;

import com.iowiki.base.sample.adapter.in.web.dto.SampleCreateDto;
import com.iowiki.base.sample.adapter.out.persistence.SampleEntity;
import com.iowiki.base.sample.application.command.CreateSampleCommand;
import com.iowiki.base.sample.domain.Sample;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.UUID;

@Mapper(componentModel = "spring")
public interface SampleMapper {
    CreateSampleCommand toCommand(SampleCreateDto.Request request);
    Sample toDomain(CreateSampleCommand command);
    SampleEntity toEntity(Sample sample);

    @Mapping(source = "saved", target = "id")
    SampleCreateDto.Response toResponse(UUID saved);
}