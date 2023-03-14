<script setup>
import {defineProps,defineEmits} from "vue"
const {question} = defineProps(["question"])
const emit = defineEmits(["selectOption"])

const emitSelectedOption =(isCorrect)=>{
    
  emit("selectOption",isCorrect)
}
</script>

<template>
  <div>
    <div class="question-container">
      <h1 class="question">{{question.text}}?</h1>
      <div class="option-container">
        <div class="option" v-for="q in question.options" :key="q.id" @click="emitSelectedOption(q.isCorrect)">
          <p class="option-label">{{ q.label }}</p>
          <div class="option-value">
            <p>{{ q.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.question-container {
  margin-top: 20px;
  margin: 1.2rem;
}
.question {
  font-size: 40px;
  margin-bottom: 20px;
}

.option {
  display: flex;
  margin-bottom: 20px;
  cursor: pointer;
}
.option-label {
  background-color: bisque;
  width: 60px;
  height: 60px;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.option-value {
  box-sizing: border-box;
  background-color: rgb(244, 239, 239);
  width: 100%;
  font-size: 30px;
  padding: 0 20px;
}
</style>
