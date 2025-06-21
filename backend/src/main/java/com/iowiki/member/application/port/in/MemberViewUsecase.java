package com.iowiki.member.application.port.in;

import com.iowiki.member.application.command.MemberPageCommand;
import com.iowiki.member.domain.Member;
import org.springframework.data.domain.Page;

public interface MemberViewUsecase {
    Page<Member> viewMemberPage(MemberPageCommand command);
}
