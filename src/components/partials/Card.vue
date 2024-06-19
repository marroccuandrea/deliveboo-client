<script>
import { register } from "swiper/element/bundle";
import { store} from "../../data/store";
import axios from 'axios';
import { types } from "sass";
register();


export default {
props:{
  type:{
    business_name: String,
  }
},
data() {
  return {
    store,
    types: [],
    restaurants: [],
  }
},
methods:{
  getApi(){
    axios.get(this.store.restaurantUrl,{
    params:store.queryParams
  })
  .then(result=>{
    this.store.restaurants=result.data.restaurants;
    console.log(this.store.restaurants);
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
  <div class="container ristoranti">
    <div class="row row-cols-3">
      <div class="col">
        <div class="card" v-for="item in store.restaurants" :key="`r-${item.id}`">
          <img src="../../../public/test.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{item.business_name}}</h5>
            <a href="#" class="btn px-4">Scopri</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ristoranti {
  overflow-y: auto;
  overflow-y: hidden;
}
.card {
  margin-bottom: 20px;
  height: 20rem;
  background-color: #f6b802;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5%;
  border-radius: 15px;
  border: none;
  flex-shrink: 0;
  img {
    width: 80%;
  }
  .card-title {
    color: white;
  }
  .card-body {
    display: flex;
    align-items: center;
    flex-direction: column;
    .btn {
      background-color: #2dc4b6;
      color: white;
      border-radius: 15px;
      border: none;
    }
  }
}
</style>
