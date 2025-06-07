package com.iowiki.member.application.port.out;

import com.iowiki.member.domain.Member;

import java.util.Optional;

public interface MemberRepositoryPort {
    void create(Member member);
    boolean existsByEmail(String email);
    Optional<Member> findByEmail(String email);
}
