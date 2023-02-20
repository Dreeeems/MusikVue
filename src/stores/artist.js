import { defineStore } from "pinia";

export const ArtistCount = defineStore("artist", {
  state: () => ({ id: "", loading: null, tracklist: {} }),

  actions: {
    Artist(id) {
      this.fetchArtist(id);
    },

    async fetchArtist(id) {
      const loading = true;
      this.loading = loading;
      const response = await fetch(`https://api.deezer.com/artist/${id}`);
      const tracklist = await response.json();
      this.tracklist = tracklist;
      this.loading = false;
    },
    Tracklist(id) {
      this.fetchArtistTracklist(id);
    },
    async fetchArtistTracklist(id) {
      const loading = true;
      this.loading = loading;
      const response = await fetch(
        `https://api.deezer.com/artist/${id}/top?limit=50`
      );
      const tracklist = await response.json();
      this.tracklist = tracklist;
      this.loading = false;
    },
  },
});
