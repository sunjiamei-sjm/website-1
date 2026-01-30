// // https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({

  
//   modules: [
//     // '@nuxt/content',
//     // '@nuxt/eslint',
//     // '@nuxt/image',
//     // '@nuxt/hints',
//     // '@nuxt/a11y',
//     // '@nuxt/scripts',
//     // '@nuxt/test-utils',
//     '@nuxt/ui',
//   ],
//   devtools: { enabled: true },
//   compatibilityDate: '2024-04-03',
//     // 插件配置
//   plugins: [
//     '~/plugins/crypto.client.ts'
//   ],
// })

export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  
  // 插件配置
  plugins: [
    '~/plugins/polyfills.client.ts',
    '~/plugins/crypto-polyfill.client.ts'
  ],
  
  // 构建配置
  vite: {
    build: {
      target: 'es2020'
    }
  },
  
  // UI 配置
  // ui: {
  //   icons: ['heroicons', 'simple-icons'] // 避免使用 Google Fonts
  // }
});