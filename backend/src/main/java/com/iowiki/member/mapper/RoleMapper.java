package com.iowiki.member.mapper;

import com.iowiki.member.adapter.out.persistence.RoleEntity;
import com.iowiki.member.domain.Role;
import com.iowiki.member.domain.RoleType;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface RoleMapper {
    @Mapping(target = "type", source = "roleType")
    RoleEntity toEntity(Role role);

    @Mapping(target = "roleType", source = "type")
    Role toDomain(RoleEntity roleEntity);

    default RoleEntity toEntity(RoleType roleType) {
        if (roleType == null) {
            return null;
        }
        return RoleEntity.builder().type(roleType).build();
    }

    default Role toDomain(RoleType roleType) {
        if (roleType == null) {
            return null;
        }
        return Role.from(roleType);
    }
}