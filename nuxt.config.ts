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

// export default defineNuxtConfig({
//   modules: [
//     '@nuxt/ui',
//   ],
//   devtools: { enabled: true },
//   compatibilityDate: '2024-04-03',
  
//   // 插件配置
//   plugins: [
//     '~/plugins/polyfills.client.ts',
//     '~/plugins/crypto-polyfill.client.ts'
//   ],
  
//   // 构建配置
//   vite: {
//     build: {
//       target: 'es2020'
//     }
//   },
  
//   // UI 配置
//   // ui: {
//   //   icons: ['heroicons', 'simple-icons'] // 避免使用 Google Fonts
//   // }
// });
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
  ],
  devtools: { enabled: true },
  
  // 添加插件

    plugins: [
    '~/plugins/polyfills.client.ts',
    '~/plugins/crypto.client.ts',
    '~/plugins/array-at-polyfill.client.ts',
  ],

  // 构建配置
  build: {
    transpile: [
      // 确保这些库被正确转译
      'vue-router',
      'web-vitals',
      '@nuxt/ui',
    ],
  },
  
  // Vite 配置
  vite: {
    build: {
      // 设置兼容性目标
      target: ['es2020', 'chrome87', 'firefox78', 'safari14'],
      rollupOptions: {
        output: {
          format: 'es',
        },
      },
    },
    esbuild: {
      target: 'es2020',
    },
  },
  
  // 兼容性设置
  compatibilityDate: '2024-04-03',
  
  // 禁用 web-vitals 或配置兼容版本
  // 注意：不是所有 Nuxt 版本都支持这个配置
  experimental: {
    asyncEntry: false,
    clientFallback: false,
  },
  
  // // UI 配置
  // ui: {
  //   icons: ['heroicons', 'simple-icons'],
  // },
});