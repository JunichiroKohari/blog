require('dotenv').config()
const client = require('./plugins/contentful').default

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    { src: '@/assets/css/common.scss', lang: 'scss' },
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    'plugins/greetingForDeveloper',
    'plugins/contentful',
    'plugins/components'
  ],
  /*
  ** Nuxt.js middleware
  */
  router: {
    middleware: [
      'getContentful'
    ]
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/markdownit'
  ],
  env: {
    // contentful
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_BLOG_POST_TYPE_ID: process.env.CTF_BLOG_POST_TYPE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN
  },
  markdownit: {
    injected: true
  },
  generate: {
    routes() {
      return Promise.all([
        client.getEntries({
          content_type: process.env.CTF_BLOG_POST_TYPE_ID
        }),
        client.getEntries({
          content_type: 'category'
        })
      ]).then(([ posts, categories ]) => {
        return [
          ...posts.items.map(post => {
            return { route: `posts/${post.fields.slug}`, payload: post }
          }),
          ...categories.items.map((category) => {
            return { route: `categories/${category.fields.slug}`, payload: category }
          })
        ]
      })
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
