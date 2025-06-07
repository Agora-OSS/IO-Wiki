package com.iowiki.member.adapter.out.persistence;

import com.iowiki.member.application.port.out.MemberRepositoryPort;
import com.iowiki.member.domain.Member;
import com.iowiki.member.mapper.MemberMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class MemberPersistenceAdapter implements MemberRepositoryPort {
    private final MemberRepository memberRepository;
    private final MemberMapper memberMapper;

    @Override
    public void create(Member member) {
        memberRepository.save(memberMapper.toEntity(member));
    }

    @Override
    public boolean existsByEmail(String email) {
        return memberRepository.existsByEmail((email));
    }
}
