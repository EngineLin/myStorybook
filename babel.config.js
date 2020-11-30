module.exports ={
    presets: [
        "vue",
        [
            "@babel/preset-env",
            {
                "targets": {
                    "node": true
                }
            }
        ]
    ],
    plugins: [
        "@babel/plugin-transform-flow-strip-types",
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        ["@babel/plugin-proposal-class-properties", { "loose": true }]
    ]
}
