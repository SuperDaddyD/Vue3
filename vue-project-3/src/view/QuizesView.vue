<script setup>
import q from "../data/data.json"
import {ref,watch} from "vue"
import Card from "../components/Card.vue"
const quizes = ref(q)
const search = ref("")



//THIS IS THE FILTER FUNCTIONALITY!!
//WATCH IS A LISTENER. LISTENING TO ANY CHANGE OF SEARCH PROP
watch(search,()=>{
  quizes.value = q.value.filter((quiz)=> quiz.name.toLocaleLowerCase().includes(search.value.toLocaleLowerCase()))
})

</script>

<template>
  <div>
    <header class="header">
      <h1>Quizes</h1>
      <input v-model.trim="search"   type="text" placeholder="Search..." >
    </header>
    {{ search }}
    
    <div class="options-container"  >
       
        <Card class="card" v-for="quiz in quizes" :key="quiz" :quiz="quiz"/>

      
    </div>
    

  </div>
</template>

<style scoped>

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
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
