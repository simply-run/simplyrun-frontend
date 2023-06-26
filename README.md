# Nextjs13 Project

### Stack

- Nextjs 13 (React Framework)
- React-Query (Data Fetching)
- Typescript (Strict Mode)
- Tailwindcss (CSS Framework)
- Jest (Unit Test)
- Storybook (UI Component Test and Documentation)
- Eslint (Linting)
- Prettier (Code Formatter)
- Husky (Git Hooks)
- Lint Staged (Run linters against staged git files)
- Commitlint (Lint commit messages)
- Vercel (Hosting)

### Under Consideration

- Github Actions (CI/CD)
- Nginx (Web Server)
- AWS (Cloud Provider)
- Docker (Containerization)
- Terraform (Infrastructure as Code)

## git 방식

- git flow 방식을 사용합니다.
- master, develop, feature 브랜치 사용합니다.
- pr은 develop 브랜치로 최소 1명 이상의 리뷰어가 필요합니다.

## git 커밋 메시지

- {type} : {subject}
- Feat : 새로운 기능 추가
- Fix : 버그 수정
- Refactor : 코드 리팩토링
- Docs : 문서 수정
- Style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
- Test : 테스트 코드, 리팩토링 테스트 코드 추가
- Chore : 빌드 업무 수정, 패키지 매니저 수정
- Etc : 그 외 자잘한 수정

## git flow clone 후 프로젝트 복제하는 법

```bash
git clone <remote_url>
git checkout -b develop origin/develop
git flow init -d
```