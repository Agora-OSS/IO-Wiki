package com.iowiki.member.adapter.in.web;

import com.iowiki.common.web.CommonResponse;
import com.iowiki.common.web.PageResponse;
import com.iowiki.member.adapter.in.web.dto.InitPasswordDto;
import com.iowiki.member.adapter.in.web.dto.MemberApproveDto;
import com.iowiki.member.adapter.in.web.dto.MemberPageDto;
import com.iowiki.member.adapter.in.web.dto.MemberRejectDto;
import com.iowiki.member.application.port.in.MemberChangeApprovalUsecase;
import com.iowiki.member.application.port.in.MemberChangePasswordUsecase;
import com.iowiki.member.application.port.in.MemberViewUsecase;
import com.iowiki.member.mapper.MemberMapper;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin-api/v1/members")
@RequiredArgsConstructor
public class MemberAdminController {
    private final MemberViewUsecase memberViewUsecase;
    private final MemberChangePasswordUsecase memberChangePasswordUsecase;
    private final MemberChangeApprovalUsecase memberChangeApprovalUsecase;
    private final MemberMapper memberMapper;

    @GetMapping
    public ResponseEntity<CommonResponse<PageResponse<MemberPageDto.Response>>> getMemberPage(@Valid MemberPageDto.Request pageRequest) {
        return ResponseEntity.ok(CommonResponse.success(
                PageResponse.of(memberViewUsecase.viewMemberPage(memberMapper.toCommand(pageRequest)), MemberPageDto.Response::from)));
    }

    @PostMapping("/init-password")
    public ResponseEntity<CommonResponse<InitPasswordDto.Response>> initPassword(@Valid @RequestBody InitPasswordDto.Request initPasswordRequest) {
        return ResponseEntity.ok(CommonResponse.success(
                InitPasswordDto.Response.from(memberChangePasswordUsecase.initPassword(memberMapper.toCommand(initPasswordRequest)))));
    }

    @PostMapping("/approve")
    public ResponseEntity<CommonResponse<Void>> approve(@Valid @RequestBody MemberApproveDto.Request approveRequest) {
        memberChangeApprovalUsecase.approve(memberMapper.toCommand(approveRequest));
        return ResponseEntity.ok(CommonResponse.empty());
    }

    @PostMapping("/reject")
    public ResponseEntity<CommonResponse<Void>> approve(@Valid @RequestBody MemberRejectDto.Request approveRequest) {
        memberChangeApprovalUsecase.reject(memberMapper.toCommand(approveRequest));
        return ResponseEntity.ok(CommonResponse.empty());
    }
}
