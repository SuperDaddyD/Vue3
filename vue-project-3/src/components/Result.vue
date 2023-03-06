<script setup>
import {defineProps} from "vue"
import { RouterLink } from "vue-router";
const {numberOfCorrectAnswers,quizQuestion} = defineProps(["numberOfCorrectAnswers","quizQuestion"])
</script>
<template>
  <div class="results">
    <p>Your Results...</p>
    <h1>{{numberOfCorrectAnswers}}/{{quizQuestion }}</h1>
    <RouterLink to="/">
      <button>Home Quizes</button>
    </RouterLink>
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
button{
    padding:10px;

    font-size: 20px;
}
</style>
