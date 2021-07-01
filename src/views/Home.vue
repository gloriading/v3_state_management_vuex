<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1 class="counter">
      {{ counter }}
    </h1>
    <div class="actions">
      <button @click="decrease">-</button>
      <button @click="increase">+</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Home',
  setup() {
    const counter = ref(0);
    const increase = () => counter.value++;
    const decrease = () => counter.value--;
    
    return { counter, increase, decrease };
  },
});
</script>

<style scoped>
.counter {
  font-size: 72px;
}
button {
  font-size: 40px;
  width: 50px;
  cursor: pointer;
  margin-right: 10px;
}
</style>