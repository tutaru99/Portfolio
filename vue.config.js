module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/tutaru99.github.io'
    : '/',
  "transpileDependencies": [
    "vuetify"
  ],
}

/* When Hosting Normally Delete everything in this file */