<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1 class="counter" :style="{ color: $store.state.counterColor }">
      {{ $store.state.counter }}
    </h1>
    <p>{{ $store.state.counter }} + 2 = {{ $store.getters.counterPlusTwo }}</p>
    <div class="actions">
      <button @click="$store.dispatch('decrease')">-</button>
      <button @click="$store.dispatch('increase')">+</button>
    </div>
    <div class="changeColor">
      <input type="text" v-model="counterColor" placeholder="Enter color code" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from "vuex";

export default defineComponent({
  name: 'Home',
  setup() {
    const store = useStore();
    const counterColor = computed({
      get() {
        return store.state.counterColor;
      },
      set(val) {
        store.dispatch('setColor', val);
      }
    });
    return { counterColor };
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
.changeColor {
  margin-top: 2rem;
}
input[type="text"] {
  font-size: 1rem;
}
</style>