<script>
import { store } from "../data/store";
import axios from "axios";

import DishCard from "../components/partials/DishCard.vue";
import Cart from "../components/partials/Cart.vue";

export default {
  name: "Menu",

  components: {
    DishCard,
    Cart,
  },

  data() {
    return {
      store,
      restaurant: {},
      cart: [],
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
    addToCart(dish) {
      if (
        this.store.restaurantId &&
        this.store.restaurantId !== this.restaurant.id
      ) {
        alert(
          "Non puoi aggiungere piatti da un altro ristorante. Svuota il carrello prima di aggiungere piatti da questo ristorante."
        );
        return;
      }

      if (!this.store.restaurantId) {
        this.store.restaurantId = this.restaurant.id;
      }

      const itemIndex = this.store.cart.findIndex(
        (item) => item.id === dish.id
      );
      if (itemIndex !== -1) {
        this.store.cart[itemIndex].quantity++;
      } else {
        dish.quantity = 1;
        this.store.cart.push(dish);
      }
      console.log(this.store.cart);
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

    <div class="row justify-content-between">
      <div class="col col-7">
        <DishCard
          @callFunction="addToCart"
          v-for="dish in restaurant.dishes"
          :key="dish.id"
          :dishObject="dish"
          class="flex-grow-0"
        />
      </div>
      <Cart />
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
