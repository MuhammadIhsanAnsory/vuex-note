<template>
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
      <li v-for="(product, i) in products" :key="i">
        <span class="name">{{ product.name }}</span>
        =
        <span class="size">{{ product.size }} GB</span>
      </li>
    </ul>
    <button @click="reduceSize(2)">Reduce Size</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
    ...mapGetters(["saleProducts"]),
  },
  methods: {
    ...mapActions(["reduceSize"]),
  },
};
</script>


<style scoped>
#product-list-one {
  background: #fff8b1;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}
#product-list-one ul {
  padding: 0;
}
#product-list-one li {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}
.price {
  font-weight: bold;
  color: #e8800c;
}
</style>
