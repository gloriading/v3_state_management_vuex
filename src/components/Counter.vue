<template>
  <h1 :style="counterStyle">
    {{ count }}
  </h1>
</template>
<script lang="ts">
import { defineComponent, computed, reactive } from 'vue'

interface Props {
  fontSize: number;
  fontColor: string;
  count: number;
}
export default defineComponent({
  name: 'Counter',
  props: {
    fontSize: {
      type: Number,
      default: 72,
    },
    fontColor: {
      type: String,
      default: '#333',
    },
    count: {
      type: Number,
      default: 0,
    },
  },
  setup(props: Props) {
    props = reactive(props);

    const counterStyle = computed(() => ({
      'font-size': `${props.fontSize}px`,
      'color': props.fontColor,
      'font-family': 'Arial',
    }));

    return {
      counterStyle
    };
  },
})
</script>