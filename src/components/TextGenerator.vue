<script lang="ts" setup>
import { ref } from 'vue'
const text = ref(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus culpa alias, quis quae assumenda maxime
    blanditiis neque beatae unde deserunt sunt quas, vel aliquam illum expedita perspiciatis odio minus?`);
const textSplitContent = text.value.split(' ')

</script>
<template>
  <div :class="$style.content">
    <span :class="$style.word" v-for="(word, i) in textSplitContent" :key="i">{{ word }}</span>
  </div>
</template>
<style module>
.content {
  font-size: 2rem;
}

.word {
  margin: 0px 3px;
}
</style>