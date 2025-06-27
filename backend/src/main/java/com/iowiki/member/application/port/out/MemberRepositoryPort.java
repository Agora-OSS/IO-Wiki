package com.iowiki.member.application.port.out;

import com.iowiki.member.adapter.out.persistence.MemberRepositoryCustom;
import com.iowiki.member.domain.Member;

import java.util.Optional;
import java.util.UUID;

public interface MemberRepositoryPort extends MemberRepositoryCustom {
    void create(Member member);
    boolean existsByEmail(String email);
    Optional<Member> findByEmail(String email);
    void update(Member member);
    void deleteById(UUID uuid);
}
