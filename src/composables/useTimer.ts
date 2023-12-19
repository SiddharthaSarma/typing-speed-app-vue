import { onBeforeMount, ref } from "vue";


export const useTimer = (startTime: number) => {
  const timer = ref(startTime)
  let intervalRef = 0;

  const startTimer = () => {
    intervalRef = setInterval(() => {
      if (timer.value > 0) {
        timer.value--;
      } else {
        clearTimer()
      }
    }, 1000)
  }

  const stopTimer = () => {
    clearTimer()
  }

  const clearTimer = () => {
    clearInterval(intervalRef)
  }

  onBeforeMount(() => {
    clearTimer()
  })


  return {
    timer,
    startTimer,
    stopTimer
  }
}
