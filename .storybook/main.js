const path = require('path')

module.exports = {
    stories: [path.resolve(__dirname, '../src/stories/**/*.stories.@(js|jsx|ts|tsx|mdx)')],
    addons: [
      '@storybook/addon-viewport',
      '@storybook/addon-knobs',
      '@storybook/addon-notes',
      '@storybook/addon-actions',
      // '@storybook/addon-backgrounds'
    ]
}
