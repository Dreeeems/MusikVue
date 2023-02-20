import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    id: 0,
    tracks: [],
    loading: null,
    items: [],
    img: null,
    tracklist: [],
    load: null,
  }),

  actions: {
    ChangeId(id) {
      this.id = id;
      this.fetchData(this.id);
    },
    async fetchData(id) {
      this.loading = true;
      const response = await fetch(
        `https://api.deezer.com/chart/${id}?limit=30`
      );
      const items = await response.json();
      this.items = items;
      this.loading = false;
    },
    Artist(id) {
      this.id = id;
      this.fetchArtistData(this.id);
    },
    Tracklist(id) {
      this.fetchArtistTracklist(id);
    },

    async fetchArtistData(id) {
      const response = await fetch(`https://api.deezer.com/artist/${id}`);
      const tracks = await response.json();
      const img = tracks.picture_xl;
      this.img = img;
      this.tracks = tracks;
    },
    async fetchArtistTracklist(id) {
      this.load = true;
      const response = await fetch(`${id}`);
      const tracklist = await response.json();
      this.tracklist = tracklist;
      this.load = false;
    },
  },
});
