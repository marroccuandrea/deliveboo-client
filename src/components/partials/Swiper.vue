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
  <div class="container-fluid swiper-box">

    <swiper-container
    :loop="true"
    :autoplay="{delay:0, disableOnInteraction: false}"
    :speed="5000"
    direction="horizontal"
    slides-per-view="1"
    space-between="0">
      <swiper-slide><img src="../../../public/swiper-test.png" alt=""></swiper-slide>
      <swiper-slide><img src="../../../public/swiper-test.png" alt=""></swiper-slide>
      
   </swiper-container>
  </div>
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

.container-fluid{
  padding: 0!important;
  padding-left: 0!important;
  padding-right: 0!important;
}
</style>