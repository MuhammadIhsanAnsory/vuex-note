import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [{
        name: "Point Blank",
        size: 3
      },
      {
        name: "Apex Legend",
        size: 28
      },
      {
        name: "PUBG",
        size: 12
      },
      {
        name: "PES 2020",
        size: 31
      },
      {
        name: "Stronghold Crusader II",
        size: 16
      },
    ],
  },
  getters: {
    saleProducts: state => {
      let saleProducts = state.products.map((product) => {
        return {
          name: `**${product.name}**`,
          size: product.size * 3,
        };
      });
      return saleProducts;
    }
  },
  mutations: {
    reduceSize: (state, payload) => {
      state.products.forEach((product) => {
        product.size -= payload;
      });
    }
  },
  actions: {
    reduceSize: (context, payload) => {
      setTimeout(function () {
        context.commit('reduceSize', payload)
      }, 1000)
    }
  },
  modules: {}
})