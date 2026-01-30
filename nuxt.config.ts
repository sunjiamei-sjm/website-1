// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  
  modules: [
    // '@nuxt/content',
    // '@nuxt/eslint',
    // '@nuxt/image',
    // '@nuxt/hints',
    // '@nuxt/a11y',
    // '@nuxt/scripts',
    // '@nuxt/test-utils',
    '@nuxt/ui',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
    // 插件配置
  plugins: [
    '~/plugins/crypto.client.ts'
  ],
})