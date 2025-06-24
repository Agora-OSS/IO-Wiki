package com.iowiki.member.application;

import com.iowiki.member.application.command.LoginCommand;
import com.iowiki.member.application.port.in.LoginUsecase;
import com.iowiki.member.application.port.out.MemberRepositoryPort;
import com.iowiki.member.exception.InvalidPasswordException;
import com.iowiki.member.exception.MemberNotFoundException;
import com.iowiki.security.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LoginService implements LoginUsecase {
    private final MemberRepositoryPort memberRepositoryPort;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;

    @Override
    public String login(LoginCommand command) {
        var member = memberRepositoryPort.findByEmail(command.email())
                .orElseThrow(MemberNotFoundException::new);

        if (!passwordEncoder.matches(command.password(), member.getPassword())) {
            throw new InvalidPasswordException();
        }

        return jwtTokenProvider.generateToken(member.getEmail());
    }
}
