package com.iowiki.member.adapter.in.web;

import com.iowiki.common.web.CommonResponse;
import com.iowiki.common.web.PageResponse;
import com.iowiki.member.adapter.in.web.dto.MemberPageDto;
import com.iowiki.member.application.port.in.MemberViewUsecase;
import com.iowiki.member.mapper.MemberMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin-api/v1/members")
@RequiredArgsConstructor
public class MemberAdminController {
    private final MemberViewUsecase memberViewUsecase;
    private final MemberMapper memberMapper;

    @GetMapping
    public ResponseEntity<CommonResponse<PageResponse<MemberPageDto.Response>>> getMemberPage(MemberPageDto.Request pageRequest) {
        return ResponseEntity.ok(CommonResponse.success(
                PageResponse.of(memberViewUsecase.viewMemberPage(memberMapper.toCommand(pageRequest)), MemberPageDto.Response::from)));
    }
}
