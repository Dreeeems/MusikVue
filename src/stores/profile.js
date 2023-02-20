import { defineStore } from "pinia";

export const useProfileStore = defineStore("useProfileStore", {
  state: () => ({ id: "", loading: null }),

  actions: {
    UserId(id) {
      const loading = true;
      this.loading = loading;
      id = id;
      this.id = id;

      this.loading = false;
    },
  },
});
