<script setup>
import q from "./data/data.json"
import {ref,watch} from "vue"
const quizes = ref(q)
const search = ref("")

watch(search,()=>{
  quizes.value = q.filter((quiz)=> quiz.name.toLocaleLowerCase().includes(search.value.toLocaleLowerCase()))
})

</script>

<template>
  <div class="container">
    <header class="header">
      <h1>Quizes</h1>
      <input v-model.trim="search"   type="text" placeholder="Search..." >
    </header>
    {{ search }}

    <div class="options-container"  >
       <div class="card" v-for="quiz in quizes" :key="quiz.id">
        <img :src="quiz.img" alt="">

        <div class="card-text">
          <h2>{{ quiz.name }}</h2>
          <p>{{quiz.questions.length}} questions</p>
        </div>
       </div>
    </div>

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

/*Header*/
.header{
  margin-bottom: 10px;
  margin-top: 30px;
  display: flex;
  align-items: center;
}
.header h1{
  font-weight: bold;
  margin-right:30px;
}
.header input{
  border: none;
  border-radius: 10px;
  background-color: rgba(128, 128, 128, 0.1);
  padding:10px;
}

/*Card*/
.options-container{
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
}
.card{
  box-sizing: border-box;
  width: 250px;
  overflow: hidden;
  border: 2%;
  margin:0 20px 35px 0;
  box-shadow: 1px 1px 10px rgba(0,0,0,0.1);
cursor: pointer;
}
.card img{
width:100%;  
height:auto;
}
.card .card-text{
  padding: 0 5px;
}
.card .card-text h2{
  font-weight: bold;
}
</style>