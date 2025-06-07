package com.iowiki.member.application;

import com.iowiki.member.application.command.SignUpCommand;
import com.iowiki.member.application.port.in.SignUpUsecase;
import com.iowiki.member.application.port.out.MemberRepositoryPort;
import com.iowiki.member.exception.MemberDuplicateException;
import com.iowiki.member.mapper.MemberMapper;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Transactional
public class SignUpService implements SignUpUsecase {
    private final MemberRepositoryPort memberRepositoryPort;
    private final MemberMapper memberMapper;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void signUp(SignUpCommand command) {
        if (memberRepositoryPort.existsByEmail(command.email())) {
            throw new MemberDuplicateException();
        }

        var member = memberMapper.toDomain(command)
                .signUpWith(passwordEncoder.encode(command.password()));

        memberRepositoryPort.create(member);
    }
}
