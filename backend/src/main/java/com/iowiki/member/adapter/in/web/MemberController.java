package com.iowiki.member.adapter.in.web;

import com.iowiki.common.web.CommonResponse;
import com.iowiki.member.adapter.in.web.dto.SignUpDto;
import com.iowiki.member.application.port.in.SignUpUsecase;
import com.iowiki.member.mapper.MemberMapper;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/members")
@RequiredArgsConstructor
public class MemberController {
    private final SignUpUsecase signUpUsecase;
    private final MemberMapper memberMapper;

    @PostMapping("/sign-up")
    public ResponseEntity<CommonResponse<Void>> signUp(@Valid @RequestBody SignUpDto.Request signUpRequest) {
        signUpUsecase.signUp(memberMapper.toCommand(signUpRequest));

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(CommonResponse.success(null));
    }
}
