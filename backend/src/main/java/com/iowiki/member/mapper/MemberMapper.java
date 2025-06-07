package com.iowiki.member.mapper;

import com.iowiki.member.adapter.in.web.dto.MemberExistsDto;
import com.iowiki.member.adapter.in.web.dto.SignUpDto;
import com.iowiki.member.adapter.out.persistence.MemberEntity;
import com.iowiki.member.application.command.MemberExistsCommand;
import com.iowiki.member.application.command.SignUpCommand;
import com.iowiki.member.domain.Member;
import com.iowiki.member.domain.Role;
import com.iowiki.member.adapter.out.persistence.RoleEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    SignUpCommand toCommand(SignUpDto.Request signUpRequest);
    Member toDomain(SignUpCommand command);
    MemberEntity toEntity(Member member);

    RoleEntity toEntity(Role role);

    MemberExistsCommand toCommand(MemberExistsDto.Request existsRequest);
}
