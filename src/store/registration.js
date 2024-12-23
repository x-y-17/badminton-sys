import { defineStore } from "pinia";

export const useRegistrationStore = defineStore("registration", {
  state: () => ({
    players: [],
    photos: [
      {
        id: 1,
        url: "https://example.com/photo1.jpg",
        description: "精彩瞬间1",
      },
      {
        id: 2,
        url: "https://example.com/photo2.jpg",
        description: "精彩瞬间2",
      },
      {
        id: 3,
        url: "https://example.com/photo3.jpg",
        description: "精彩瞬间3",
      },
    ],
    statistics: {
      totalMatches: 10,
      totalPlayers: 20,
      averageScore: 15.5,
    },
  }),
  actions: {
    addPlayer(player) {
      this.players.push(player);
      this.statistics.totalPlayers++;
    },
    addPhoto(photo) {
      this.photos.push(photo);
    },
    updateStatistics(newStats) {
      this.statistics = { ...this.statistics, ...newStats };
    },
  },
  getters: {
    getPlayerById: (state) => (id) => {
      return state.players.find((player) => player.id === id);
    },
  },
});
