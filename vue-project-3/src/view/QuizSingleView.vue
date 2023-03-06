<script setup>
import Question from "../components/Question.vue";
import QuizHeader from "../components/QuizHeader.vue";
import {ref,watch, computed}from "vue"
import { useRoute,useRouter } from "vue-router";
import quizes from "../data/data.json"
import Result from "../components/Result.vue"

const route = useRoute()

const quizId = parseInt(route.params.id)


const currentQuestionIndex = ref(0)

const quiz = quizes.find(item=>item.id == quizId)

const numberOfCorrectAnswers =ref(0)

//If correct answers add to number of correct
const onOptionSelected =(isCorrect)=>{
   if(isCorrect){
    console.log("ANSWER IS CORRECT!")
      numberOfCorrectAnswers.value++
   
   }
   if(quiz.questions.length - 1  === currentQuestionIndex.value  ){
    showResults.value = true
   }
   currentQuestionIndex.value++

}


console.log("QUIZ QUESTIONS",quiz.questions.length)
// const questionsAnswered = ref(`${currentQuestionIndex.value}/${quiz.questions.length}`)

// watch(()=> currentQuestionIndex.value,()=>{
//     questionsAnswered.value =`${currentQuestionIndex.value}/${quiz.questions.length}`
// })

// console.log("CHECK THIS-->",currentQuestionIndex.value)

const questionsAnswered = computed(()=>{
    return `${currentQuestionIndex.value}/${quiz.questions.length}`
})

const cancelProgressBar =()=>{
    alert('Percentage Capped')
    barPercentage.value = 100
}

const barPercentage = computed(()=>`${currentQuestionIndex.value/quiz.questions.length * 100}%`)
console.log("Bar percentage",parseInt(currentQuestionIndex.value)/quiz.questions.length * 100)

const showResults = ref(false)
const changeResult = ()=>{
    showResults.value =!showResults.value
}

</script>

<template>
  <div>
    <QuizHeader :barPercentage="barPercentage" :question="quiz.questions[currentQuestionIndex]"  :questionsAnswered="questionsAnswered"  />
    <div>
      <Question 
      v-if="!showResults"
        :numberOfCorrectAnswers="numberOfCorrectAnswers"
       @selectOption="onOptionSelected"
        :question="quiz.questions[currentQuestionIndex]" 
         />
        <Result :quizQuestion="quiz.questions.length" :numberOfCorrectAnswers="numberOfCorrectAnswers"  :currentQuestionIndex="currentQuestionIndex.value " v-else />
    </div>
    <button v-if="!showResults" @click="currentQuestionIndex++">Next Question</button>
  </div>
</template>
