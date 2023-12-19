<script lang="ts" setup>
  import {useTimer} from '../composables/useTimer'
  const {timer, startTimer, stopTimer} = useTimer(30)
</script>

<template>
  <div>
    {{ timer }}
  </div>
  <button @click="startTimer">start</button>
  <button @click="stopTimer">stop</button>
</template>