<script setup>
import { useRouter, RouterLink, RouterView } from "vue-router";
import { categories } from "../utils/utils.vue";
import { onMounted, ref } from "vue";
import { useCounterStore } from "@/stores/counter";
let active = ref(false);
const Store = useCounterStore();
const router = useRouter();

const goToMenu = () => {
  router.push({ name: "home" });
};

const goToMLogin = () => {
  router.push({ name: "login" });
};
function toggleNav() {
  const navBar = document.getElementById("side_nav");
  navBar.classList.remove("visible");
}
</script>

<template>
  <div class="sidebar" id="side_nav">
    <div class="header-box px-2 pt-3 pb-4">
      <h1 class="fs-4">
        <img
          src="../assets/Logo.png"
          class="gb-white rouded px-2 me-2"
          @click="goToMenu"
        />
      </h1>
      <button
        class="btn d-md-none d-block close-btn px-1 py-0 text-white"
        @click="toggleNav"
      >
        <fas icon="fa-solid fa-stream" size="1x" />
      </button>
    </div>

    <ul class="list-unstyled px-2 fist-ul">
      <li v-for="category in categories" class="mx-5">
        <span
          class="text-decoration-none"
          @click="Store.ChangeId(category.id), goToMenu()"
        >
          <fas :icon="category.icon" color="#84319B" size="1x" />
          {{ category.name }}
        </span>
      </li>
    </ul>
    <hr />
    <br />

    <ul class="list-unstyled">
      <li class="mx-5">
        <span clas="text-decoration-none d-block" @click="goToMLogin">
          <fas icon="fa-solid fa-circle-user" color="#6f42c1" /> Account</span
        >
      </li>
    </ul>
  </div>
</template>
<style>
#side_nav {
  background: #232323;
  min-width: 250px;
  max-width: 250px;
  height: 100vh;
  transition: 0.5s;
  z-index: 1;
}

#side_nav img {
  cursor: pointer;
}
hr.h-color {
  margin-top: 10px;
  background: #eee;
}
h1 {
  color: #ffffff;
}
.sidebar li.active {
  background: #eee;
  border-radius: 8px;
}
.fist-ul {
  height: 500px;
  overflow-y: scroll;
}
ul {
  color: white;
}
hr {
  color: #cd17ff;
}

@media (max-width: 767px) {
  #side_nav {
    margin-left: -250px;
    position: fixed;
    min-height: 100vh;
  }
  #side_nav.visible {
    transition: 0.5s;
    margin-left: 0;
    z-index: 1;
  }
}
</style>
