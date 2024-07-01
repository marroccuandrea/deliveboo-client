<script>
import { store } from "../../data/store";
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
    if (urlParams.get("payment") === "success") {
      this.paymentSuccess();
    }
  },
  methods: {
    paymentSuccess() {
      this.store.cart = [];
      this.store.restaurantId = null;
      localStorage.removeItem("cart");
      localStorage.removeItem("restaurantId");
      this.updateURL();
    },
    updateURL() {
      // Sostituisci la parte della query string per rimuovere il parametro payment
      const url = new URL(window.location);
      url.searchParams.delete("payment");
      history.replaceState(null, "", url.toString());
    },
  },
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
