<template>
  <div id="home">
    <div
      v-for="(item, index) in imageData"
      :key="index"
      class="cs"
      :class="activeIndex == index ? 'active' : ''"
      :style="{ backgroundImage: 'url(' + item.url + ')' }"
      @click="onClick(index)"
    >
      <div class="title" :class="activeIndex == index ? 'activeTile' : ''">{{ item.title }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
let activeIndex = ref(0);
const onClick = (index: number) => {
  activeIndex.value = index;
};
const imageData = [
  {
    url: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    title: 'Explore The World'
  },
  {
    url: 'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    title: 'Wild Forest'
  },
  {
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
    title: ' Sunny Beach'
  },
  {
    url: 'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
    title: 'City on Winter'
  },
  {
    url: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    title: 'Mountains - Clouds'
  }
];
</script>
<style scoped lang="less">
#home {
  position: relative;
  display: flex;
  justify-content: center;
  transform: translate(0, 10vh);
  width: 90vw;
  align-items: center;
  margin: 0 auto;
  overflow: hidden;
  .cs {
    position: relative;
    flex: 0.5;
    height: 80vh;
    border-radius: 50px;
    margin-right: 60px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: all 0.7s ease-in;
    &:last-child {
      margin-right: 0;
    }
    .title {
      position: absolute;
      bottom: 23px;
      left: 23px;
      font-weight: 700;
      font-size: 1.7em;
      color: #fff;
      opacity: 0;
      white-space: nowrap;
      transition: all 0.5s ease-in;
    }
  }
  .active {
    flex: 5;
  }
}
.activeTile {
  opacity: 1 !important;
}
</style>
