<script setup lang="ts">
import Timer from './components/Timer.vue';
import TextGenerator from './components/TextGenerator.vue';
import { ref } from 'vue';
const typingText = ref('');
const showTimer = ref(false)
const handleUserTyping = (input: Event) => {
  console.log((input as InputEvent).data);
};
const startTyping = () => {
  showTimer.value = true;
}
</script>

<template>
  <h1>Typing speed</h1>
  <button v-if="!showTimer" @click="startTyping">Start Typing</button>
  <Timer v-if="showTimer" :timer="30" />
  <TextGenerator />
  <input v-model="typingText" @input="handleUserTyping" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
