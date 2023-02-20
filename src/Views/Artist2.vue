<script setup>
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useCounterStore } from "@/stores/counter";
import { ArtistCount } from "@/stores/artist";
import { trackStore } from "@/stores/track";
import SideBar from "../components/SideBar2.vue";
import Playlist from "../components/Playlist.vue";
import Player from "../components/Player.vue";
const route = useRoute();
let id = route.params.Id;
let img;
const trackstore = trackStore();

const storeCounter = useCounterStore();
const Artiststore = ArtistCount();
onMounted(() => {
  storeCounter.Artist(id);
  Artiststore.Tracklist(id);
});

function toggleMenu() {
  const sidenav = document.getElementById("side_nav");
  sidenav.classList.add("visible");
}
</script>

<template>
  <div class="main-container d-flex">
    <SideBar />
    <div class="contentArtist">
      <nav class="navbar-brand">
        <button
          class="btn px-1 py-0 open btn d-md-none z-1"
          @click="toggleMenu"
        >
          <fas icon="fa-solid fa-stream" size="2x" />
        </button>
        <div
          class="banner"
          v-bind:style="{
            backgroundImage:
              'linear-gradient(to bottom, #84319B, rgba(117, 19, 93, 0.73)), url(' +
              storeCounter.img +
              ')',
          }"
        >
          <div class="profile">
            <h1 class="">{{ storeCounter.tracks.name }}</h1>
            <svg
              role="img"
              height="24"
              width="24"
              aria-hidden="true"
              class="Svg-sc-ytk21e-0 kcjDTG b0NcxAbHvRbqgs2S8QDg"
              viewBox="0 0 24 24"
              data-encore-id="icon"
            >
              <path
                d="M10.814.5a1.658 1.658 0 012.372 0l2.512 2.572 3.595-.043a1.658 1.658 0 011.678 1.678l-.043 3.595 2.572 2.512c.667.65.667 1.722 0 2.372l-2.572 2.512.043 3.595a1.658 1.658 0 01-1.678 1.678l-3.595-.043-2.512 2.572a1.658 1.658 0 01-2.372 0l-2.512-2.572-3.595.043a1.658 1.658 0 01-1.678-1.678l.043-3.595L.5 13.186a1.658 1.658 0 010-2.372l2.572-2.512-.043-3.595a1.658 1.658 0 011.678-1.678l3.595.043L10.814.5zm6.584 9.12a1 1 0 00-1.414-1.413l-6.011 6.01-1.894-1.893a1 1 0 00-1.414 1.414l3.308 3.308 7.425-7.425z"
              ></path>
            </svg>
            <span> Verified artist</span>
          </div>
        </div>
        <div class="fullPlaylist">
          <div v-for="track in Artiststore.tracklist.data">
            <Playlist :track="track" />
          </div>
        </div>
      </nav>

      <Player
        v-if="trackstore.playing == true && trackstore.loading === false"
        :track="trackstore.tracklist"
      />
    </div>
  </div>
</template>

<style>
.contentArtist {
  background: linear-gradient(360deg, #000000 10%, #632673 35%, #84319b 100%);
  min-height: 100vh;
  width: 100%;
}

.artist-card {
  position: absolute;
  width: 100%;
  padding-top: 0;
  margin-top: 0;
  margin-left: 10%;
  height: 100vh;
  display: flex;
  align-items: center;
  margin: 0;
  background-color: #f7f8fc;
  font-family: "Roboto", sans-serif;
  background: black;
}

.banner {
  height: 50vh;
  top: 80px;
  left: 0px;
  width: 100%;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: 50%;
  border-bottom: 2px solid black;
}

.banner:after {
  filter: grayscale(0, 8);
}
.fullPlaylist {
  height: 30vh;
  overflow-y: scroll;
}
.profile {
  height: 150px;
  color: white;
}

.profile h1 {
  margin-top: 10vh;

  font-size: 80px;
  margin-bottom: 0px;
}

.profile svg {
  margin-left: 30px;
  fill: #3d91f4;
}

.profile span {
  font-size: 25px;
}
.artistImage {
  margin-top: 30px;
  margin-left: 30px;
  border-radius: 50%;
}

.play {
  display: flex;
  margin-bottom: 50px;
}
.play h3 {
  width: 50%;
}

/*  Width */

@media screen and (max-width: 1400px) {
  .tracklist {
    margin-top: 80%;
  }
  .profile h1 {
    font-size: 60px;
  }
}

@media screen and (max-width: 1200px) {
  .profile h1 {
    font-size: 60px;
  }
}

@media screen and (max-width: 820px) {
  .profile h1 {
    font-size: 60px;
  }
}

@media screen and (max-width: 950px) {
  .tracklist {
    margin-top: 100%;
  }
  .profile h1 {
    font-size: 40px;
  }
}

@media screen and (max-width: 767px) {
  .fullPlaylist {
    height: 27vh;
  }
}

@media screen and (max-width: 700px) {
  .player span {
    font-size: 12px;
  }

  .main {
    position: absolute;
    overflow-y: hidden;
  }
  .main ul {
    margin-top: -25px;
  }
  .profile {
    margin-left: 0px;
  }
}

@media screen and (max-width: 650px) {
  .tracklist {
    margin-top: 150%;
  }
}

@media screen and (max-width: 500px) {
  .player span {
    display: none;
  }
  .player .playerLeftIcons svg {
    width: 20px;
  }
  .time {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-evenly;
    align-items: center;
  }
  .playerImg {
    padding: 0;
  }
  .time input[type="range"]::-webkit-slider-thumb {
    visibility: hidden;
  }
  .artistTrack {
    padding: 0;
    margin: 0;
  }
  .fullPlaylist {
    height: 27vh;
  }
}
@media screen and (max-width: 430px) {
  .infos {
    margin-left: 8px;
  }
  .infos h4 {
    font-size: 15px;
  }
}

@media screen and (max-width: 420px) {
  .profile h1 {
    font-size: 50px;
  }

  .tracklist {
    margin-top: 200%;
  }
}

/* Height */
@media screen and (max-height: 700px) {
  .banner {
    margin-top: 20%;
  }
  .tracklist {
    margin-top: 180%;
  }
  .play {
    flex-direction: column-reverse;
  }
  .play img {
    margin-right: 20%;
  }
  .play h3 {
    text-align: center;
  }
}
</style>
