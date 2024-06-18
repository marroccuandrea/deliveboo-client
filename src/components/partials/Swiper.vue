<script>
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();
export default {
  setup () {
    

    return {}
  }
}
</script>


<template>
 <swiper-container
 :loop="true"
 :autoplay="{delay:0, disableOnInteraction: false}"
 :speed="2000"
 direction="horizontal"
 slides-per-view="1"
 space-between="0">
   <swiper-slide><img src="../../../public/Messicano.png" alt=""></swiper-slide>
   <swiper-slide><img src="../../../public/Sushi.png" alt=""></swiper-slide>
   <swiper-slide><img src="../../../public/Rider.png" alt=""></swiper-slide>
   <swiper-slide><img src="../../../public/Pizza.png" alt=""></swiper-slide>
   <swiper-slide><img src="../../../public/Messicano.png" alt=""></swiper-slide>
   <swiper-slide><img src="../../../public/Sushi.png" alt=""></swiper-slide>
</swiper-container>
</template>

<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 100vh;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #fff;
  background-color: #000;
}
</style>