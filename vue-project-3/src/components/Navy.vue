<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <div>
    <ul>
      <RouterLink to="/">
        <li>HOME</li>
      </RouterLink>
    </ul>
  </div>
</template>
<style>
a{
    text-decoration: none;
    list-style: none;
    color:green;
    font-weight: bold;
}
</style>