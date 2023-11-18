const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('jest').Config} */
const customJestConfig = {
  testEnvironment: "jest-environment-jsdom",
  setupFiles: ["./personalizedJest.setup.js"],
  moduleNameMapper: {
    "^.+\\.(svg)$": "<rootDir>/src/__mocks__/svgr.tsx",
  },
};

module.exports = createJestConfig(customJestConfig);
