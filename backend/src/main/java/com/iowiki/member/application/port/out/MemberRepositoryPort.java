package com.iowiki.member.application.port.out;

import com.iowiki.member.domain.Member;

public interface MemberRepositoryPort {
    void create(Member member);
    boolean existsByEmail(String email);
}
