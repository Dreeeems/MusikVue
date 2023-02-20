<script setup>
import FeedPlayer from "../components/FeedPlayer2.vue";
import { useCounterStore } from "@/stores/counter";
import { ArtistSearch } from "@/stores/artistSearch";
import { feedTrackStore } from "@/stores/feedTrackStore";
import { ref, toRaw, isProxy } from "vue";
import { onMounted, onUpdated } from "vue";
import MusicCardVue from "../components/MusicCard.vue";
import ArtistCard from "../components/ArtistCard.vue";
import { useRouter, RouterLink, RouterView } from "vue-router";
let id = ref(0);
let img = ref("");
let datas = ref("");
const search = ref("");
let change = ref(Boolean);
const storeCounter = useCounterStore();
const artistStore = ArtistSearch();
const store = feedTrackStore();
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
  artistStore.Artist(search.value);

  router.push({ name: "search", params: { Id: search.value } });
}

onMounted(() => {
  storeCounter.ChangeId();
});
</script>

<template>
  <div class="Feed">
    <div class="searchbar">
      <input
        v-model="search"
        placeholder="Enter artist name or track name"
        @change="searchApi()"
      />
    </div>
    <div class="container" v-if="storeCounter.loading == false">
      <div v-for="track in storeCounter.items.tracks.data">
        <MusicCardVue @getId="playSoung($event, img)" :track="track" />
      </div>
    </div>
  </div>
  <div>
    <div v-if="id !== 0 && change == true && storeCounter.loading == false">
      <FeedPlayer :track="datas" />
    </div>
  </div>
</template>

<style>
.container_artist {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.container {
  overflow-y: scroll;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  flex-wrap: wrap;
  height: 82.5vh;
}

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
  text-align: center;
  border: solid 1px #6610f2;
}

@media screen and (max-width: 1700px) {
  .container {
    height: 78.2vh;
  }

  .playerIcons svg {
    width: 30px;
    margin-top: 20px;
  }
  .progress {
    margin-bottom: 40px;
  }
}

@media screen and (max-width: 1500px) {
  .container {
    height: 79vh;
  }
  .playerIcons svg {
    width: 30px;
    margin-top: 25px;
  }
  progress {
    margin-bottom: 80px;
  }
}
@media screen and (max-width: 1250px) {
  .container {
    height: 78vh;
  }
}
@media screen and (max-width: 950px) {
  .container {
    padding-left: 20%;
  }
  ul {
    margin-top: -60px;
  }
  .container {
    height: 77vh;
  }
}
@media screen and (max-width: 776px) {
  .container {
    height: 76vh;
  }
  .time {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    flex-direction: column-reverse;
    justify-content: space-evenly;
  }
}

@media screen and (max-width: 767px) {
  .container {
    padding-left: 0%;
    height: 68vh;
  }
}

@media screen and (max-width: 650px) {
  .container {
    padding-left: 0%;
    height: 66.5vh;
  }
}

@media screen and (max-width: 530px) {
  .container {
    padding-left: 0%;
    height: 65.5vh;
  }

  @media screen and (max-width: 430px) {
    .time {
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
    }
  }
  @media screen and (max-width: 350px) {
    .container {
      height: 64vh;
    }
  }
}

@media screen and (max-height: 900px) {
  .container {
    height: 68.5vh;
  }
}
@media screen and (max-height: 670px) {
  .container {
    height: 61vh;
  }
}
</style>
