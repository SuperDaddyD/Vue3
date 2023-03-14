<script setup>
import TheWelcome from "../components/TheWelcome.vue";
import { ref } from "vue";

const showText = ref(true);

const toggleButton = () => {
  showText.value = !showText.value;
  console.log(showText.value);
};

const inviteList = ref(["Karma Loop"]);
const invite = ref();

const addInvites = () => {
  inviteList.value.unshift(invite.value);
  invite.value = "";
  console.log(inviteList.value);
};

const removeInvite = (uninvited) => {
  console.log("uninvite", uninvited);
  inviteList.value = inviteList.value.filter((dude) => dude != uninvited);
};
</script>

<template>
  <main>
    <!-- <div class="container">
      <Transition name="fade">
        <h1 v-if="showText">Hello World!</h1>
        <h1 v-else>GoodBye World!</h1>
      </Transition>
    </div>

    <button  @click="toggleButton">Toggle</button> -->
    <div class="container">
      <input
        type="text"
        placeholder="Add person to invite..."
        v-model="invite"
        @keypress.enter="addInvites"
      />
      <TransitionGroup name="invitee">
        <li
          @click="removeInvite(person)"
          v-for="person in inviteList"
          :key="person"
        >
          {{ person }}
        </li>
      </TransitionGroup>
    </div>
  </main>
</template>
<style scoped>
/* 
.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active {
  transition: all 3s ease;
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
  transition: all 3s ease;
}

main {
  padding: 2rem;
}
h1 {
  font-size: 30px;
  position: absolute;
}
.container {
  position: relative;
}
button{
  margin-top: 50px;

} */
main {
  width: 100vw;
  height: 100vh;
  border: 1px solid red;
}
.container {
  max-width: 300px;
  width: 300px;

  margin: 0 auto;

  padding-top: 2rem;
}
input {
  box-sizing: border-box;
  width: 100%;
  border-radius: 5px;
  border: 1px solid rgba(128, 128, 128, 0.13);
  padding: 10px;
  margin-bottom: 20px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.12);
}
ul {
  display: inline;
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  box-sizing: border-box;

  list-style: none;
  width: 300px;
  border-radius: 5px;
  padding: 15px 10px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.12);
  text-align: center;
  cursor: pointer;
}

/* TRANSITION GROUP*/

.invitee-enter-from {
  opacity: 0;
  transform: scale(0.5);
}
.invitee-enter-to {
  opacity: 1;
}
.invitee-enter-active {
  transition: all 0.6s ease-in-out;
}

/*TRANSITION FOR LEAVING!*/
.invitee-leave-from {
  opacity: 1;
  transform: rotate(0deg);
}
.invitee-leave-to {
  opacity: 0;
  transform: scale(0.5);
  transform: rotate(360deg);
}
.invitee-leave-active {
  transition: all 0.6s ease-in-out;
}

.invitee-move {
  transition: all 0.6s ease-out;
}

</style>
