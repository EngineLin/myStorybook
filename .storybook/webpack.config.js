const path = require('path')

// module.exports = async ({config}) => console.dir(config.plugins, {depth: null}) || config

module.exports = async ({config, mode}) => {

  config.module.rules.push({
    test: /\.scss$/,
    use: [
      "style-loader", // creates style nodes from JS strings
      "css-loader", // translates CSS into CommonJS
      "sass-loader", // compiles Sass to CSS, using Node Sass by default
    ],
    include: path.resolve(__dirname, '../src/'),
  })

  return config
}
