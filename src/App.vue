<script setup lang="ts">
import Timer from './components/Timer.vue';
import TextGenerator from './components/TextGenerator.vue';
import { ref } from 'vue';

const typingText = ref('');
const typedWords = ref<string[]>([])
const showTimer = ref(false);
const total = ref(0);
const accuracy = ref('0');
const errors = ref(0);
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
};

const onTimerComplete = () => {
  showTimer.value = false;
  typingText.value = '';
  total.value = typedWords.value.length;
  const textSplitContent = text.value.split(' ').slice(0, typedWords.value.length)
  const correctTypedWords = typedWords.value.map((word, index) => textSplitContent[index] === word).filter(val => val);
  accuracy.value = ((correctTypedWords.length / typedWords.value.length) * 100).toPrecision(2)
};
</script>

<template>
  <h1>Typing speed</h1>
  <Timer v-if="showTimer" :timer="30" @timer-complete="onTimerComplete" />
  <div class="results">
    <div>
      Total: {{ total }}
    </div>
    <div>
      Accuracy: {{ accuracy }}%
    </div>
    <div>
      Errors: {{ errors }}
    </div>
  </div>

  <TextGenerator :text="text" />
  <input v-if="showTimer" v-model="typingText" @input="handleUserTyping" class="typing-input" />
  <button v-if="!showTimer" @click="startTyping">Start Typing</button>
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
