# ts-migration
미니트렐로를 만들었던 자바스크립트 코드를 타입스크립트로 마이그레이션합니다.


## 작업단계
### 1. typescript 세팅
- [x] 라이브러리 설치
- [x] 타입스크립트 설정파일 생성 및 기본 값 추가
- [x] 웹팩 설정
- [x] tsc 명령어로 타입스크립트 컴파일하기
- [x] ts파일로 이름 변경하기

#### trouble shooting
- resolve extension을 통해 ts 파일 번들링 설정 추가
- webpack 설정 시 css import가 안되는 문제


### 2. 명시적인 any로 타입 선언 점진적으로 하기