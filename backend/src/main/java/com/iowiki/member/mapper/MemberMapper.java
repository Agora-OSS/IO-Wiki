package com.iowiki.member.mapper;

import com.iowiki.member.adapter.in.web.dto.InitPasswordDto;
import com.iowiki.member.adapter.in.web.dto.LoginDto;
import com.iowiki.member.adapter.in.web.dto.MemberApproveDto;
import com.iowiki.member.adapter.in.web.dto.MemberExistsDto;
import com.iowiki.member.adapter.in.web.dto.MemberPageDto;
import com.iowiki.member.adapter.in.web.dto.MemberRejectDto;
import com.iowiki.member.adapter.in.web.dto.SignUpDto;
import com.iowiki.member.adapter.out.persistence.MemberEntity;
import com.iowiki.member.adapter.out.persistence.RoleEntity;
import com.iowiki.member.application.command.InitPasswordCommand;
import com.iowiki.member.application.command.LoginCommand;
import com.iowiki.member.application.command.MemberApproveCommand;
import com.iowiki.member.application.command.MemberExistsCommand;
import com.iowiki.member.application.command.MemberPageCommand;
import com.iowiki.member.application.command.MemberRejectCommand;
import com.iowiki.member.application.command.SignUpCommand;
import com.iowiki.member.domain.Member;
import com.iowiki.member.domain.Role;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", uses = {RoleMapper.class})
public interface MemberMapper {
    SignUpCommand toCommand(SignUpDto.Request signUpRequest);
    Member toDomain(SignUpCommand command);

    @Mapping(target = "role", source = "roleType")
    MemberEntity toEntity(Member member);

    RoleEntity toEntity(Role role);

    MemberExistsCommand toCommand(MemberExistsDto.Request existsRequest);

    LoginCommand toCommand(LoginDto.Request loginRequest);

    default MemberPageCommand toCommand(MemberPageDto.Request pageRequest) {
        return new MemberPageCommand(pageRequest);
    }

    @Mapping(target = "roleType", source = "role.type")
    Member toDomain(MemberEntity memberEntity);

    InitPasswordCommand toCommand(InitPasswordDto.Request initPasswordRequest);

    MemberApproveCommand toCommand(MemberApproveDto.Request approveRequest);

    MemberRejectCommand toCommand(MemberRejectDto.Request rejectRequest);
}
