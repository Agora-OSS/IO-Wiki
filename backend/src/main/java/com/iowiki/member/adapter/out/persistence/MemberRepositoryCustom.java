package com.iowiki.member.adapter.out.persistence;

import com.iowiki.member.domain.Member;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface MemberRepositoryCustom {
    Page<Member> findBy(Pageable pageable);
}
