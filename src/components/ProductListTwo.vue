<template>
  <div class="product-list-two">
    <h2>Product List Two</h2>
    <ul>
      <li v-for="(product, index) in products" :key="index">
        <span class="name">{{ product.name }}</span>
        <span class="price">{{ product.price }}</span>
      </li>
    </ul>
    <button @click="reducePrice(4)">Reduce Price</button>
  </div>
</template>

<script>
export default {
  name: "ProductListTwo",
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    // committing a mutation
    reducePrice: function(amount) {
      this.$store.commit("reducePrice", amount);
    },
  },
};
</script>
