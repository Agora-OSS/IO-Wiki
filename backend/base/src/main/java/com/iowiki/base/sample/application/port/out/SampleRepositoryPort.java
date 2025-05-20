package com.iowiki.base.sample.application.port.out;

import com.iowiki.base.sample.domain.Sample;

import java.util.UUID;

public interface SampleRepositoryPort {
    UUID create(Sample sample);
}