<template>
  <div class="product-list-one">
    <h2>Sales Products</h2>
    <ul>
      <li v-for="(product, index) in saleProducts" :key="index">
        <span class="name">{{ product.name }}</span>
        <span class="price">{{ product.price }}</span>
      </li>
    </ul>
    <button @click="reducePriceInDelay">Reduce Price</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ProductListOne",
  computed: {
    products() {
      return this.$store.state.products;
    },
    ...mapGetters(["saleProducts"]),
  },
  methods: {
    ...mapActions(["reducePriceInDelay"]),
  },
};
</script>
