# 로컬 환경 실행 방법

## 1. 환경 준비

- 필수 설치 항목:
    - Docker 및 Docker Compose
    - JDK 21 이상

## 2. 데이터베이스 실행

프로젝트 루트 디렉토리에서 아래 명령어를 실행하여 로컬 데이터베이스 컨테이너를 띄워줍니다.

```bash
cd ./.docker/local
docker-compose up
```

- 데몬 실행은 -d 옵션을 추가하면 됩니다.

## 3. 애플리케이션 실행

애플리케이션을 실행할 때 `local` 프로파일을 활성화해야 합니다.

### 3-1. 방법 1: 명령어로 실행

```bash
./gradlew bootRun --args='--spring.profiles.active=local'
```

### 3-2. 방법 2: IDE에서 실행

1. `Edit Configurations` (또는 Run/Debug Configurations) 메뉴를 열어주세요.
2. active profiles에 `local`을 추가합니다.
3. `Application` 클래스를 실행합니다.
