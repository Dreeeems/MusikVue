<script setup>
import FeedPlayer from "../components/FeedPlayer2.vue";
import { feedTrackStore } from "@/stores/feedTrackStore";
import { ref, toRaw, isProxy } from "vue";
import { onMounted } from "vue";
import MusicCardVue from "../components/MusicCard.vue";
import ArtistCard from "../components/ArtistCard.vue";
import { ArtistSearch } from "@/stores/artistSearch";
import { useRoute, useRouter } from "vue-router";
import SideBar2 from "../components/SideBar2.vue";
const route = useRoute();
let routeParams = route.params.Id;

const searchStore = ArtistSearch();
const store = feedTrackStore();

let id = ref(0);
let img = ref("");
let datas = ref("");
const search = ref("");
let change = ref(Boolean);

const router = useRouter();
function playSoung(data, id, change) {
  const datas = toRaw(data);

  if (store.tab !== datas.preview && store.playing == true) {
    store.tab.pause();
  }
  const audio = new Audio(datas.preview);
  store.Tracklist(audio, datas.id);
  this.change = false;
  id = datas.preview;
  img = datas.album.cover_xl;
  this.id = id;
  this.img = img;
  this.change = true;
  this.datas = datas;
  audio.play();
  return this.id, this.img, this.change;
}
function searchApi() {
  searchStore.Artist(search.value);

  router.push({ name: "search", params: { Id: search.value } });
}

onMounted(() => {
  searchStore.Artist(routeParams);
});
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
      <div class="Feed">
        <div class="searchbar">
          <input v-model="search" placeholder="edit me" @change="searchApi()" />
        </div>

        <div class="container" v-if="searchStore.loading == false">
          <div v-for="track in searchStore.tracklist.data">
            <MusicCardVue
              @getId="playSoung($event, img)"
              :track="track"
              v-if="track.type == 'track'"
            />
            <ArtistCard
              @getId="playSoung($event, img)"
              :track="track"
              v-if="track.type == 'artist'"
            />
          </div>
        </div>

        <div v-else></div>
      </div>
      <div>
        <div v-if="id !== 0 && change == true && searchStore.loading == false">
          <FeedPlayer :track="datas" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.searchbar {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.searchbar input {
  width: 40%;
  height: 50px;
  border-radius: 15px;
}

@media screen and (max-width: 950px) {
  .container {
    padding-left: 20%;
  }
  ul {
    margin-top: -60px;
  }
}

@media screen and (max-width: 700px) {
  .container {
    padding-left: 0%;
  }
}
</style>
