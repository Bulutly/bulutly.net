import { defineStore } from "pinia";

export const useControllerStore = defineStore("controller", {
  state: () => ({ name: "Eduardo" }),
  getters: {
    nameSample: (state) => state.name,
  },
  actions: {
    updateName(payload: string) {
      this.name = payload;
    },
  },
});
