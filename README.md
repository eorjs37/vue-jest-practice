# vue-jest-practice

## vue 테스트 라이브러리
```bash
npm install @vue/cli-plugin-unit-jest@5.0.0 --save-dev
npm install @vue/test-utils@1.3.6 --save-dev
npm install @vue/vue2-jest@27.0.0 --save-dev
```

## babel 설치
```bash
npm install babel-core@^7.0.0-bridge.0 --save-dev
npm install babel-jest@27.3.1 --save-dev
npm install @babel/core@7.0.0-bridge.0 --save-dev
npm install @babel/preset-env@7.22.10 --save-dev
```
### babel.config.js 수정
```javascript
module.exports = {
  presets: [
    //"@babel/preset-env", 수동설정 원하는 경우
    '@vue/cli-plugin-babel/preset' //vue cli에서 자동설정됨
  ]
}
```

## jest 설치
```bash
npm install jest@27.0.3 --save-dev
```

## jest.config.js

```javascript
module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    moduleFileExtensions: [
        "js",
        "json",
        // 모든 vue 파일(`*.vue`)을 처리하기 위해 Jest에게 알려줍니다
        "vue"
    ],
    transform: {
        ".*\\.(vue)$": "@vue/vue2-jest",
        ".*\\.(js)$": "babel-jest",
    },
    moduleNameMapper: {
        // 별칭 @(프로젝트/src) 사용하여 하위 경로의 파일을 맵핑합니다
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    testMatch: [
        // __tests__ 경로 하위에 있는 모든 js/ts/jsx/tsx 파일을 테스트 대상으로 지정합니다
        "**/__tests__/**/*.[jt]s?(x)",
        // 파일 이름에 'xxx.spec' 또는 'xxx.test'라는 이름이 붙여인 모든 js/ts/jsx/tsx 파일을 테스트 대상으로 지정합니다
        "**/?(*.)+(spec|test).[jt]s?(x)"
    ],
    testPathIgnorePatterns: ["/node_modules/"],
    collectCoverage: true,
    collectCoverageFrom: [
        "**/*.{js,vue}",
        "!**/node_modules/**",
        "!**/coverage/**",
        "!**vue.config.js**",
        "!**babel.config.js**",
        "!**jest.config.js**",
    ]
}
```

## 명령어 등록
```json
//package.json
{
 "scripts": {
 	"test:unit": "vue-cli-service test:unit"
 }
}
```