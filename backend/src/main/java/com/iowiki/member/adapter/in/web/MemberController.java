package com.iowiki.member.adapter.in.web;

import com.iowiki.common.utils.WebUtils;
import com.iowiki.common.web.CommonResponse;
import com.iowiki.member.adapter.in.web.dto.LoginDto;
import com.iowiki.member.adapter.in.web.dto.MemberExistsDto;
import com.iowiki.member.adapter.in.web.dto.MemberSelfViewDto;
import com.iowiki.member.adapter.in.web.dto.SignUpDto;
import com.iowiki.member.application.port.in.CheckMemberExistsUsecase;
import com.iowiki.member.application.port.in.LoginUsecase;
import com.iowiki.member.application.port.in.SignUpUsecase;
import com.iowiki.member.mapper.MemberMapper;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/members")
@RequiredArgsConstructor
public class MemberController {
    private final SignUpUsecase signUpUsecase;
    private final CheckMemberExistsUsecase checkMemberExistsUsecase;
    private final LoginUsecase loginUsecase;
    private final MemberMapper memberMapper;

    @PostMapping("/sign-up")
    public ResponseEntity<CommonResponse<Void>> signUp(@Valid @RequestBody SignUpDto.Request signUpRequest) {
        signUpUsecase.signUp(memberMapper.toCommand(signUpRequest));

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(CommonResponse.empty());
    }

    @PostMapping("/exists")
    public ResponseEntity<CommonResponse<MemberExistsDto.Response>> exists(@Valid @RequestBody MemberExistsDto.Request existsRequest) {
        return ResponseEntity.ok(CommonResponse.success(MemberExistsDto.Response.from(checkMemberExistsUsecase.exists(memberMapper.toCommand(existsRequest)))));
    }

    @PostMapping("/login")
    public ResponseEntity<CommonResponse<LoginDto.Response>> login(@Valid @RequestBody LoginDto.Request loginRequest) {
        var accessToken = loginUsecase.login(memberMapper.toCommand(loginRequest));

        return ResponseEntity.ok()
                .header(HttpHeaders.SET_COOKIE, createAccessTokenCookie(accessToken).toString())
                .body(CommonResponse.success(LoginDto.Response.builder()
                        .redirectUrl("/wiki")
                        .build()));
    }

    @GetMapping("/me")
    public ResponseEntity<CommonResponse<MemberSelfViewDto.Response>> getSelf(@AuthenticationPrincipal User userDetails) {
        // Details 미포함 정보가 필요하다면 조회 로직 추가
        return ResponseEntity.ok(CommonResponse.success(
                MemberSelfViewDto.Response.builder().email(userDetails.getUsername()).build()));
    }

    private ResponseCookie createAccessTokenCookie(String accessToken) {
        return WebUtils.createCookie(
                WebUtils.ACCESS_TOKEN_COOKIE_NAME,
                accessToken,
                1000L * 60 * 60,
                true,
                false,
                "/",
                WebUtils.COOKIE_SAME_SITE
        );
    }
}
