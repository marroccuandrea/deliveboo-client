<script>
import { store } from "../data/store";
import axios from "axios";

import DishCard from "../components/partials/DishCard.vue";

export default {
  name: "Menu",

  components: {
    DishCard,
  },

  data() {
    return {
      restaurant: {},
    };
  },
  props: {
    slug: String,
  },
  methods: {
    getApi() {
      axios
        .get(store.restaurantBySlug + this.slug)
        .then((result) => {
          this.restaurant = result.data.restaurant;
          console.log(this.restaurant);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getApi();
  },
};
</script>

<template>
  <div class="img-box">
    <img :src="restaurant.image" :alt="restaurant.business_name" />
  </div>
  <div class="container">
    <div class="restaurant-info">
      <h3>{{ restaurant.business_name }}</h3>
      <p>{{ restaurant.address }}</p>
      <p>{{ restaurant.phone_number }}</p>
      <p>{{ restaurant.email }}</p>
    </div>

    <div class="d-flex justify-content-between">
      <div class="row">
        <DishCard
          v-for="dish in restaurant.dishes"
          :key="dish.id"
          :dishObject="dish"
        />
      </div>
      <div>Carrello</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/partials/variables";

.img-box {
  height: 500px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.restaurant-info {
  background-color: $color-secondary;
  color: white;
  border-radius: 20px;
  height: 300px;
  padding: 40px;
  position: relative;
  top: -150px;
}
</style>
