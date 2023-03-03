
<script setup>
//THIS IS STATE!!!!
import {ref} from "vue"
const count = ref(0)

const addToCount = ()=>{
  console.log('add')
  count.value = count.value +1
}
const subtractCount = ()=>{
  console.log('sub')
  if(count.value >=1){
    count.value = count.value - 1
  }
}
</script>

<template>
  <main>
    <div>
      <h4>The current count is...</h4>
      <h1>{{ count }}</h1>
      <button @click="subtractCount">-</button>
      <button @click="addToCount">+</button>
    </div>
  </main>
</template>
<style scoped>
 main{
  width:100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
 }
 div{
  text-align: center;
 }
</style>