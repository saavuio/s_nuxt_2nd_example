export default {
  mode: 'universal',
  srcDir: 'src',
  buildDir: '.nuxt/build',
  generate: {
    dir: '.nuxt/generated',
  },
  env: {
    NODE_ENV: process.env.NODE_ENV,
  },
  server: {
    host: '0.0.0.0',
  },
  head: {
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    link: [
      { rel: 'icon', type: 'image/png', href: '/icons/favicon.png' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Open+Sans' },
      { rel: 'stylesheet', type: 'text/css', href: '/zwicon/zwicon.css' },
      // prettier-ignore
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' },
      // prettier-ignore
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.jsdelivr.net/npm/froala-editor@2.9.3/css/froala_editor.pkgd.min.css' },
      // prettier-ignore
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.jsdelivr.net/npm/froala-editor@2.9.3/css/froala_style.min.css' },
    ],
    script: [
      // Needed for Froala
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.0/jquery.min.js' },
      { src: 'https://cdn.jsdelivr.net/npm/froala-editor@2.9.0/js/froala_editor.pkgd.min.js' },
    ],
  },

  // prettier-ignore
  plugins: [
    '@/plugins/vuetify-init',
  ],
  build: {
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue|ts)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
    transpile: [/^vuetify/],
  },
};
