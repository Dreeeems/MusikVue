import { defineStore } from "pinia";

export const ArtistSearch = defineStore("ArtistSearch", {
  state: () => ({ id: "", loading: null, tracklist: {} }),

  actions: {
    Artist(id) {
      this.fetchArtist(id);
    },

    async fetchArtist(id) {
      const loading = true;
      this.loading = loading;
      const response = await fetch(`https://api.deezer.com/search?q=${id}`);
      const tracklist = await response.json();
      this.tracklist = tracklist;
      this.loading = false;
    },
  },
});
