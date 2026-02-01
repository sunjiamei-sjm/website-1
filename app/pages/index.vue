<!--
 * @Version: 1.0
 * @Author: pluto
 * @Date: 2026-01-30 16:20:17
 * @LastEditTime: 2026-01-31 22:32:53
 * @Description: 
-->
<template>
  <div class="index-container">
    <div class="banner-container">
      <SwiperDemo />
    </div>
    <div class="first-grid-container">
      <!-- 党建工作 -->
      <div class="party-building-work">
        <!-- 头部导航区 -->
        <div class="header">
          <span class="title">党建工作</span>
          <div class="tabs">
            <span
              @click="handleClickPolicies('1')"
              class="tab"
              :class="{ active: currentPartyBuildingType === '1' }"
              >方针政策</span
            >
            <span
              @click="handleClickPolicies('2')"
              class="tab"
              :class="{ active: currentPartyBuildingType === '2' }"
              >党建活动</span
            >
          </div>
          <a href="#" class="more">更多</a>
        </div>

        <!-- 列表内容区 -->
        <div class="news-list">
          <div class="news-item" v-for="(item, index) in partyBuildingWorkData">
            <h3 class="news-title">{{ item.title }}</h3>
            <div class="time-container">
              <img src="/img/time-icon.png" alt="logo" class="time-icon" />
              <span class="date">{{ item.publish_time }}</span>
            </div>

            <p class="news-desc">
              {{ item.excerpt }}
            </p>
          </div>
        </div>
      </div>
      <!-- 协会活动 -->
      <div class="association-activities">
        <!-- 头部导航区 -->
        <div class="header">
          <span class="title">协会活动</span>

          <a href="#" class="more">更多</a>
        </div>
        <div class="active-img">
          <img :src="currentAssociationImg" />
        </div>
        <div class="active-list">
          <div class="news-item" v-for="(item, index) in associationData">
            <div class="radio"></div>
            <span class="news-title">{{ item.title }}</span>
            <div class="time-container">
              <img src="/img/time-icon.png" alt="logo" class="time-icon" />
              <span class="date">{{ item.publish_time }}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 通知公告 -->
      <div class="notice">
        <!-- 头部导航区 -->
        <div class="header">
          <span class="title">通知公告</span>

          <a href="#" class="more">更多</a>
        </div>
        <div class="notice-list">
          <el-timeline :mode="mode">
            <el-timeline-item
              v-for="(activity, index) in noticeData"
              :key="index"
              :timestamp="activity.content"
            >
              {{ activity.timestamp }}
            </el-timeline-item>
          </el-timeline>
        </div>
      </div>
    </div>
    <div class="second-grid-container">
      <!-- 政策法规 -->
      <div class="each-item">
        <!-- 头部导航区 -->
        <div class="header">
          <span class="title">政策法规</span>
          <div class="tabs">
            <span
              class="tab"
              @click="handleClickPoliciesAndRegulations('5')"
              :class="{ active: currentPoliciesAndRegulationsType === '5' }"
              >政策法规</span
            >
            <span
              class="tab"
              @click="handleClickPoliciesAndRegulations('6')"
              :class="{ active: currentPoliciesAndRegulationsType === '6' }"
              >意见征集</span
            >
          </div>
        </div>
        <div class="active-img">
          <div class="container">
            <img :src="currentPoliciesAndRegulations.thumbnail" />
            <div class="img-des">
              <div class="img-title">
                <span>{{ currentPoliciesAndRegulations.title }}</span>
              </div>
              <div class="img-time">
                <span>{{ currentPoliciesAndRegulations.publish_time }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="active-list">
          <div
            class="news-item"
            v-for="(item, index) in policiesAndRegulations"
          >
            <span class="time">{{ item.publish_time }}</span>
            <span class="news-title">{{ item.title }}</span>
          </div>
        </div>
      </div>

      <!-- 行业统计 -->
      <div class="each-item">
        <!-- 头部导航区 -->
        <div class="header">
          <span class="title">行业统计</span>
          <div class="tabs">
            <span class="tab active">专项调查</span>
            <span class="tab">直报系统</span>
          </div>
        </div>
        <div class="active-img">
          <div class="container">
            <img :src="currentIndustryStatistics.thumbnail" />
            <div class="img-des">
              <div class="img-title">
                <span>{{ currentIndustryStatistics.title }}</span>
              </div>
              <div class="img-time">
                <span>{{ currentIndustryStatistics.publish_time }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="active-list">
          <div class="news-item" v-for="(item, index) in industryStatistics">
            <span class="time">{{ item.publish_time }}</span>
            <span class="news-title">{{ item.title }}</span>
          </div>
        </div>
      </div>

      <!-- 标准工作 -->
      <div class="each-item">
        <!-- 头部导航区 -->
        <div class="header">
          <span class="title">标准工作</span>
          <div class="tabs">
            <span
              class="tab"
              @click="handleClickStandardWork('8')"
              :class="{ active: currentStandardWorkType === '8' }"
              >标准发布</span
            >
            <span
              class="tab"
              @click="handleClickStandardWork('9')"
              :class="{ active: currentStandardWorkType === '9' }"
              >标准宣贯</span
            >
          </div>
        </div>
        <div class="active-img">
          <div class="container">
            <img :src="currentStandardWork.thumbnail" />
            <div class="img-des">
              <div class="img-title">
                <span>{{ currentStandardWork.title }}</span>
              </div>
              <div class="img-time">
                <span>{{ currentStandardWork.publish_time }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="active-list">
          <div class="news-item" v-for="(item, index) in standardWork">
            <span class="time">{{ item.publish_time }}</span>
            <span class="news-title">{{ item.title }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="third-grid-container">
      <div class="each-item">
        <div class="header">
          <span class="title">人才建设</span>
          <div class="tabs">
            <span
              class="tab"
              @click="handleClickskillsCompetition('11')"
              :class="{ active: currentClickskillsCompetitionType === '11' }"
              >技能竞赛</span
            >
            <span
              class="tab"
              @click="handleClickskillsCompetition('10')"
              :class="{ active: currentClickskillsCompetitionType === '10' }"
              >专业培训</span
            >
          </div>
        </div>
        <div class="carousel-conatiner">
          <div class="prev-btn" @click="prevSlide">
            <img src="/img/left-button.png" alt="left" />
          </div>
          <el-carousel
            style="width: 100%"
            ref="carouselRef"
            :autoplay="false"
            :loop="false"
            height="175px"
            arrow="never"
          >
            <el-carousel-item
              class="carousel-container"
              v-for="(group, index) in carouselData"
              :key="index"
            >
              <div
                class="carousel-group"
                v-for="(image, imgIndex) in group"
                :key="imgIndex"
              >
                <img :src="image.thumbnail" :alt="image.title" />
              </div>
            </el-carousel-item>
          </el-carousel>
          <div class="next-btn" @click="nextSlide">
            <img src="/img/right-button.png" alt="right" />
          </div>
        </div>
      </div>
      <div class="each-item">
        <div class="header">
          <span class="title">会员天地</span>
          <div class="tabs">
            <span class="tab active">会员动态</span>
          </div>
        </div>
        <div class="member-list">
          <div class="container" v-for="(item, index) in memberWorldData">
            <img :src="item.thumbnail" />
            <div class="img-des">
              <div class="img-title">
                <span>{{ item.title }}</span>
              </div>
              <div class="img-time">
                <span>{{ item.publish_time }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
// 导入自定义轮播组件（Nuxt3支持自动导入，也可手动导入）
import SwiperDemo from "../components/SwiperDemo .vue";
import type { TimelineProps } from "element-plus";
const dataList2 = [1, 2, 3, 4, 5];
const currentPartyBuildingType = ref("1");
const partyBuildingWorkData = ref();
const associationData = ref();
const currentAssociationImg = ref("");
const currentPoliciesAndRegulations = ref({} as any);
const noticeData = ref();
const industryStatistics = ref();
const policiesAndRegulations = ref();
const currentIndustryStatistics = ref({} as any);
const standardWork = ref();
const currentStandardWork = ref({} as any);
const currentPoliciesAndRegulationsType = ref("5");
const currentStandardWorkType = ref("8");
const currentClickskillsCompetitionType = ref("11");
const skillsCompetitionData = ref();
const memberWorldData = ref();
const carouselData = ref([]);
const mode = ref<TimelineProps["mode"]>("start");

const groupSize = ref(2);
const fetchPartyBuildingWorkData = async (category: string) => {
  let result = await $fetch("/website/Article/clist", {
    method: "GET",
    params: { category: category, limit: 9, page: 1 },
  });
  if (category === "1" || category === "2") {
    //党建工作-方针政策 '1'
    //党建工作-党建活动 '2'
    partyBuildingWorkData.value = result.data ? result.data.data : [];
  } else if (category === "3") {
    //协会活动 '3'
    associationData.value = result.data ? result.data.data : [];
    currentAssociationImg.value = associationData.value[0].thumbnail;
  } else if (category === "4") {
    //通知公告 '4'
    noticeData.value = [];
    result.data?.data?.forEach((item) => {
      noticeData.value.push({
        content: item.title,
        timestamp: item.publish_time,
      });
    });
  } else if (category === "5" || category === "6") {
    //政策法规 '5'
    policiesAndRegulations.value = result.data ? result.data.data : [];
    if (policiesAndRegulations.value.length > 0) {
      currentPoliciesAndRegulations.value = policiesAndRegulations.value[0];
    } else {
      currentPoliciesAndRegulations.value = {};
    }
  } else if (category === "7") {
    //直报系统
    industryStatistics.value = result.data ? result.data.data : [];
    if (industryStatistics.value.length > 0) {
      currentIndustryStatistics.value = industryStatistics.value[0];
    } else {
      currentIndustryStatistics.value = {};
    }
  } else if (category === "8" || category === "9") {
    //标准工作-标准发布 '8
    //标准工作-标准宣贯 '9
    standardWork.value = result.data ? result.data.data : [];

    if (standardWork.value.length > 0) {
      currentStandardWork.value = standardWork.value[0];
    } else {
      currentStandardWork.value = {};
    }
  } else if (category === "11" || category === "10") {
    //人才建设-技能竞赛 '11
    //人才建设-专业培训 '10
    skillsCompetitionData.value = result.data ? result.data.data : [];
    carouselData.value = [];
    for (
      let i = 0;
      i < skillsCompetitionData.value.length;
      i += groupSize.value
    ) {
      carouselData.value.push(
        skillsCompetitionData.value.slice(i, i + groupSize.value)
      );
    }
    memberWorldData.value = result.data ? result.data.data.slice(0, 2) : [];
  }
};
const handleClickPolicies = (type: string) => {
  currentPartyBuildingType.value = type;
  fetchPartyBuildingWorkData(type);
};
const handleClickPoliciesAndRegulations = (type: string) => {
  currentPoliciesAndRegulationsType.value = type;
  fetchPartyBuildingWorkData(type);
};
const handleClickStandardWork = (type: string) => {
  currentStandardWorkType.value = type;
  fetchPartyBuildingWorkData(type);
};
const handleClickskillsCompetition = (type: string) => {
  currentClickskillsCompetitionType.value = type;
  fetchPartyBuildingWorkData(type);
};
const carouselRef = ref();
const nextSlide = () => {
  carouselRef.value.next();
};
const prevSlide = () => {
  carouselRef.value.prev();
};
watch(
  () => groupSize.value,
  async (val: number) => {
    if (skillsCompetitionData.value) {
      carouselData.value = [];
      for (
        let i = 0;
        i < skillsCompetitionData.value.length;
        i += groupSize.value
      ) {
        carouselData.value.push(
          skillsCompetitionData.value.slice(i, i + groupSize.value)
        );
      }
      if (groupSize.value === 1) {
        memberWorldData.value = skillsCompetitionData.value.slice(0, 1);
      } else {
        memberWorldData.value = skillsCompetitionData.value.slice(0, 2);
      }
    }
  },
  {
    immediate: true,
  }
);
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
  console.log("当前屏幕/窗口宽度：", currentWidth, "px");

  // 示例：根据宽度做响应式逻辑（如移动端/PC端区分）
  if (currentWidth < 1024) {
    groupSize.value = 1;
  } else {
    groupSize.value = 2;
  }
};

// 3. 为resize事件绑定防抖后的处理函数（核心步骤）
const debouncedHandle = debounce(handleScreenWidthChange);

onMounted(() => {
  //党建工作-方针政策
  fetchPartyBuildingWorkData("1");
  //协会活动
  fetchPartyBuildingWorkData("3");
  //通知公告
  fetchPartyBuildingWorkData("4");
  //政策法规-政策法规
  fetchPartyBuildingWorkData("5");
  //行业统计-专项调查
  fetchPartyBuildingWorkData("7");
  // 标准工作-标准发布
  fetchPartyBuildingWorkData("8");
  // 人才建设-专业培训
  fetchPartyBuildingWorkData("10");
  // 人才建设-技能竞赛
  fetchPartyBuildingWorkData("11");
  handleScreenWidthChange();
  window.addEventListener("resize", debouncedHandle);
  // 会员天地
  // fetchPartyBuildingWorkData("11");
});
</script>
<style lang="scss" scoped>
.index-container {
  .banner-container {
    height: 598px;
    width: 100%;
  }
  /* 容器：Flex 布局 + 自动换行 */
  .first-grid-container {
    background: linear-gradient(#fef9f4, #fef9f5);
    display: grid;
    /* 大屏核心：3列占比 30%、40%、30% */
    grid-template-columns: 32.43% 31.73% 21.04%;
    gap: 7.34%; /* 列/行间距，不占用列宽，无溢出问题 */
    padding: 53px 86px 44px 80px;
    margin: 0 auto; /* 容器水平居中 */
    box-sizing: border-box; /* 内边距计入容器宽度，避免溢出 */
  }

  .party-building-work {
    /* 头部 Grid 布局 */
    height: 529px;
    display: flex;
    flex-direction: column;
    .header {
      padding: 0 28px;
      height: 66px;
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
      border-bottom: 1px solid #efefef;
      box-sizing: border-box;
    }

    .title {
      font-size: 24px;
      color: #be2021;
      font-weight: bold;
    }

    .tabs {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
    }

    .tab {
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 14px;
      cursor: pointer;
    }

    .active {
      background-color: #be2021;
      color: #fff;
    }

    .more {
      font-size: 14px;
      color: #be2021;
      text-decoration: none;
      font-weight: bold;
    }

    /* 新闻列表 Grid 布局 */
    .news-list {
      display: grid;
      flex: 1;
      padding: 15px 28px 26px 28px;
      overflow: auto;
    }

    .news-item {
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid #e5e7eb;
      justify-content: flex-start;
      padding: 5px;
    }

    .news-title {
      font-size: 18px;
      font-weight: 500;
      color: #000000;
      cursor: pointer;
      line-height: 30px;
    }
    .time-container {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      .time-icon {
        width: 16px;
        height: 16px;
      }
      .date {
        font-size: 14px;
        line-height: 10px;
        color: #3d3d3d;
        margin-left: 10px;
      }
    }

    .news-desc {
      font-size: 16px;
      color: #4b5563;
      white-space: normal; /* 多行省略需设为normal，单行才用nowrap */
      overflow: hidden;
      /* 3. 核心：控制显示行数+省略号（主流浏览器支持） */
      display: -webkit-box; /* 弹性盒模型（webkit内核私有） */
      -webkit-line-clamp: 2; /* 关键：限制显示的行数，改为3就是超过三行省略 */
      -webkit-box-orient: vertical; /* 弹性盒排列方向：垂直 */
      text-overflow: ellipsis; /* 兼容兜底，配合上述属性显示省略号 */
    }
  }
  .association-activities {
    display: flex;
    flex-direction: column;
    height: 529px;
    width: 100%;
    .header {
      padding: 0 28px;
      height: 66px;
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
      border-bottom: 1px solid #efefef;
      box-sizing: border-box;
    }

    .title {
      font-size: 24px;
      color: #009a52;
      font-weight: bold;
    }
    .more {
      font-size: 14px;
      color: #009a52;
      text-decoration: none;
      font-weight: bold;
      text-align: right;
    }
    .active-img {
      width: 100%;
      height: auto;
      border-radius: 10px;
      box-sizing: border-box;
      padding: 10px 27px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 16px;
      img {
        width: 100%;
        border-radius: 10px;
      }
    }
    .active-list {
      padding: 10px 27px;
      overflow: auto;
      flex: 1;

      .news-item {
        display: flex;
        flex-direction: row;

        align-items: center;
        height: 30px;
        .radio {
          height: 3px;
          width: 3px;
          background: #000000;
        }

        .news-title {
          margin-left: 10px;
          color: #4b5563;
          font-size: 16px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          flex: 1; /* 必须设置固定宽度/最大宽度（容器需有明确宽度限制） */
        }
      }
    }
    .active-list > :first-child {
      border-bottom: 1px solid #e5e7eb;

      font-size: bold;
    }
  }
  .notice {
    background: linear-gradient(#38c695, #43ad63);

    display: flex;
    flex-direction: column;
    height: 529px;
    border-radius: 10px;
    .header {
      padding: 0 28px;
      height: 66px;
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
    }

    .title {
      font-size: 24px;
      color: #fff;
      font-weight: bold;
    }
    .more {
      font-size: 14px;
      color: #fff;
      text-decoration: none;
      font-weight: bold;
      text-align: right;
    }
    .notice-list {
      flex: 1;
      padding: 10px 27px;
      overflow: auto;
    }
  }
  .el-timeline.is-start {
    padding-left: 0px;
    padding-right: 0;
  }
  :deep(.el-timeline-item__content) {
    color: #fff;
    margin-left: -8px;
  }
  :deep(.el-timeline-item__timestamp) {
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    margin-left: -8px;
  }
  .second-grid-container {
    background: #fff;
    display: grid;
    grid-template-columns: 32% 32% 32%;
    gap: 2%;
    margin: 0 auto; /* 容器水平居中 */
    box-sizing: border-box; /* 内边距计入容器宽度，避免溢出 */
    padding: 53px 86px 44px 80px;
    .each-item {
      display: flex;
      flex-direction: column;
      height: 499px;
      width: 100%;
      .header {
        padding: 0 28px;
        height: 66px;
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        border-bottom: 4px solid #efefef;
        box-sizing: border-box;
      }

      .title {
        font-size: 24px;
        color: #009a52;
        font-weight: bold;
      }
      .tabs {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 20px;
      }

      .tab {
        font-weight: bold;
        font-size: 14px;
        cursor: pointer;
      }

      .tab.active {
        color: #009a52;
      }

      .active-img {
        width: 100%;
        height: auto;
        border-radius: 10px;
        box-sizing: border-box;
        padding: 10px 27px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 16px;

        .container {
          width: 100%;
          position: relative;
        }
        img {
          width: 100%;
          height: 184px;
          border-radius: 10px;
        }
        .img-des {
          position: absolute;
          bottom: 3px;
          left: 0;
          height: 32px;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.6);

          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;

          box-sizing: border-box;
          border-radius: 0 0 10px 10px;
          padding: 0 13px;
          .img-time {
            width: 100px;
            text-align: right;
          }
          .img-title {
            flex: 1;
            white-space: normal; /* 多行省略需设为normal，单行才用nowrap */
            overflow: hidden;
            /* 3. 核心：控制显示行数+省略号（主流浏览器支持） */
            display: -webkit-box; /* 弹性盒模型（webkit内核私有） */
            -webkit-line-clamp: 1; /* 关键：限制显示的行数，改为3就是超过三行省略 */
            -webkit-box-orient: vertical; /* 弹性盒排列方向：垂直 */
            text-overflow: ellipsis; /* 兼容兜底，配合上述属性显示省略号 */
            opacity: 1;
          }
          span {
            color: #fff;
            font-size: 16px;
          }
        }
      }
      .active-list {
        padding: 10px 27px;
        overflow: auto;
        flex: 1;

        .news-item {
          display: flex;
          flex-direction: row;

          align-items: center;
          height: 46px;
          border-bottom: 1px solid #e5e7eb;
          .time {
            color: #009a52;
          }

          .news-title {
            margin-left: 30px;
            color: #4b5563;
            font-size: 16px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            flex: 1; /* 必须设置固定宽度/最大宽度（容器需有明确宽度限制） */
          }
        }
      }
    }
  }
  .third-grid-container {
    background: #f6f8f7;
    display: grid;
    grid-template-columns: 46% 46%;
    gap: 6%;
    margin: 0 auto; /* 容器水平居中 */
    box-sizing: border-box; /* 内边距计入容器宽度，避免溢出 */
    padding: 53px 86px 44px 80px;
    .each-item {
      display: flex;
      flex-direction: column;
      height: 264px;
      width: 100%;
      .header {
        padding: 0 28px;
        height: 66px;
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        border-bottom: 4px solid #efefef;
        box-sizing: border-box;
      }

      .title {
        font-size: 24px;
        color: #009a52;
        font-weight: bold;
      }
      .tabs {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 20px;
      }

      .tab {
        font-weight: bold;
        font-size: 14px;
        cursor: pointer;
      }

      .tab.active {
        color: #009a52;
      }
      .carousel-conatiner {
        display: flex;
        flex-direction: row;
        flex: 1;
        padding: 0px 36px;
      }
      .carousel-container {
        padding: 0px 10px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
      }
      .carousel-group {
        display: inline-block;
        width: 46%; /* 两张图片，留出适当间隙 */
        height: 175px;

        box-sizing: border-box;
      }
      .carousel-group img {
        width: 100%;
        height: 175px;
        border-radius: 10px; /* 可选：添加圆角 */
      }
      .el-carousel-item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
      .prev-btn {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .prev-btn:hover {
        cursor: pointer;
      }
      .next-btn {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .next-btn:hover {
        cursor: pointer;
      }
    }
    .member-list {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 0 28px;
      .container {
        width: 48.5%;
        position: relative;
      }
      img {
        width: 100%;
        height: 175px;
        border-radius: 10px;
      }
      .img-des {
        position: absolute;
        bottom: 3px;
        left: 0;
        height: 32px;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.6);

        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: space-between;

        box-sizing: border-box;
        border-radius: 0 0 10px 10px;
        padding: 0 13px;
        .img-time {
          width: 100px;
          text-align: right;
        }
        .img-title {
          flex: 1;
          white-space: normal; /* 多行省略需设为normal，单行才用nowrap */
          overflow: hidden;
          /* 3. 核心：控制显示行数+省略号（主流浏览器支持） */
          display: -webkit-box; /* 弹性盒模型（webkit内核私有） */
          -webkit-line-clamp: 1; /* 关键：限制显示的行数，改为3就是超过三行省略 */
          -webkit-box-orient: vertical; /* 弹性盒排列方向：垂直 */
          text-overflow: ellipsis; /* 兼容兜底，配合上述属性显示省略号 */
        }
        span {
          color: #fff;
          font-size: 16px;
        }
      }
    }
  }
  /* 媒体查询：小屏适配（≤768px 切换为1列） */
  @media (max-width: 1024px) {
    .first-grid-container {
      /* 小屏核心：单列占满容器可用宽度 */
      grid-template-columns: 100%;
      gap: 15px; /* 可选：小屏缩小间距，适配移动端 */
      padding: 15px;
    }

    .party-building-work {
      /* 头部 Grid 布局 */
      height: 529px;
      display: flex;
      flex-direction: column;
      background-color: #fff;
    }
    .association-activities {
      background-color: #fff;
      margin-top: 30px;
    }
    .notice {
      margin-top: 30px;
    }
    .second-grid-container {
      /* 小屏核心：单列占满容器可用宽度 */
      grid-template-columns: 100%;
      gap: 15px; /* 可选：小屏缩小间距，适配移动端 */
      padding: 15px;
    }

    .third-grid-container {
      /* 小屏核心：单列占满容器可用宽度 */
      grid-template-columns: 100%;
      gap: 15px; /* 可选：小屏缩小间距，适配移动端 */
      padding: 15px;
      .each-item {
        display: flex;
        flex-direction: column;
        height: 264px;
        width: 100%;
        .header {
          padding: 0 28px;
          height: 66px;
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: center;
          border-bottom: 4px solid #efefef;
          box-sizing: border-box;
        }

        .title {
          font-size: 24px;
          color: #009a52;
          font-weight: bold;
        }
        .tabs {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 20px;
        }

        .tab {
          font-weight: bold;
          font-size: 14px;
          cursor: pointer;
        }

        .tab.active {
          color: #009a52;
        }
        .carousel-conatiner {
          display: flex;
          flex-direction: row;
          flex: 1;
          padding: 0px 16px;
        }
        .carousel-container {
          padding: 0px 10px;
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;
        }
        .carousel-group {
          display: inline-block;
          width: 100%; /* 两张图片，留出适当间隙 */
          height: 175px;

          box-sizing: border-box;
        }
        .carousel-group img {
          width: 100%;
          height: 175px;
          border-radius: 10px; /* 可选：添加圆角 */
        }
        .el-carousel-item {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        .prev-btn {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .prev-btn:hover {
          cursor: pointer;
        }
        .next-btn {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .next-btn:hover {
          cursor: pointer;
        }
      }
      .member-list {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 0 54px;

        .container {
          width: 100%;
          position: relative;
        }
        img {
          width: 100%;
          height: 175px;
          border-radius: 10px;
        }
        .img-des {
          position: absolute;
          bottom: 3px;
          left: 0;
          height: 32px;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.6);

          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;

          box-sizing: border-box;
          border-radius: 0 0 10px 10px;
          padding: 0 13px;
          .img-time {
            width: 100px;
            text-align: right;
          }
          .img-title {
            flex: 1;
            white-space: normal; /* 多行省略需设为normal，单行才用nowrap */
            overflow: hidden;
            /* 3. 核心：控制显示行数+省略号（主流浏览器支持） */
            display: -webkit-box; /* 弹性盒模型（webkit内核私有） */
            -webkit-line-clamp: 1; /* 关键：限制显示的行数，改为3就是超过三行省略 */
            -webkit-box-orient: vertical; /* 弹性盒排列方向：垂直 */
            text-overflow: ellipsis; /* 兼容兜底，配合上述属性显示省略号 */
          }
          span {
            color: #fff;
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>
