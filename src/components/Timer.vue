<script lang="ts" setup>
import { onMounted } from 'vue';
import { useTimer } from '../composables/useTimer'
const props = defineProps({
  timer: {
    type: Number,
    default: 30
  }
})
const { timer, startTimer } = useTimer(props.timer)

onMounted(() => startTimer())
</script>

<template>
  <div>
    Time remaining: {{ timer }}
  </div>
</template>