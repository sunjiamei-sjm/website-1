/*
 * @Version: 1.0
 * @Author: pluto
 * @Date: 2026-01-30 20:59:10
 * @LastEditTime: 2026-01-30 20:59:37
 * @Description: 
 */
// plugins/swiper.ts
import { defineNuxtPlugin } from '#app' // Nuxt3内置插件方法
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 导入Swiper完整样式（必须，否则分页器/导航按钮无样式、交互失效）
import 'swiper/swiper-bundle.css'

// 定义Nuxt插件并全局注册vue-awesome-swiper
export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(VueAwesomeSwiper)
})