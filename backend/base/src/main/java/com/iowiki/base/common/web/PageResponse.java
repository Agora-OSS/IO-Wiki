package com.iowiki.base.common.web;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public record PageResponse<T>(
        List<T> content,
        int page,
        int size,
        long totalElements,
        int totalPages,
        boolean hasNext,
        boolean hasPrevious
) {
    public static <T> PageResponse<T> of(Page<T> page) {
        return new PageResponse<>(
                page.getContent(),
                page.getNumber(),
                page.getSize(),
                page.getTotalElements(),
                page.getTotalPages(),
                page.hasNext(),
                page.hasPrevious()
        );
    }

    public static <T> PageResponse<T> of(List<T> content, Pageable pageable, long total) {
        int totalPages = (int) Math.ceil((double) total / pageable.getPageSize());
        boolean hasNext = pageable.getPageNumber() + 1 < totalPages;
        boolean hasPrevious = pageable.getPageNumber() > 0;

        return new PageResponse<>(
                content,
                pageable.getPageNumber(),
                pageable.getPageSize(),
                total,
                totalPages,
                hasNext,
                hasPrevious
        );
    }
}

