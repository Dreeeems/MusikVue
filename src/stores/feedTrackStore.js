import { defineStore } from "pinia";

export const feedTrackStore = defineStore("feedTrackStore", {
  state: () => ({
    id: "",
    playing: null,
    track: Object,
    tab: {},
    loading: null,
    tracklist: {},
  }),

  actions: {
    Tracklist(track, id) {
      const loading = true;
      const playing = true;
      this.loading = loading;
      const tab = track;
      this.tab = tab;
      this.playing = playing;
      this.fetchTrack(id);
      this.loading = false;
    },
    async fetchTrack(id) {
      const response = await fetch(`https://api.deezer.com/track/${id}`);
      const tracklist = await response.json();
      this.tracklist = tracklist;
    },
  },
});
