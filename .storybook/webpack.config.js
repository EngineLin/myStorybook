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

  config.module.rules.push({
    test: /\.styl$/,
    use: [
      "style-loader", // creates style nodes from JS strings
      "css-loader", // translates CSS into CommonJS
      "stylus-loader", // compiles Sass to CSS, using Node Sass by default
    ],
    include: path.resolve(__dirname, '../src/'),
  })

  // config.module.rules.push({
  //   test: /\.vue$/,
  //   use: [
  //     "vue-loader"
  //   ],
  //   include: path.resolve(__dirname, '../src/'),
  // })

  // // -- 重新設定svg loader --
  // config.module.rules.delete('svg')
  // config.module
  //   .rule('svg-sprite-loader')
  //   .test(/\.svg$/)
  //   .include
  //   .add(path.join(__dirname, '.', 'src/assets/icons/svg'))
  //   .end()
  //   .use('svg-sprite-loader')
  //   .loader('svg-sprite-loader')
  //   .options({
  //     symbolId: 'icon-[name]'
  //   })
  //

  return config
}
