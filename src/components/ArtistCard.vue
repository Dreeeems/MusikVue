<template>
  <div class="card">
    <div class="card-header">
      <img :src="track.picture_big" />
    </div>
    <div class="card-body">
      <span class="artistTag">{{ track.type }}</span>
      <h4>{{ track.name }}</h4>
      <span @click="goToArtist(track.id)">
        <fas icon="fa-solid fa-user" /> {{ track.name }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { useRouter, RouterLink, RouterView } from "vue-router";
const objet = props.track;
const router = useRouter();
const goToArtist = (id) => {
  router.push({ name: "artist", params: { Id: id } });
};
const props = defineProps({
  track: Object,
});
</script>

<style>
.card {
  margin: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 300px;
}
.card-header img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
}
.artistTag {
  background: #0d6efd;
  border-radius: 50px;
  font-size: 12px;
  margin: 0;
  color: #fff;
  padding: 2px 10px;
  text-transform: uppercase;
  cursor: pointer;
}
.playBtn {
  margin-left: 30%;
  padding-bottom: 15px;
  cursor: pointer;
}
</style>
