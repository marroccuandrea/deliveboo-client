<script>
import {store } from '../../data/store';
import Hero from "./Hero.vue";
import Swiper from "./Swiper.vue";
import TypeCard from "./TypeCard.vue";
export default {
  data() {
    return {
      store,
    };
  },
  components: {
    Hero,
    Swiper,
    TypeCard,
  },
  mounted() {
    // Controlla se nella URL è presente il parametro payment=success
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('payment') === 'success') {
      this.paymentSuccessFunction();
    }
  },
  methods: {
    paymentSuccessFunction() {
      this.store.cart = [];
      this.store.restaurantId = null;
      localStorage.removeItem("cart");
      localStorage.removeItem("restaurantId");
    }
  }
};
</script>

<template>
  <main>
    <Hero />
    <Swiper />
    <TypeCard />
  </main>
</template>

<style lang="scss" scoped>
@media (max-width: 576px) {
  /* main{
    
  } */
}
</style>
