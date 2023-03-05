<script setup>
import cars from "../cars.json"
import {useRoute,useRouter,RouterView} from "vue-router"


const route = useRoute()
console.log(route.params)

const router = useRouter()
console.log("useRouter",router)

const carId = parseInt(route.params.dopeId);
console.log(carId)
const car =  cars.find(item => item.id === carId)

//Handler to only allow certain cars to be shown
const ShowCar =()=>{
    if(carId === 4) return;
   return router.push(`/cars/${carId}/contact`)
}

</script>
<template>
    <div >
        <div v-if="car">
        <h1>Car View</h1>
     <p>{{ car.name }}</p>
     <p>{{ car.year }}</p>
     <p>{{ car.price }}</p>
     
     <button  @click="ShowCar">Click me for contact</button>
     <RouterView/>

    </div>
    <div v-else>
        <h1>Car not found</h1>
    </div>
    </div>
    
</template>

<style scoped>
img{
    width:250px;
    height:auto;
}
</style>