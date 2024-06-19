<script>
import Hero from "./Hero.vue";
import Swiper from "./Swiper.vue";
import TypeCard from "./TypeCard.vue";
export default {
  components: {
    Hero,
    Swiper,
    TypeCard,
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

<style lang="scss" scoped></style>
