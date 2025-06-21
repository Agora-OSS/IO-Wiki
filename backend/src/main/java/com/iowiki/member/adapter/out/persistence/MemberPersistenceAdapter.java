package com.iowiki.member.adapter.out.persistence;

import com.iowiki.member.application.port.out.MemberRepositoryPort;
import com.iowiki.member.domain.Member;
import com.iowiki.member.mapper.MemberMapper;
import com.querydsl.jpa.JPQLQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.support.PageableExecutionUtils;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
@RequiredArgsConstructor
public class MemberPersistenceAdapter implements MemberRepositoryPort {
    private final MemberRepository memberRepository;
    private final MemberMapper memberMapper;
    private final JPQLQueryFactory queryFactory;

    @Override
    public void create(Member member) {
        memberRepository.save(memberMapper.toEntity(member));
    }

    @Override
    public boolean existsByEmail(String email) {
        return memberRepository.existsByEmail((email));
    }

    @Override
    public Optional<Member> findByEmail(String email) {
        return memberRepository.findByEmail(email);
    }

    @Override
    public Page<Member> findBy(Pageable pageable) {
        QMemberEntity memberEntity = QMemberEntity.memberEntity;

        var members = queryFactory
                .selectFrom(memberEntity)
                .limit(pageable.getPageSize())
                .offset(pageable.getOffset())
                .fetch()
                .stream()
                .map(memberMapper::toDomain)
                .toList();

        var countQuery = queryFactory
                .select(memberEntity.count())
                .from(memberEntity);

        return PageableExecutionUtils.getPage(members, pageable, countQuery::fetchOne);
    }
}
