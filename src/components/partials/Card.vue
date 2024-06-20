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
import { store } from "../../data/store";
import axios from "axios";

export default {
  props: {
    type: {
      business_name: String,
      image: String,
    },
  },
  data() {
    return {
      store,
      types: [],
      restaurants: [],
      currentPage: 0,
      itemsPerPage: 9,
    };
  },
  computed: {
    filteredRestaurants() {
      if (this.store.filterTypes.length === 0) {
        return this.store.restaurants;
      }
      return this.store.restaurants.filter((restaurant) =>
        this.store.filterTypes.every((filterType) =>
          restaurant.types.some((type) => type.name === filterType)
        )
      );
    },
    paginatedRestaurants() {
      const start = this.currentPage * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredRestaurants.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.filteredRestaurants.length / this.itemsPerPage);
    },
    restaurantTypes() {
      return (restaurant) =>
        restaurant.types.map((type) => type.name).join(", ");
    },
  },
  methods: {
    getApi() {
      axios
        .get(this.store.restaurantUrl, {
          params: store.queryParams,
        })
        .then((result) => {
          this.store.restaurants = result.data.restaurants;
          console.log(this.store.restaurants);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    nextPage() {
      if (this.currentPage < this.totalPages - 1) {
        this.currentPage += 1;
      }
    },
    prevPage() {
      if (this.currentPage > 0) {
        this.currentPage -= 1;
      }
    },
  },
  mounted() {
    this.getApi();
  },
};
</script>

<template>
  <div class="container ristoranti">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
      <div
        class="col"
        v-for="item in paginatedRestaurants"
        :key="`r-${item.id}`"
      >
        <div class="card">
          <div class="img-box">
            <img v-if="item.image" :src="item.image" class="card-img-top" />
            <img v-else src="/placeholder.webp" class="card-img-top" />
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ item.business_name }}</h5>
            <span class="card-text badge text-bg-success">{{
              restaurantTypes(item)
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-controls">
      <button
        class="control-btn prev"
        @click="prevPage"
        v-show="currentPage > 0"
      >
        <
      </button>
      <button
        class="control-btn next"
        @click="nextPage"
        v-show="currentPage < totalPages - 1"
      >
        >
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ristoranti {
  position: relative;
  height: 1000px;
  margin-top: 15%;
  width: 875px;

  .card {
    margin-bottom: 20px;
    background-color: #f6b802;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    border: none;
    width: 100%;
    height: 320px;
    cursor: pointer;
    &:hover {
      transform: scale(1.01);
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    }
    &:active {
      transform: translateY(4px);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
    .img-box {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 8%;
      width: 80%;
      height: 80%;
      background-color: white;
      border-radius: 5%;
      overflow: hidden;
    }
    img {
      width: 90%;
      height: 90%;
    }
    .card-title {
      color: white;
      font-size: x-large;
      font-weight: bold;
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
    .card-text {
      color: white;
      font-size: large;
      margin-top: 10px;
    }
  }

  .carousel-controls {
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
    .control-btn {
      background-color: #2dc4b6;
      color: white;
      border: none;
      border-radius: 15px;
      padding: 10px 20px;
      cursor: pointer;
      pointer-events: all;
      transition: opacity 0.3s;
    }
  }

  .prev,
  .next {
    position: absolute;
    &:hover {
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
      transform: scale(1.1);
    }
    &:active {
      transform: translateY(4px);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
  }

  .prev {
    left: 0;
  }

  .next {
    right: 0;
  }

  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
}

@media (max-width: 768px) {
  .ristoranti {
    overflow-y: scroll;
    overflow-x: hidden;
    .card {
      width: 220px;
      height: 300px;
    }
  }
}

@media (max-width: 575px) {
  .ristoranti {
    overflow-y: scroll;
    overflow-x: hidden;
    .card {
      height: 90vh;
    }
  }
}
</style>
