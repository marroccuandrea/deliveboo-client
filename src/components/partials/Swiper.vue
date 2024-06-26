<script>
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();
export default {
  setup() {
    return {};
  },
};
</script>

<template>
  <div class="box">
    <img class="logo-text" src="/public/logo_text_def.png" alt="">
    
    <!-- SWIPER -->
    <div class="swiper-bg-ext">
      <div class="swiper-bg d-flex">
        <div class="container-fluid swiper-box bg-white">
          <swiper-container
            :loop="true"
            :autoplay="{ delay: 0, disableOnInteraction: false }"
            :speed="5000"
            direction="horizontal"
            slides-per-view="1"
            :space-between="0"
          >
            <swiper-slide
              ><img src="../../../public/swiper-test.png"
            /></swiper-slide>
            <swiper-slide
              ><img src="../../../public/swiper-test.png"
            /></swiper-slide>
            <swiper-slide
              ><img src="../../../public/swiper-test.png"
            /></swiper-slide>
          </swiper-container>
        </div>
      </div>
    </div>
    <!-- SWIPER -->
  </div>
</template>

<style lang="scss" scoped>
.box{
  position: relative;
}

.logo-text{
  position: absolute;
  bottom: 90%;
  left: 38.5%;
}

.swiper-container {
  width: 100%;
  height: 100vh;
}
.swiper-box {
  background-color: #f9fafa;
}
swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #fff;
  background-color: #000;
  img {
    width: 100%;
    height: 100%;
  }
}
.container-fluid {
  padding: 0 !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
}
.swiper-bg {
  background-color: #f6b802;
  padding: 30px 0;
}
.swiper-bg-ext {
  background-color: #26a69a;
  padding: 10px 0;
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
