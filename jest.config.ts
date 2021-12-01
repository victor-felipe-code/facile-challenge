/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
const { compilerOptions } = require('./tsconfig')
const { pathsToModuleNameMapper } = require('ts-jest/utils')

export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>'}),
  preset: "ts-jest",
  testMatch: [
    "**/**/*.spec.ts"
  ],
  verbose: true,
  // prisma config
  testEnvironment: 'node',
};
