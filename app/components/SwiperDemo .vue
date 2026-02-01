<!--
 * @Version: 1.0
 * @Author: pluto
 * @Date: 2026-01-30 21:00:29
 * @LastEditTime: 2026-01-31 09:24:19
 * @Description: 
-->
<template>
  <div class="swiper-wrap">
    <client-only>
      <!-- Swiper容器：绑定配置项 + ref获取实例 -->
      <swiper
        class="my-swiper"
        :options="swiperOptions"
        ref="swiperRef"
        @swiper="onSwiperInit"
      >
        <!-- 轮播项：v-for循环渲染 -->
        <swiper-slide v-for="(item, idx) in swiperList" :key="idx">
          <div class="slide-item" :style="{ backgroundColor: item.bg }">
            <h2 class="slide-title">{{ item.title }}</h2>
          </div>
        </swiper-slide>

        <!-- 分页器（小圆点）：固定slot + 官方类名，与配置项对应 -->
        <div class="swiper-pagination" style="height:30px" slot="pagination">vvv</div>
      </swiper>
    </client-only>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
// 关键：导入Swiper内置类型，用于TS严格标注（无需额外安装类型包）
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css' // 基础样式（必加）
import 'swiper/css/pagination' // 分页器样式（与配置对应）
import 'swiper/css/scrollbar'
// 1. 轮播数据：ref响应式定义
const swiperList = ref([
  { title: "Nuxt3 + TS 轮播1", bg: "#e53e3e" },
  { title: "Nuxt3 + TS 轮播2", bg: "#38a169" },
  { title: "Nuxt3 + TS 轮播3", bg: "#3182ce" },
  { title: "Nuxt3 + TS 轮播4", bg: "#805ad5" },
]);

const nativeSwiper = ref<Swiper | null>(null);
const swiperOptions = ref<SwiperOptions>({
  autoplay: { delay: 3000, disableOnInteraction: false },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true, // 可点击分页器切换
  },
});

// 事件回调：直接获取原生实例（初始化完成后触发）
const onSwiperInit = (swiper: Swiper) => {
  nativeSwiper.value = swiper;
  console.log("原生实例已初始化：", swiper);
};
</script>

<style lang="scss" scoped>
.swiper-wrap {
  border: 2px solid green;
  width: 100%;
  height: 100%;
  .my-swiper {
    width: 100%;
    height: 100%;
  }
  /* 轮播项基础样式 */
  .slide-item {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .slide-title {
    color: #fff;
    font-size: 2rem;
    font-weight: 700;
  }
  /* 按钮样式 */
  .btn {
    padding: 0.5rem 1.5rem;
    border: none;
    border-radius: 4px;
    background: #3182ce;
    color: #fff;
    cursor: pointer;
    font-size: 1rem;
  }
  .btn:hover {
    background: #2b6cb0;
  }
  // .swiper-pagination {
  //   z-index: 99;
  //   height: 30px;
  //   width: 300px;
  //   position: absolute;
  //   bottom: 0;
  //   left: 50%;
  //   margin-left: -150px;
  // }
  /* Nuxt3 scoped样式穿透：修改Swiper内置组件样式 */
  /* 用:deep()（Vue3/Nuxt3官方推荐），替代旧的/deep/ */
  :deep(.swiper-pagination-bullet-active) {
    background: #fff !important;
    opacity: 1;
  }
  :deep(.swiper-button-prev),
  :deep(.swiper-button-next) {
    color: #fff !important;
  }
}
</style>
