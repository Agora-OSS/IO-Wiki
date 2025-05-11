package com.iowiki.base.sample.application.port.in;

import com.iowiki.base.sample.adapter.in.web.dto.SampleCreateDto;
import com.iowiki.base.sample.application.command.CreateSampleCommand;

public interface CreateSampleUsecase {
    SampleCreateDto.Response create(CreateSampleCommand requestCommand);
}
