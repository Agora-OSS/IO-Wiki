package com.iowiki.common.utils;

import lombok.experimental.UtilityClass;
import org.springframework.http.ResponseCookie;

import java.time.Duration;

@UtilityClass
public class WebUtils {
    public static final String COOKIE_SAME_SITE = "Strict";
    public static final String COOKIE_ROOT_PATH = "/";

    public static ResponseCookie createCookie(String name,
                                              String value,
                                              long maxAgeSeconds,
                                              boolean httpOnly,
                                              boolean secure,
                                              String path,
                                              String sameSite) {
        ResponseCookie.ResponseCookieBuilder builder = ResponseCookie.from(name, value)
                .maxAge(Duration.ofSeconds(maxAgeSeconds))
                .httpOnly(httpOnly)
                .secure(secure)
                .path(path);

        if (sameSite != null) {
            builder.sameSite(sameSite);
        }

        return builder.build();
    }

    public static ResponseCookie removeCookieBy(String name, String path) {
        return ResponseCookie.from(name)
                .path(path)
                .maxAge(0)
                .build();
    }
}
