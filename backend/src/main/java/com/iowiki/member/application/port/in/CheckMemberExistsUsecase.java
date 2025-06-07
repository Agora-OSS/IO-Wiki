package com.iowiki.member.application.port.in;

import com.iowiki.member.adapter.in.web.dto.MemberExistsDto;
import com.iowiki.member.application.command.MemberExistsCommand;

public interface CheckMemberExistsUsecase {
    MemberExistsDto.Response exists(MemberExistsCommand command);
}
