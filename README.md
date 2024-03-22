# front-core-study

## 모노레포 초기 세팅 히스토리

```bash
# corepack 유무 확인 및 활성화
# 1-1. corepack 설치 유무 확인(npm 깔면 보통 설치되어있음)
where npm

# 1-2. 아래 내용 출력시 /npm 부분 빼고 해당 폴더 내부 진입
/Users/유저이름/.nvm/versions/node/v20.9.0/bin/npm

# 1-3.
ls -al /Users/유저이름/.nvm/versions/node/v20.9.0/bin

# 1.4. 설치 유무 확인
OOOOO  1 USER  staff        45 10 24 09:55 corepack -> ../lib/node_modules/corepack/dist/corepack.js

# 1-5. corepack 활성화(끝)
corepack enable


# 2. yarn 캐시 config 확인
yarn config enableGlobalCache

# 2-1. true로 설정되어 있으면 .yarn 폴더 내부에 .cache 폴더가 생성되지 않음 => false로 변경
yarn config set enableGlobalCache false

# 2-2. 의존성 재설치 & .yarn/.cache 폴더 설치 확인(끝)
yarn
```
