package com.iowiki.member.application;

import com.iowiki.member.application.command.InitPasswordCommand;
import com.iowiki.member.application.port.in.MemberChangePasswordUsecase;
import com.iowiki.member.application.port.out.MemberRepositoryPort;
import com.iowiki.member.exception.MemberNotFoundException;
import com.iowiki.member.utils.PasswordGenerator;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class MemberChangePasswordService implements MemberChangePasswordUsecase {
    private final MemberRepositoryPort memberRepositoryPort;
    private final PasswordGenerator passwordGenerator;
    private final PasswordEncoder passwordEncoder;

    @Override
    public String initPassword(InitPasswordCommand command) {
        var member = memberRepositoryPort.findByEmail(command.email())
                .orElseThrow(MemberNotFoundException::new);

        var password = passwordGenerator.generate(8);
        member.updatePassword(passwordEncoder.encode(password));

        memberRepositoryPort.update(member);

        return password;
    }
}
