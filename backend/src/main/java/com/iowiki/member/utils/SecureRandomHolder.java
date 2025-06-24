package com.iowiki.member.utils;

import lombok.experimental.UtilityClass;

import java.security.SecureRandom;

@UtilityClass
public class SecureRandomHolder {
    public static final SecureRandom INSTANCE = new SecureRandom();
}
