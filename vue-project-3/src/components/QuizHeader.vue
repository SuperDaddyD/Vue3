<script setup>
import {useRoute} from "vue-router"
import {defineProps,defineEmits, watch} from "vue"

const {questionsAnswered,barPercentage} = defineProps(["questionsAnswered","barPercentage"]);

const emit = defineEmits(["update"])

console.log( questionsAnswered)
//console.log("Bar percentage",barPercentage)

watch(()=> questionsAnswered,()=>{
  console.log("callBarprogressUpdated being called")
  // if(barPercentage > 100){
  //   emit("update",barPercentage)
  // }
})
</script>


<template>
  <header>
    <h4>Question  {{ questionsAnswered}}</h4>
    <div class="bar">

      <div  class="completion" :style="{width: barPercentage }"></div>

    </div>
  </header>
</template>
<style scoped>

header {
  margin: 20px;
}
header h4 {
  font-size: 30px;
}
.bar {
  box-sizing: border-box;
  width: 300px;
  height: 50px;
  border: 3px solid bisque;
}

.completion {
  height: 100%;
  width: 0%;
  background-color: rgb(196, 255, 208);
}
</style>
