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
</script>

<template>
  <div class="main">
    <ul>
      <li v-for="category in categories">
        <span
          :class="{ active: active }"
          @click="Store.ChangeId(category.id), goToMenu()"
          >{{ category.name }}
        </span>
      </li>
    </ul>
  </div>
</template>
<style>
.main {
  background: #212121;
  border-right: 1px solid #e5e5e5;

  position: fixed;
  height: 100%;
  width: 150px;
  top: 0;
  left: 0;
  padding-top: 40px;
  padding-bottom: 25px;

  overflow-y: scroll;
}
ul {
  margin-left: 0;
}
li {
  color: white;
  cursor: pointer;
  list-style-type: none;
  font-size: 18px;
  padding-top: 25px;
  padding-bottom: 25px;
  cursor: pointer;
}
</style>
