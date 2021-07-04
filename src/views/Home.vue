<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Counter
      :fontSize="72"
      :fontColor="$store.state.counterColor"
      :count="$store.state.counter"
    />
    <CounterPlusTwo />
    <CounterActions />
    <CounterColor />
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    Counter: defineAsyncComponent(() => import('../components/Counter.vue')),
    CounterPlusTwo: defineAsyncComponent(() => import('../components/CounterPlusTwo.vue')),
    CounterActions: defineAsyncComponent(() => import('../components/CounterActions.vue')),
    CounterColor: defineAsyncComponent(() => import('../components/CounterColor.vue')),
  },
});
</script>
