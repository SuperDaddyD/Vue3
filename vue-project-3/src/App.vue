<script setup>
import {RouterView} from "vue-router"
import QuizesView from "./view/QuizesView.vue"
import Navvy from "./components/Navy.vue"
</script>

<template>
  <div class="container">
<Navvy/>
    <RouterView/>
  </div>
</template>

<style scoped>
html{
  box-sizing: border-box;
}
.container{
  max-width: 1000px;
  margin:0 auto;
}
</style>