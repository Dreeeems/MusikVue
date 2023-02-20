<script setup>
import SideBar2 from "../components/SideBar2.vue";
import Feed from "./Feed.vue";

function toggleMenu() {
  const sidenav = document.getElementById("side_nav");
  sidenav.classList.add("visible");
}
</script>

<template>
  <div class="main-container d-flex">
    <SideBar2 />
    <div class="content">
      <nav class="navbar-brand">
        <button class="btn px-1 py-0 open btn d-md-none" @click="toggleMenu">
          <fas icon="fa-solid fa-stream" size="2x" />
        </button>
      </nav>
      <Feed />
    </div>
  </div>
</template>

<style>
.content {
  background: linear-gradient(360deg, #000000 10%, #632673 35%, #84319b 100%);
  min-height: 100vh;
  width: 100%;
}
</style>
