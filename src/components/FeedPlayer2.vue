<script setup>
import { feedTrackStore } from "@/stores/feedTrackStore";
import { onUpdated, onMounted, ref } from "vue";
const time = ref(0);
const playing = ref(true);
const pause = ref(false);
const title = ref("");
const props = defineProps({
  track: Object,
});

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

const store = feedTrackStore();

function updateTitle() {
  title.value = store.tracklist.title;
}
function addFav() {
  const heartbnt = document.getElementById("heart");
  if (heartbnt.classList.contains("fav") == true) {
    heartbnt.classList.remove("fav");
  } else {
    heartbnt.classList.add("fav");
  }
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
</script>

<template>
  <div class="player d-flex">
    <div class="playerInfos">
      <div class="playerImg">
        <img :src="props.track?.album?.cover" />
      </div>
      <div class="playerNames">
        <span>{{ track.title }}</span>
      </div>

      <div class="playerLeftIcons">
        <fas icon="fas fa-heart" size="2x" @click="addFav" id="heart" />
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

.fav {
  color: red;
  transition: 0.5s;
}

@media screen and (max-width: 876px) {
  .playerNames {
    font-size: 12px;
  }
}
</style>
