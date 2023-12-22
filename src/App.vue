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
};
const onTimerComplete = () => {
  showTimer.value = false;
};
</script>

<template>
  <h1>Typing speed</h1>
  <Timer v-if="showTimer" :timer="30" @timer-complete="onTimerComplete" />
  <button v-else @click="startTyping">Start Typing</button>
  <TextGenerator />
  <input v-model="typingText" @input="handleUserTyping" class="typing-input"/>
</template>

<style scoped>
.typing-input {
  height: 50px;
  width: 50%;
  margin-top: 2rem;
  font-size: 2rem;
}

</style>
