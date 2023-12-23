<script lang="ts" setup>
import { computed } from 'vue';
const props = defineProps({
  text: {
    type: String,
    default: ''
  }
});
const textSplitContent = computed(() => props.text.split(' '));

</script>
<template>
  <div :class="$style.content">
    <span :class="$style.word" v-for="(word, i) in textSplitContent" :key="i">{{ word }}</span>
  </div>
</template>
<style module>
.content {
  font-size: 2rem;
  width: 100%;
  overflow-wrap: break-word;
}

.word {
  margin: 0px 3px;
}
</style>