<script setup>
import { ref, reactive } from "vue";

const store = reactive({
  name: "Deinde",
  date: new Date(),
  inProgress: false,
  list: [],
});

const changeStyle = () => {
  store.list.push({
    name: store.name,
  });
  console.log(store.list);
  store.inProgress = !store.inProgress;
  store.name.value = "Kings"
};
</script>

<template>
  <div class="about">
   <div>
    <h1>Welcome To Fantasy Island {{ store.name }}</h1>
    <h3>Todays Date:{{ store.date }}</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe
      architecto reiciendis explicabo sapiente animi qui dolor adipisci quia
      quisquam!
    </p>
    <input
      type="text"
      placeholder="Enter"
      v-bind:style="
        store.inProgress ? 'border:1rem solid red' : 'border:1rem solid green'
      "
      v-model="store.name"
    />
    <button @click="changeStyle">change style</button>
    <ul v-for="g in store.list" :key="g">
      <li >{{ g.name }}</li>
    </ul>
   </div>
  </div>
</template>

<style scoped>
.about{
  margin:0 auto;
  width:100vw;
}
.about div{
  margin:0 auto;
  max-width:300px;
}

</style>
