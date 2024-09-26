module.exports = {
  transform: {
    "^.+\\.tsx?$": "babel-jest",
    "^.+\\.jsx?$": "babel-jest", // Transform JavaScript and JSX files
  },
  transformIgnorePatterns: [
    "/node_modules/(?!axios|@fluentui/react-icons|@fluentui/react-context-selector)", // Exclude axios, @fluentui/react-icons, and @fluentui/react-context-selector from being ignored
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|svg)$": "jest-transform-stub", // Mock image imports
  },
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx", // Recognize JSX files
  ],
  testEnvironment: "jsdom", // Use jsdom test environment
};
