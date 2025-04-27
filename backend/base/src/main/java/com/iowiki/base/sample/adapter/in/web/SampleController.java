package com.iowiki.base.sample.adapter.in.web;

import com.iowiki.base.sample.adapter.in.web.dto.SampleCreateDto;
import com.iowiki.base.sample.application.port.in.CreateSampleUsecase;
import com.iowiki.base.sample.mapper.SampleMapper;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/sample")
@RequiredArgsConstructor
public class SampleController {
    private final CreateSampleUsecase createSampleUsecase;
    private final SampleMapper sampleMapper;

    @Operation(summary = "Create 예시", description = "Create 예시 API")
    @PostMapping("/create")
    public ResponseEntity<SampleCreateDto.Response> create(@Valid @RequestBody SampleCreateDto.Request createRequest) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(createSampleUsecase.create(sampleMapper.toCommand(createRequest)));
    }
}