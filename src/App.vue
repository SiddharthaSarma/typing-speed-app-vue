<script setup lang="ts">
import Timer from './components/Timer.vue';
import Navbar from './components/Navbar.vue';
import TextGenerator from './components/TextGenerator.vue';
import { ref } from 'vue';

const typingText = ref('');
const typedWords = ref<string[]>([]);
const showTimer = ref(false);
const accuracy = ref('0');
const speed = ref(0);
const text = ref(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus culpa alias, quis quae assumenda maxime blanditiis neque beatae unde deserunt sunt quas, vel aliquam illum expedita perspiciatis odio minus?`);

const handleUserTyping = (input: Event) => {
  const inputValue = (input as InputEvent).data;
  if (inputValue === ' ') {
    if (typingText) {
      typedWords.value.push(typingText.value.trim())
    }
    typingText.value = '';
  }
};

const startTyping = () => {
  showTimer.value = true;
  typedWords.value = [];
  accuracy.value = '0';
};

const onTimerComplete = () => {
  showTimer.value = false;
  typingText.value = '';
  const textSplitContent = text.value.split(' ').slice(0, typedWords.value.length);
  const correctTypedWords = typedWords.value.filter((word, index) => textSplitContent[index] === word);
  const noOfChars = correctTypedWords.reduce((count, word) => count += word.length, correctTypedWords.length);
  speed.value = Math.round(noOfChars / 5 / 1);
  accuracy.value = ((correctTypedWords.length / typedWords.value.length) * 100).toFixed(2);
};
</script>

<template>
  <div class="bg-gray-900 text-white min-h-screen">

    <Navbar />
    <div class="p-5">
      <Timer v-if="showTimer" :timer="60" @timer-complete="onTimerComplete" />
      <div class="results">
        <div>
          Speed: {{ speed }} WPM
        </div>
        <div>
          Accuracy: {{ accuracy }}%
        </div>
      </div>
      <TextGenerator :text="text" />
      <div class="flex justify-center">
        <input class="bg-gray-600 typing-input" v-if="showTimer" v-model="typingText" @input="handleUserTyping" />
        <button type="button"
          class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          v-if="!showTimer" @click="startTyping">Start Typing</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.typing-input {
  height: 50px;
  width: 50%;
  margin-top: 2rem;
  font-size: 2rem;
}

.results {
  display: flex;
  width: 50%;
  margin: auto;
  justify-content: space-between;
  font-size: 1.5rem;
}
</style>
