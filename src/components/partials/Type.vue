<script>
import { register } from "swiper/element/bundle";
import { store} from "../../data/store";
import Loader from "../partials/Loader.vue";
import axios from 'axios';
import { types } from "sass";
register();


export default {
  components: {
    Loader,
  },
props:{
  type:{
    name: String,
  }
},
data() {
  return {
    store,
    types: [],
    loading:true,
  }
},
methods:{
  getApi(){
    this.loading=true;
    axios.get(this.store.typeUrl,{
    params:store.queryParams
  })
  .then(result=>{
    this.store.types=result.data.types;
    console.log(this.store.types);
    this.loading=false;
  })
  .catch(error=>{
    this.loading =false;
    console.log(error);
  })
}
},
mounted(){
  this.getApi();
}}
</script>

<template>
  <div v-if="!loading">
    <div class="swiper-bg desktop">
      <swiper-container
        :loop="true"
        :speed="2000"
        direction="vertical"
        :slides-per-view="7"
        :space-between="10"
        class="swiper-desktop">
        <swiper-slide v-for="item in store.types" :key="`t-${item.id}`">
          <label><input class="hidden" type="checkbox"/>{{ item.name }}</label>
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
        <label><input type="checkbox"/>{{ item.name }}</label>
        </swiper-slide>
      </swiper-container>
    </div>
  </div>
  <Loader v-else />
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
    label {
      color: white;
      text-decoration: none;
      font-size: 40px;
      cursor: pointer;
      .hidden {
        
      }
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
  label {
      color: white;
      text-decoration: none;
      font-size: 40px;
      cursor: pointer;
      .hidden {
        display: none;
      }
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
