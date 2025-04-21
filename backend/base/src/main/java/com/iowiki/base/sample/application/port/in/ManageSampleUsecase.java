package com.iowiki.base.sample.application.port.in;

import com.iowiki.base.sample.application.command.CreateSampleCommand;

public interface ManageSampleUsecase {
    CreateSampleCommand.Response create(CreateSampleCommand.Request requestCommand);
}
