<!-- <script>
import { register } from "swiper/element/bundle";
import { store } from "../../data/store";
import axios from 'axios';
register();

export default {
  props: {
    type: {
      business_name: String,
      image: String,
    }
  },
  data() {
    return {
      store,
      types: [],
      restaurants: [],
    }
  },
  computed: {
    filteredRestaurants() {
      if (this.store.filterTypes.length === 0) {
        return this.store.restaurants;
      }
      return this.store.restaurants.filter(restaurant => 
        restaurant.types.some(type => this.store.filterTypes.includes(type.name))
      );
    }
  },
  methods: {
    getApi() {
      axios.get(this.store.restaurantUrl, {
        params: store.queryParams
      })
      .then(result => {
        this.store.restaurants = result.data.restaurants;
        console.log(this.store.restaurants);
      })
      .catch(error => {
        console.log(error);
      })
    }
  },
  mounted() {
    this.getApi();
  }
}
</script>

<template>
  <div class="container ristoranti">
    <div class="row row-cols-3">
      <div class="col" v-for="item in filteredRestaurants" :key="`r-${item.id}`">
        <div class="card">
          <img v-if="item.image" :src="item.image" class="card-img-top"/>
          <img v-else src="/placeholder.webp" class="card-img-top"/>
          <div class="card-body">
            <h5 class="card-title">{{item.business_name}}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ristoranti {
  overflow-y: auto;
  overflow-x: hidden;
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
    width: 90%;
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
</style> -->
<script>
import { register } from "swiper/element/bundle";
import { store } from "../../data/store";
import axios from 'axios';
register();

export default {
  props: {
    type: {
      business_name: String,
      image: String,
    }
  },
  data() {
    return {
      store,
      types: [],
      restaurants: [],
    }
  },
  computed: {
    filteredRestaurants() {
      if (this.store.filterTypes.length === 0) {
        return this.store.restaurants;
      }
      return this.store.restaurants.filter(restaurant => 
        this.store.filterTypes.every(filterType => 
          restaurant.types.some(type => type.name === filterType)
        )
      );
    }
  },
  methods: {
    getApi() {
      axios.get(this.store.restaurantUrl, {
        params: store.queryParams
      })
      .then(result => {
        this.store.restaurants = result.data.restaurants;
        console.log(this.store.restaurants);
      })
      .catch(error => {
        console.log(error);
      })
    }
  },
  mounted() {
    this.getApi();
  }
}
</script>

<template>
  <div class="container ristoranti">
    <div class="row row-cols-3">
      <div class="col" v-for="item in filteredRestaurants" :key="`r-${item.id}`">
        <div class="card">
          <img v-if="item.image" :src="item.image" class="card-img-top"/>
          <img v-else src="/placeholder.webp" class="card-img-top"/>
          <div class="card-body">
            <h5 class="card-title">{{item.business_name}}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ristoranti {
  overflow-y: auto;
  overflow-x: hidden;
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
    width: 90%;
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

