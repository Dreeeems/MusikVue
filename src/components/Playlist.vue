<script setup>
import { onUpdated, onMounted } from "vue";
import { trackStore } from "@/stores/track";
import { storeToRefs } from "pinia";
const props = defineProps({
  track: Object,
});
let minutes = Math.floor(props.track.duration / 60);
let seconds = props.track.duration % 60;

const Store = trackStore();
const song = props.track.preview;
const audio = new Audio();

function playSong() {
  audio.src = props.track.preview;
  if (Store.playing === true) {
    Store.tab.pause();
    Store.tab = null;
  }
  Store.Tracklist(audio, props.track.id);

  audio.play();
}
</script>

<template>
  <div class="artistTrack" @click="playSong">
    <img :src="track.album.cover" />
    <div class="infos">
      <div class="title">
        <h4>{{ track.title }}</h4>
      </div>
      <div class="timer">
        <span>{{ minutes }}m{{ seconds }}</span>
      </div>

      <div class="rank">
        <span>{{ track.rank }}</span>
      </div>
    </div>
    <hr />
  </div>
</template>

<style>
.artistTrack {
  border-radius: 10px 10px 0px 0px;
  margin-left: 30px;
  margin-top: 30px;
  padding: 30px;
  display: flex;
  color: white;
  width: 90%;
  border-bottom: 1px solid rgba(196, 0, 248, 0.3);
}

.artistTrack img {
  border-radius: 10px;
}

.infos {
  width: 100%;
  display: flex;
  margin-left: 30px;
  justify-content: space-evenly;
  align-items: center;
}
.artistTrack:hover {
  background: rgba(160, 0, 248, 0.3);
  cursor: pointer;
}
.timer {
  display: flex;
}
.rank {
  display: flex;
}
.title {
  display: flex;
}

.fullPlaylist {
  overflow-x: hidden;
}


</style>
