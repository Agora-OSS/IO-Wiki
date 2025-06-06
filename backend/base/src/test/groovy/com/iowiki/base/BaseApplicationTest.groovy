package com.iowiki.base

import spock.lang.Specification

class BaseApplicationTest extends Specification {
    def "Main"() {
        when:
        BaseApplication.main(new String[]{})

        then:
        noExceptionThrown()
    }
}
