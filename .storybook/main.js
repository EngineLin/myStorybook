const path = require('path')

module.exports = {
    stories: [path.resolve(__dirname, '../src/stories/**/*.stories.@(js|jsx|ts|tsx|mdx)')],
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-a11y',
        '@storybook/addon-backgrounds',
        '@storybook/addon-controls',
        '@storybook/addon-docs',
        '@storybook/addon-jest',
        '@storybook/addon-viewport',

        {
            name: '@storybook/addon-storysource',
            options: {
                rule: {
                    include: [path.resolve(__dirname, '../src/stories')]
                },
                loaderOptions: {
                    prettierConfig: {
                        printWidth: 80,
                        singleQuote: true
                    }
                }
            }
        },
    ],
    babelrc: {
        "presets": [
            "vue"
        ],
        "plugins": [
            "@babel/plugin-transform-flow-strip-types",
            ["@babel/plugin-proposal-decorators", { "legacy": true }],
            ["@babel/plugin-proposal-class-properties", { "loose": true }]
        ]
    }
}
