<script>
import { register } from "swiper/element/bundle";
register();

export default {
  setup() {
    return {};
  },
};
</script>

<template>
  <div class="swiper-bg">
    <swiper-container
      :loop="true"
      :speed="2000"
      direction="vertical"
      :slides-per-view="7"
      :space-between="10"
      class="swiper-wrapper"
    >
      <swiper-slide><a href="#">Italiano</a></swiper-slide>
      <swiper-slide><a href="#">Cinese</a></swiper-slide>
      <swiper-slide><a href="#">Giapponese</a></swiper-slide>
      <swiper-slide><a href="#">Messicano</a></swiper-slide>
      <swiper-slide><a href="#">Vietnamita</a></swiper-slide>
      <swiper-slide><a href="#">Indiano</a></swiper-slide>
      <swiper-slide><a href="#">Vegano</a></swiper-slide>
      <swiper-slide><a href="#">Pizza</a></swiper-slide>
      <swiper-slide><a href="#">Coreano</a></swiper-slide>
      <swiper-slide><a href="#">Greco</a></swiper-slide>
      <swiper-slide><a href="#">Spagnolo</a></swiper-slide>
      <swiper-slide><a href="#">Peruviano</a></swiper-slide>
    </swiper-container>
  </div>
</template>

<style lang="scss" scoped>
swiper-container {
  width: 100%;
  height: 100vh;

  .swiper-slide {
    display: flex;
    justify-content: center;
    flex-direction: column;

    a {
      font-size: 25px;
      color: white;
    }
  }
}
.swiper-bg {
  background-color: blue;
  height: 100%;
}
</style>
