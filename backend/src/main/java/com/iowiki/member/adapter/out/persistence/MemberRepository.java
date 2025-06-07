package com.iowiki.member.adapter.out.persistence;

import com.iowiki.member.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface MemberRepository extends JpaRepository<MemberEntity, UUID> {
    boolean existsByEmail(String email);

    Optional<Member> findByEmail(String email);
}
