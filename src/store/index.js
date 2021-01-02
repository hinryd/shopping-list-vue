import { createStore } from "vuex";

export default createStore({
  strict: true,
  state: {
    products: [
      { name: "Banana Skin", price: 20 },
      { name: "Shiny Star", price: 40 },
      { name: "Green Shells", price: 60 },
      { name: "Banana Skin", price: 80 },
    ],
  },
  getters: {
    // like computer property
    saleProducts: (state) => {
      return state.products.map((product) => {
        return { ...product, price: product.price / 2 };
      });
    },
  },
  mutations: {
    reducePrice: (state, amount) => {
      state.products.map((product) => {
        product.price -= amount;
      });
    },
  },
  actions: {
    reducePriceInDelay: (context) => {
      setTimeout(() => {
        context.commit("reducePrice", 3);
      }, 2000);
    },
  },
  modules: {},
});
