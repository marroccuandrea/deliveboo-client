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
  <div class="box d-block">    
    <!-- SWIPER -->
     <div>

       <div class="box-text d-flex justify-content-center">
         <img class="logo-text" src="/public/logo_text_def.png" alt="">
       </div>
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
     </div>
</template>

<style lang="scss" scoped>
.box-text{
  margin-bottom: -80px;
}
.swiper-container {
  width: 100%;
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

@media (max-width: 768px) {
  .box-text {
    img{
      width: 50%;
    }
  }
  .swiper-bg-ext {
    height: auto;
    .swiper-bg{
      height: auto;
      .swiper-box{
        height: auto;
        swiper-slide{
          height: auto;
          img{
            height: 100%;
          }
        }
      }
    }
  }
}
@media (max-width: 576px) {
  .box{
    display: none !important;
  }
}
</style>
