package com.iowiki.member.adapter.out.persistence;

import com.iowiki.member.domain.RoleType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "role")
public class RoleEntity {
    @Id
    @Enumerated(EnumType.STRING)
    @Column(length = 3, nullable = false)
    private RoleType roleType;
}
