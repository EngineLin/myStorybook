module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": true
        }
      }
    ]
  ],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1'
  },
  moduleFileExtensions: [
    "js",
    "vue"
  ],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
    '\\.(vue)$': 'jest-vue-preprocessor'
  },
}

