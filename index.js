const { path } = require('@vuepress/shared-utils')

module.exports = (options = {}, context) => ({
  define () {
    const { siteConfig = {}} = context
    const pixelId = options.pixelId || siteConfig.pixelId
    const PIXEL_ID = pixelId || false
    return { PIXEL_ID }
  },

  enhanceAppFiles: path.resolve(__dirname, 'enhanceAppFile.js')
})
