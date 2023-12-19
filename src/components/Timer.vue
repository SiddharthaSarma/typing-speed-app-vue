<script lang="ts" setup>
import { useTimer } from '../composables/useTimer'
const { timer } = useTimer(30)
</script>

<template>
  <div>
    Time remaining: {{ timer }}
  </div>
</template>