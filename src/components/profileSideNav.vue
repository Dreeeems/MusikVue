<script setup>
import { accountCategories } from "../utils/utils.vue";
import { ref } from "vue";
import { useProfileStore } from "@/stores/profile";
let active = ref(false);
let profile = useProfileStore();

function changeProfileSection(id) {
  profile.UserId(id);
}
</script>

<template>
  <div class="sidebar" id="side_navProfile">
    <div class="header-box px-2 pt-3 pb-4"></div>

    <ul class="list-unstyled px-2 first-ul">
      <li v-for="category in accountCategories" class="mx-5">
        <span
          @click="changeProfileSection(category.name)"
          class="text-decoration-none"
        >
          {{ category.name }}
        </span>
      </li>
    </ul>
    <hr />
  </div>
</template>
<style>
#side_navProfile {
  background: #232323;
  min-width: 250px;
  max-width: 250px;
  height: 100vh;
  transition: 0.5s;
  z-index: 1;
}

#side_navProfile img {
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
.first-ul {
  height: 500px;
}
ul {
  color: white;
}
hr {
  color: #cd17ff;
}

@media (max-width: 767px) {
  #side_navProfile {
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
