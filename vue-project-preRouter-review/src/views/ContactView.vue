<script setup>
import { useRoute } from "vue-router";
import cars from "../cars.json"

const route = useRoute()

const car = cars.find((item)=> item.id === parseInt(route.params.dopeId) )
console.log(car)
</script>
<template>
    <div>
        <h1>Contact View</h1>
        <p>{{car.contact.dealer }}</p>
        <p>{{car.contact.number }}</p>
    </div>
</template>
<style scoped>
</style>