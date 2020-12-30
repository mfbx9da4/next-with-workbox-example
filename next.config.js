const { InjectManifest } = require('workbox-webpack-plugin')
const withSourceMaps = require('@zeit/next-source-maps')

module.exports = withSourceMaps({
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new InjectManifest({
        swSrc: './sw.js',
      })
    )
    return config
  },
})
