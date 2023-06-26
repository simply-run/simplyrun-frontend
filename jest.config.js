const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Next.js 애플리케이션의 경로를 지정하여 next.config.js와 .env 파일을 테스트 환경에서 로드합니다.
  dir: './',
});

const customJestConfig = {
  moduleNameMapper: {
    // 모듈 별칭을 처리합니다. (이 부분은 곧 자동으로 설정될 것입니다.)
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@/public/(.*)$': '<rootDir>/public/$1',
    '^__mocks__/(.*)$': '<rootDir>/__mocks__/$1',
  },
  setupFilesAfterEnv: ['./jest.setup.js'],
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    './**/*.{js,jsx,ts,tsx}',
    '!./**/_*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  coverageThreshold: {
    global: {
      branches: 30,
      functions: 30,
      lines: 30,
      statements: 30,
    },
  },
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
