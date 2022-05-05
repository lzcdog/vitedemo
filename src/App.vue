<template>
  <div id="app">
    <h2>vue+vite+ts+esline+prettier+less+vue-router+pinia+axios</h2>
    <div>pinia:{{ homeInfo.name }}</div>
  </div>
</template>
<script setup lang="ts">
import homePinia from './store/home';
import { post } from './network/index';
interface cs {
  name: string;
}
const a = async () => {
  let aa = await post<cs>({
    url: '/chat',
    data: {
      name: 1
    }
  });
  console.log(aa.name);
};
a();
let homeInfo = homePinia();
homeInfo.getHomeName();
</script>
<style scoped>
#app {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
}
</style>
