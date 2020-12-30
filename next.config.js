const { InjectManifest } = require('workbox-webpack-plugin')
const withSourceMaps = require('@zeit/next-source-maps')

module.exports = withSourceMaps({
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))

    config.plugins.push(
      new InjectManifest({
        swSrc: './sw.js',
      })
    )

    // Important: return the modified config
    return config
  },
})
