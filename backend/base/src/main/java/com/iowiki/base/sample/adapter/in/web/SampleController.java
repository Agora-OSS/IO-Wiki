package com.iowiki.base.sample.adapter.in.web;

import com.iowiki.base.sample.application.command.CreateSampleCommand;
import com.iowiki.base.sample.application.port.in.ManageSampleUsecase;
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
    private final ManageSampleUsecase manageSampleUsecase;

    @Operation(summary = "Create 예시", description = "Create 예시 API")
    @PostMapping("/create")
    public ResponseEntity<CreateSampleCommand.Response> create(@Valid @RequestBody CreateSampleCommand.Request requestCommand) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(manageSampleUsecase.create(requestCommand));
    }
}