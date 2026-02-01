/*
 * @Version: 1.0
 * @Author: pluto
 * @Date: 2026-01-30 16:20:17
 * @LastEditTime: 2026-01-31 13:47:11
 * @Description: 
 */
// // https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: '中国医药商业协会',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  css: [
    // 引入全局样式文件，路径基于项目根目录
    '../assets/css/base.css' 
  ],
  nitro: {
    devProxy: {
      '/website': {
        target: 'http://admin.capc.org.cn/website',
        changeOrigin: true,
        prependPath: true,
      }
    }
  },
  modules: [
    '@nuxt/ui',
    '@element-plus/nuxt'
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
  // 兼容性设置
  compatibilityDate: '2024-04-03',
  // 禁用 web-vitals 或配置兼容版本
  // 注意：不是所有 Nuxt 版本都支持这个配置
  experimental: {
    asyncEntry: false,
    clientFallback: false,
  },
  elementPlus: {
    icon: 'ElIcon'

  },
});