<script setup>
import {defineProps} from "vue"
const {numberOfCorrectAnswers,quizQuestion} = defineProps(["numberOfCorrectAnswers","quizQuestion"])
</script>
<template>
  <div class="results">
    <p>Your Results...</p>
    <h1>{{numberOfCorrectAnswers}}/{{quizQuestion }}</h1>
  </div>
</template>
<style scoped>
.results {
  text-align: center;
  padding: 100px 0;
}
p{
    font-size: 30px;
}
h1 {
  font-size: 58px;
}
</style>
