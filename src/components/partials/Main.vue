<script>
import Hero from "./Hero.vue";
import Swiper from "./Swiper.vue";
import CategoryCard from "./CategoryCard.vue";
export default {
  components: {
    Hero,
    Swiper,
    CategoryCard,
  },
};
</script>

<template>
  <main>
    <Hero />
    <Swiper />
    <CategoryCard />
  </main>
</template>

<style lang="scss" scoped></style>
