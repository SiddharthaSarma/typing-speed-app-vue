<script setup lang="ts">
import Timer from './components/Timer.vue';
import TextGenerator from './components/TextGenerator.vue';
import { ref } from 'vue';

const typingText = ref('');
const showTimer = ref(false);
const text = ref(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus culpa alias, quis quae assumenda maxime blanditiis neque beatae unde deserunt sunt quas, vel aliquam illum expedita perspiciatis odio minus?`);

const handleUserTyping = (input: Event) => {
  const inputValue = (input as InputEvent).data;
  if (inputValue === ' ') {
    typingText.value = ''
  }
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
  <TextGenerator :text="text"/>
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
