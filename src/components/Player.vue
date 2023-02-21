<script setup>
import { trackStore } from "@/stores/track";
import { onUpdated, ref } from "vue";
const time = ref("");
const playing = ref(true);
const pause = ref(false);
const props = defineProps({
  track: Object,
});
const title = ref("");

function getTime() {
  if (store.tab.src !== props.track.preview) {
    time.value = 0;
  }
  time.value = store.tab.currentTime;
  if (store.tab.duration > 0 && !store.tab.paused) {
    playing.value = true;
  }
  return time.value;
}

const store = trackStore();

function updateTitle() {
  title.value = store.tracklist.title;
}

onUpdated(() => {
  updateTitle();
  store.tab.ontimeupdate = function () {
    getTime();
  };
});
function progress() {
  if (playing.value == true) {
    const bar = document.getElementById("progress");

    time.value = bar.value;
    store.tab.currentTime = time.value;
  }
}

function play() {
  const bar = document.getElementById("progress");
  store.tab.play();
  pause.value = false;
  playing.value = true;
  store.tab.currentTime = bar.value;
}

function paused() {
  const bar = document.getElementById("progress");
  store.tab.pause();
  pause.value = true;
  playing.value = false;
  store.tab.currentTime = bar.value;
}

function addFav() {
  const heartbnt = document.getElementById("heart");
  if (heartbnt.classList.contains("fav") == true) {
    heartbnt.classList.remove("fav");
  } else {
    heartbnt.classList.add("fav");
  }
}
</script>

<template>
  <div class="player">
    <div class="playerInfos">
      <div class="playerImg">
        <img :src="props.track?.album?.cover" />
      </div>
      <div class="playerNames">
        <span>{{ title }}</span>
      </div>

      <div class="playerLeftIcons">
        <fas icon="fas fa-heart" id="heart" size="2x" @click="addFav" />
      </div>
    </div>
    <div class="time">
      <div class="playerIcons">
        <fas
          icon="fa-solid  fa-circle-play"
          color="#6f42c1"
          size="3x"
          v-if="playing == false"
          @click="play()"
        />
        <fas
          icon="fas  fa-pause-circle"
          color="#6f42c1"
          size="3x"
          v-if="playing == true"
          @click="paused"
        />
      </div>
      <input
        type="range"
        class="progress"
        id="progress"
        :max="store.tab.duration"
        :value="time"
        @change="progress"
      />
    </div>
  </div>
</template>

<style scoped>
.player {
  height: 10vh;
  width: 100%;
  display: flex;
  background-color: #3a3737;
}
.playerInfos {
  color: white;
  display: flex;
}

.playerNames {
  display: grid;
  align-items: center;
  margin: 0 14px;
  justify-items: start;
  align-content: center;
}
.playerImg {
  padding: 5px;
  display: flex;
}
.playerImg img {
  width: 8vh;
  height: 8vh;
}
.playerLeftIcons {
  display: flex;
  align-items: center;
}
.time {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.progress {
  color: #fff;
  width: 50%;
  accent-color: #6b5073;
}
.progress::-webkit-slider-thumb {
  visibility: hidden;
}

@media screen and (max-width: 876px) {
  .playerNames {
    font-size: 12px;
  }
}

.fav {
  color: red;
  transition: 0.5s;
}
</style>
