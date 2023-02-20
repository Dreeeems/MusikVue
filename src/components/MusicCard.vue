<template>
  <div class="card">
    <div class="card-header">
      <img :src="track.album.cover_big" />
    </div>
    <div class="card-body">
      <span class="tag">{{ track.type }}</span>
      <h4>{{ track.title }}</h4>
      <span class="cardTag" @click="goToArtist(track.artist.id)">
        <fas icon="fa-solid fa-user" /> {{ track.artist.name }}
      </span>
    </div>

    <fas
      class="playBtn"
      icon="fa-solid fa-circle-play"
      size="4x"
      color="#6f42c1"
      @click="$emit('getId', objet)"
    />
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
console.log(props.track)
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
.tag {
  background: #aa28cc;
  border-radius: 50px;
  font-size: 12px;
  margin: 0;
  color: #fff;
  padding: 2px 10px;
  text-transform: uppercase;
  cursor: pointer;
}

.cardTag {
  cursor: pointer;
}

.playBtn {
  margin-left: 30%;
  padding-bottom: 15px;
  cursor: pointer;
}
</style>
