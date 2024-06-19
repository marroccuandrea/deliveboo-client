<template>
  <div class="swiper-bg desktop">
    <swiper-container
      :loop="true"
      :speed="2000"
      direction="vertical"
      :slides-per-view="7"
      :space-between="10"
      class="swiper-desktop"
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
      <swiper-slide><a href="#">Spagnolo</a></swiper-slide>
      <swiper-slide><a href="#">Greco</a></swiper-slide>
      <swiper-slide><a href="#">Vegetariano</a></swiper-slide>
    </swiper-container>
  </div>
  <div class="swiper-bg-2 tablet">
    <swiper-container
      :loop="true"
      :speed="2000"
      direction="horizontal"
      :slides-per-view="3"
      :space-between="10"
      class="swiper-tablet"
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
      <swiper-slide><a href="#">Spagnolo</a></swiper-slide>
      <swiper-slide><a href="#">Greco</a></swiper-slide>
      <swiper-slide><a href="#">Vegetariano</a></swiper-slide>
    </swiper-container>
  </div>
</template>

<script>
import { register } from "swiper/element/bundle";
register();

export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>

.swiper-bg{
  background-color: #26a69a;
  height: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10% 10%;
  border-radius: 50px;
}
.swiper-bg-2{
  background-color: #26a69a;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10% 10%;
  border-radius: 50px;
}

.swiper-desktop {
  height: 90%;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

  swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f9a825; 
    color: white;
    font-size: 20px;
    border-radius: 20px;
    padding: 10% !important;
    a {
      color: white;
      text-decoration: none;
      font-size: 40px;
    }
  }
}

.swiper-tabet {
  height: 90%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f9a825; 
    color: white;
    font-size: 20px;
    border-radius: 20px;
    padding: 10% !important;
    a {
      color: white;
      text-decoration: none;
      font-size: 40px;
    }
  }
}
@media (min-width: 769px) {
  .tablet {
    display: none;
  }
}
@media (max-width: 768px) {
  .desktop {
    display: none;
  }
}

</style>
