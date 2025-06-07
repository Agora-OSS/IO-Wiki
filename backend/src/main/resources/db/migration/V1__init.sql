CREATE TABLE role (
                      type CHAR(3) NOT NULL,
                      CONSTRAINT PK_ROLE PRIMARY KEY (type)
);
COMMENT ON COLUMN role.type IS '역할 유형';

CREATE TABLE member (
                        uuid UUID NOT NULL,
                        role_type CHAR(3) NOT NULL,
                        email VARCHAR(320) NOT NULL UNIQUE,
                        password VARCHAR(255) NOT NULL,
                        approval_type CHAR(3) NOT NULL DEFAULT 'PEN',
                        approval_at TIMESTAMP NULL,
                        created_at TIMESTAMP NOT NULL,
                        updated_at TIMESTAMP NULL,
                        CONSTRAINT PK_MEMBER PRIMARY KEY (uuid)
);

COMMENT ON COLUMN member.uuid IS '회원 PK(UUID)';
COMMENT ON COLUMN member.role_type IS '역할 유형';
COMMENT ON COLUMN member.email IS '회원 이메일 (UNIQUE)';
COMMENT ON COLUMN member.password IS '회원 비밀번호';
COMMENT ON COLUMN member.approval_type IS '승인유형';
COMMENT ON COLUMN member.approval_at IS '회원가입 승인 일시';
COMMENT ON COLUMN member.created_at IS '회원가입 일시';
COMMENT ON COLUMN member.updated_at IS '회원정보수정 일시';

CREATE TABLE member_deletion_log (
                                     uuid UUID NOT NULL,
                                     email VARCHAR(320) NOT NULL,
                                     deleted_at TIMESTAMP NOT NULL,
                                     deleter_type CHAR(3) NOT NULL,
                                     CONSTRAINT PK_MEMBER_DELETION_LOG PRIMARY KEY (uuid)
);

COMMENT ON COLUMN member_deletion_log.uuid IS '회원 삭제 로그 PK(UUID)';
COMMENT ON COLUMN member_deletion_log.email IS '회원 이메일';
COMMENT ON COLUMN member_deletion_log.deleted_at IS '회원 삭제 일시';
COMMENT ON COLUMN member_deletion_log.deleter_type IS '회원 삭제자 유형';

CREATE TABLE document (
                          uuid UUID NOT NULL,
                          creator_uuid UUID NOT NULL,
                          updater_uuid UUID NOT NULL,
                          title VARCHAR(255) NOT NULL,
                          content_url TEXT NOT NULL DEFAULT '',
                          created_at TIMESTAMP NOT NULL,
                          updated_at TIMESTAMP NULL,
                          CONSTRAINT PK_DOCUMENT PRIMARY KEY (uuid)
);

COMMENT ON COLUMN document.uuid IS '문서 PK(UUID)';
COMMENT ON COLUMN document.creator_uuid IS '생성 회원 PK(UUID)';
COMMENT ON COLUMN document.updater_uuid IS '수정 회원 PK(UUID)';
COMMENT ON COLUMN document.title IS '제목';
COMMENT ON COLUMN document.content_url IS '내용 파일 URL';
COMMENT ON COLUMN document.created_at IS '생성일자';
COMMENT ON COLUMN document.updated_at IS '수정일자';

CREATE TABLE comment (
                         uuid UUID NOT NULL,
                         document_uuid UUID NOT NULL,
                         creator_uuid UUID NOT NULL,
                         content TEXT NOT NULL DEFAULT '',
                         created_at TIMESTAMP NOT NULL,
                         updated_at TIMESTAMP NULL,
                         CONSTRAINT PK_COMMENT PRIMARY KEY (uuid)
);

COMMENT ON COLUMN comment.uuid IS '댓글 PK(UUID)';
COMMENT ON COLUMN comment.document_uuid IS '문서 PK(UUID)';
COMMENT ON COLUMN comment.creator_uuid IS '생성 회원 PK(UUID)';
COMMENT ON COLUMN comment.content IS '내용';
COMMENT ON COLUMN comment.created_at IS '생성일자';
COMMENT ON COLUMN comment.updated_at IS '수정일자';
