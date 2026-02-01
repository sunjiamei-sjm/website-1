<!--
 * @Version: 1.0
 * @Author: pluto
 * @Date: 2026-01-30 21:00:29
 * @LastEditTime: 2026-02-01 19:52:33
 * @Description: 
-->
<template>
  <div class="footer-container">
    <div class="padding-footer-container">
      <div class="footer-column" v-if="isBigScreen">
        <img src="/img/footer-logo.png" alt="logo" />
      </div>
      <div class="footer-column">
        <span>快速链接</span>
        <div class="ul-container" v-if="isBigScreen">
          <ul>
            <li><a href="#">关于协会</a></li>
            <li><a href="#">党建工作</a></li>
            <li><a href="#">协会动态</a></li>
            <li><a href="#">政策法规</a></li>
            <li><a href="#">行业统计</a></li>
          </ul>
          <ul :style="{ marginLeft: isBigScreen ? '40px' : '140px' }">
            <li><a href="#">标准工作</a></li>
            <li><a href="#">联系我们</a></li>
          </ul>
        </div>
        <div class="ul-container" v-else>
          <ul>
            <li><a href="#">关于协会</a></li>
            <li><a href="#">党建工作</a></li>
            <li><a href="#">协会动态</a></li>
            <li><a href="#">政策法规</a></li>
          </ul>
          <ul :style="{ marginLeft: isBigScreen ? '40px' : '140px' }">
            <li><a href="#">行业统计</a></li>
            <li><a href="#">标准工作</a></li>
            <li><a href="#">联系我们</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-column" v-if="isBigScreen">
        <span>会员天地</span>
        <ul>
          <li><a href="#">入会指南</a></li>
          <li><a href="#">技能竞赛</a></li>
          <li><a href="#">会员动态</a></li>
          <li><a href="#">下载中心</a></li>
        </ul>
      </div>
      <div class="footer-column" v-else>
        <span>会员天地</span>
        <div class="ul-container">
          <ul>
            <li><a href="#">入会指南</a></li>
            <li><a href="#">技能竞赛</a></li>
          </ul>
          <ul :style="{ marginLeft: isBigScreen ? '40px' : '140px' }">
            <li><a href="#">会员动态</a></li>
            <li><a href="#">下载中心</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-column">
        <span>联系我们</span>
        <ul>
          <li>
            <a href="#"
              ><img
                src="/img/footer-address-icon.png"
                alt="logo"
                class="footer-icon"
              />北京市丰台区国投财富广场4号楼310室</a
            >
          </li>
          <li>
            <a href="#"
              ><img
                src="/img/footer-phone-icon.png"
                alt="logo"
                class="footer-icon"
              />87273562-803(秘书处)   87273558-811(信息部)  <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;67274835-801(院外管理部)    
               </a
            >
          </li>
          <li>
            <a href="#"
              ><img
                src="/img/footer-em-icon.png"
                alt="logo"
                class="footer-icon"
              />secretariat@capc.org.cn</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom-container" v-if="isBigScreen">
      <span>
        © 2025 中国医药行业协会 版权所有 | 京ICP备14003715号-1

        <a href="#" class="privacy-link">隐私政策</a>
      </span>
      <span> 地址：北京市丰台区国投财富广场4号楼310室 邮编：100022 </span>
    </div>
    <div class="footer-bottom-container" style="margin-top: 30px" v-else>
      <span> © 2025 中国医药行业协会 版权所有 | 京ICP备14003715号-1 </span>
      <a href="#" class="privacy-link">隐私政策</a>
      <span style="margin-top: 30px">
        地址：北京市丰台区国投财富广场4号楼310室 邮编：100022
      </span>
    </div>
    <div class="footer-center-column" v-if="!isBigScreen">
      <img src="/img/footer-logo.png" alt="logo" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted,onBeforeMount } from "vue";
const isBigScreen = ref(true);
// 1. 防抖函数：限制函数高频执行
const debounce = (fn, delay = 500) => {
  let timer = null;
  return function () {
    clearTimeout(timer); // 清除上一次的定时器
    timer = setTimeout(() => {
      fn.apply(this, arguments); // 执行目标函数
    }, delay);
  };
};
// 2. 获取并处理屏幕宽度的核心函数
const handleScreenWidthChange = () => {
  // 关键API：document.documentElement.clientWidth → 获取当前可视区域的实际宽度（不含滚动条、边框）
  const currentWidth = document.documentElement.clientWidth;

  // 示例：根据宽度做响应式逻辑（如移动端/PC端区分）
  if (currentWidth < 1024) {
    isBigScreen.value = false;
  } else {
    isBigScreen.value = true;
  }
};
// 3. 为resize事件绑定防抖后的处理函数（核心步骤）
const debouncedHandle = debounce(handleScreenWidthChange);
 
onMounted(() => {
   
  window.addEventListener("resize", debouncedHandle);
});
</script>

<style lang="scss" scoped>
.footer-container {
  width: 100%;
  height: 395px;
  background: #019a53;
  padding: 48px 80px;
  box-sizing: border-box; /* 内边距计入容器宽度，避免溢出 */

  .padding-footer-container {
    border-bottom: 1px solid #166534;
    display: grid;
    /* 大屏核心：3列占比 30%、40%、30% */
    grid-template-columns: 19% 19% 19% 40%;
    gap: 1%; /* 列/行间距，不占用列宽，无溢出问题 */
    margin: 0 auto; /* 容器水平居中 */
    height: auto;
    .footer-column {
      /* 每个导航列 */

      flex: 1;

      /* 列标题样式 */
      span {
        font-size: 18px;
        margin-bottom: 20px;
        font-weight: bold;
        color: #fff;
        line-height: 36px;
      }
      .ul-container {
        display: flex;
        flex-direction: row;
      }

      /* 链接列表样式 */
      ul {
        list-style: none;
        padding: 0;
        margin-top: 20px;
      }

      li {
        margin-bottom: 12px;
      }

      a {
        color: #bbf7d0;
        text-decoration: none;
        font-size: 18px;
        transition: opacity 0.3s;
      }

      a:hover {
        opacity: 0.8;
      }
      .footer-icon {
        margin-right: 10px;
      }
    }
  }
  .footer-bottom-container {
    height: 73px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0px 20px;
    .privacy-link {
      color: #86efac;
      text-align: center;
      text-decoration: none;
    }
    span {
      color: #86efac;
    }
  }
}
/* 媒体查询：小屏适配（≤768px 切换为1列） */
@media (max-width: 1024px) {
  .footer-container {
    width: 100%;
    height: auto;
    background: #019a53;
    padding: 48px 0px 10px 0px;
    box-sizing: border-box; /* 内边距计入容器宽度，避免溢出 */
    .padding-footer-container {
      /* 小屏核心：单列占满容器可用宽度 */
      grid-template-columns: 100%;
      gap: 15px; /* 可选：小屏缩小间距，适配移动端 */
      padding: 15px;
      border-bottom: 1px solid #019a53;
      .footer-column {
        /* 每个导航列 */
        border-bottom: 1px dashed #efefef;
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        /* 列标题样式 */
        span {
          font-size: 18px;
          margin-bottom: 20px;
          font-weight: bold;
          color: #fff;
          line-height: 36px;
        }
        .ul-container {
          display: flex;
          flex-direction: row;
        }

        /* 链接列表样式 */
        ul {
          list-style: none;
          padding: 0;
          margin-top: 20px;
        }

        li {
          margin-bottom: 12px;
        }

        a {
          color: #bbf7d0;
          text-decoration: none;
          font-size: 18px;
          transition: opacity 0.3s;
        }

        a:hover {
          opacity: 0.8;
        }
        .footer-icon {
          margin-right: 10px;
        }
      }
    }
    .footer-center-column {
      height: 180px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
