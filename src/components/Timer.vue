<script lang="ts" setup>
import { onMounted } from 'vue';
import { useTimer } from '../composables/useTimer'
const props = defineProps({
  timer: {
    type: Number,
    default: 30
  }
});

const emits = defineEmits<{
  (e: 'timerComplete'): void
}>();

const notifyTimerComplete = () => {
  emits('timerComplete');
};
const { timer, startTimer } = useTimer(props.timer, notifyTimerComplete);

onMounted(() => startTimer())
</script>

<template>
  <div>
    Time remaining: {{ timer }}
  </div>
</template>