<template>
  <div id="home">
    <h2>vue+vite+ts+esline+prettier+less+vue-router+pinia</h2>
    <div>pinia:{{ homeInfo.name }}</div>
    <HelloWorld ref="HelloWorldRef" @helloWorldClick="helloWorldClick"></HelloWorld>
  </div>
</template>
<script setup lang="ts">
import homePinia from '../store/home';
import { post } from '../network/index';
import HelloWorld from '../components/HelloWorld.vue';
import { onMounted, ref } from 'vue';
const HelloWorldRef = ref<InstanceType<typeof HelloWorld>>();
onMounted(() => {
  if (HelloWorldRef.value) {
    let a = HelloWorldRef.value.name;
    console.log(a);
  }
});
const helloWorldClick = (data: any) => {
  console.log(data, 999);
};
interface cs {
  name: string;
}
const a = async () => {
  let aa = await post<cs>({
    url: '/chat',
    data: {
      name: 1
    },
    isLoading: false,
    haveToken: false
  });
  console.log(aa.name);
};
a();
let homeInfo = homePinia();
homeInfo.getHomeName();
</script>
<style scoped>
#home {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
}
</style>
