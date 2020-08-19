const TEST_REGEX = "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$";

module.exports = {
  setupFiles: ["<rootDir>/jest.setup.js", "jest-canvas-mock"],
  testRegex: TEST_REGEX,
  transform: {
    "^.+\\.tsx?$": "babel-jest",
    "^.+\\.svg$": "<rootDir>/svgTransform.js",
  },
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/node_modules/",
    "<rootDir>/coverage/",
    "<rootDir>/.next/",
    "<rootDir>/pages/",
    "<rootDir>/static/",
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "json", "jsx", "node"],
  collectCoverage: true,
};
