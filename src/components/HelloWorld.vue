<template>
  <div @click="css">{{ width + a.name }}</div>
</template>
<script setup lang="ts">
import { defineProps, withDefaults, defineExpose, ref, reactive, toRefs, defineEmits } from 'vue';
const emit = defineEmits<{
  (event: 'helloWorldClick', data: number): void;
}>();
withDefaults(
  defineProps<{
    width?: string;
    height?: string;
  }>(),
  {
    width: '100'
  }
);
const a = reactive({
  name: '1'
});
const css = () => {
  emit('helloWorldClick', 1234);
};
defineExpose({
  ...toRefs(a),
  changeName() {
    a.name = 'b';
  }
});
</script>
<style scoped></style>
