<template>
   <div>
      <div class="header-container">
         <div class="header-right" @click="goHome">
            <img src="/img/header-logo.png" alt="logo" class="logo" />
         </div>
         <div class="header-left">
            <span @click="goHome">首页</span>
            <span>关于协会</span>
            <span>党建工作</span>
            <span>协会动态 </span>
            <span>政策法规</span>
            <span>行业统计</span>
            <span>标准工作</span>
            <span>会员天地</span>
            <span>联系我们 </span>
            <div class="search"></div>
            <div class="phone-icon">=</div>
         </div>
      </div>
      <RouterView></RouterView>
   </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const goHome = () => {
   router.push('/')
}
</script>
<style lang="scss" scoped>
.header-container {
   width: 100%;
   height: 130px;
   background-color: #fff;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 20px 60px;
   box-sizing: border-box;

   .header-right {
      .logo {
         width: 280px;
         height: 50px;
         cursor: pointer;
      }
   }

   .header-left {
      color: #16A34A;
      font-size: 16px;
      font-family: sans-serif;
      cursor: pointer;
      display: flex;
      align-items: center;

      span {
         display: inline-block;
         margin: 0px 27px 0px 0px;
         font-weight: normal;

         &:hover {
            font-weight: bold;
         }
      }

      .search {
         width: 25px;
         height: 25px;
         background: #009A52;
         display: inline-block;
         cursor: pointer;
         border-radius: 5px;
      }
      .phone-icon {
         display: none;
      }

   }
}


@media (max-width: 1024px) {
   .header-container {
      width: 100%;
      height: 70px;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 17px;
      box-sizing: border-box;

      .header-right {
         .logo {
            width: 170px;
            height: 30px;
            cursor: pointer;
         }
      }
      .header-left {
         color: #16A34A;
         font-size: 16px;
         font-family: sans-serif;
         cursor: pointer;
         display: flex;
         align-items: center;

         span {
            display: none;
         }
         .search {
            display: none;
         }

         .phone-icon {
            width: 25px;
            height: 25px;
            background: #009A52;
            display: inline-block;
            cursor: pointer;
            border-radius: 5px;
            color: #fff;
            text-align: center;
         }
      }
   }
}
</style>
