<!-- <script>
import { register } from "swiper/element/bundle";
import { store} from "../../data/store";
import axios from 'axios';
import { types } from "sass";
register();


export default {
props:{
  type:{
    name: String,
  }
},
data() {
  return {
    store,
    types: [],
  }
},
methods:{
  getApi(){
    axios.get(this.store.typeUrl,{
    params:store.queryParams
  })
  .then(result=>{
    this.store.types=result.data.types;
    console.log(this.store.types);
  })
  .catch(error=>{
    console.log(error);
  })
}
},
mounted(){
  this.getApi();
}}
</script>

<template>
  <div>
    <div class="swiper-bg desktop">
      <swiper-container
        :loop="true"
        :speed="2000"
        direction="vertical"
        :slides-per-view="7"
        :space-between="10"
        class="swiper-desktop">
        <swiper-slide v-for="item in store.types" :key="`t-${item.id}`">
          <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckDefault">
    {{item.name}}
  </label>
</div>
        </swiper-slide>
      </swiper-container>
    </div>
    <div class="swiper-bg-2 tablet">
      <swiper-container
        :loop="true"
        :speed="2000"
        direction="horizontal"
        :slides-per-view="2"
        :space-between="10"
        class="swiper-tablet"
      >
      <swiper-slide v-for="item in store.types" :key="`t-${item.id}`">
          <a href="#">{{ item.name }}</a>
        </swiper-slide>
      </swiper-container>
    </div>
  </div>
</template>
<style scoped>
.swiper-bg {
  background-color: #26a69a;
  height: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10% 10%;
  border-radius: 50px;
}

.swiper-bg-2 {
  background-color: #26a69a;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10% 10%;
  border-radius: 50px;
}

.swiper-desktop {
  height: 80%;
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

.swiper-tablet {
  height: auto;
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
  font-size: 30px;
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
</style> -->
