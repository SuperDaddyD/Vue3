<script setup>
import HelloWorld from './components/HelloWorld.vue';
import HomeView from './views/HomeView.vue';
import {RouterView,RouterLink} from "vue-router"
</script>
<template>
  <header>
    <div class="wrapper">
        <header>
          <RouterLink to="/">
              <p>home</p>
            </RouterLink>
            <RouterLink to="/about">
              <p>about</p>
            </RouterLink>
            <RouterLink to="/welcome">
              <p>welcome</p>
            </RouterLink>
        </header>
       <Transition name="routeAnimation">
         <RouterView/>
       </Transition>
      
    </div>
  </header>
</template>

<style scoped>
header{
  display: flex;
  justify-content: center;
}
header p{
  margin-left:10px;
  color:green;
 }
 a{
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
   cursor: pointer;
 }

 /* ROUTE ANIMATION*/
 .routeAnimation-enter-from{
  opacity: 0;
  transform:translateX(500px)
 }
 .routeAnimation-enter-to{
  opacity: 1;
  transform:translateX(0)
 }
 .routeAnimation-enter-active{
  transition:all 0.5s ease-in-out
 }
</style>