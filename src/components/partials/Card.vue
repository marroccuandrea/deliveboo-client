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
      itemsPerPage: 6,
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
        restaurant.types.map((type) => ({
          name: type.name,
          styleClass: "badge", // Puoi personalizzare lo stile del badge qui
        }));
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
  <div class="container restaurants d-flex justify-content-center">
    <div
      class="row row-cols-1 row-cols-sm-2 row-cols-md-3 justify-content-center"
    >
      <div
        class="col card-restaurants"
        v-for="item in paginatedRestaurants"
        :key="`r-${item.id}`"
      >
        <router-link
          class="router-link-card"
          :to="{
            name: 'menu',
            params: { slug: item.slug },
            // state: { restaurantObject: item },
          }"
        >
          <div class="card">
            <div class="img-box">
              <img v-if="item.image" :src="item.image" class="card-img-top" />
              <img v-else src="/placeholder.webp" class="card-img-top" />
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ item.business_name }}</h5>
              <div class="badge-container">
                <span
                  v-for="(badge, index) in restaurantTypes(item)"
                  :key="index"
                  :class="badge.styleClass"
                  >{{ badge.name }}</span
                >
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="carousel-controls">
      <button
        class="control-btn prev"
        @click="prevPage"
        v-show="currentPage > 0"
      >
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <button
        class="control-btn next"
        @click="nextPage"
        v-show="currentPage < totalPages - 1"
      >
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </div>

    <div class="carousel-controls controls-bottom d-md-none">
      <button
        class="control-btn prev"
        @click="prevPage"
        v-show="currentPage > 0"
      >
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <button
        class="control-btn next"
        @click="nextPage"
        v-show="currentPage < totalPages - 1"
      >
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/scss/partials/variables";

.restaurants {
  position: relative;
  margin-top: 130px;
  width: 100%;

  .card {
    margin-bottom: 20px;
    background-color: #f6b802;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    border: none;
    width: 100%;
    height: 320px;
    cursor: pointer;
    &:hover {
      transition: transform 0.3s;
      transform: scale(1.01);
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    }
    &:not(:hover) {
      transition: transform 0.3s;
    }
    &:active {
      transform: translateY(4px);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
    .img-box {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 20px;
      width: 90%;
      height: 200px;
      background-color: white;
      border-radius: 20px;
    }
    img {
      width: 92%;
      height: 90%;
      border-radius: 20px;
      object-fit: cover;
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
    }
    .badge-container {
      margin-top: 10px;
      display: flex;
      flex-wrap: wrap;
    }
    .badge {
      margin-right: 5px;
      margin-bottom: 5px;
      padding: 5px 10px;
      border-radius: 5px;
      background-color: $color-primary;
      color: white;
      font-size: medium;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
    .card-text {
      color: white;
      font-size: large;
      margin-top: 10px;
    }
  }

  .carousel-controls {
    position: absolute;
    height: 44px;
    top: calc(50% - 20px - 15px);
    width: 100%;
    display: flex;
    justify-content: space-between;
    .control-btn {
      background-color: #2dc4b6;
      color: white;
      border: none;
      border-radius: 15px;
      padding: 10px 20px;
      cursor: pointer;
      pointer-events: all;
      transition: opacity 0.3s;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
  }

  .prev,
  .next {
    position: absolute;
    &:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      transition: opacity 0.3s;
      transform: scale(1.1);
      transition: transform 0.2s;
    }
    &:not(:hover) {
      transition: transform 0.2s;
    }
    &:active {
      transform: translateY(4px);
      transition: opacity 0.3s;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
  }

  .prev {
    left: -20px;
  }

  .next {
    right: -20px;
  }

  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  @media (min-width: 769px) {
    .restaurants {
      width: 875px;
    }
  }
  @media (min-width: 577px) and (max-width: 768px) {
    // .restaurants .card {
    //   width: 220px;
    //   height: 300px;
    // }

    .carousel-controls {
      .prev {
        left: -30px;
      }

      .next {
        right: -30px;
      }
    }
  }

  @media (max-width: 576px) {
    .restaurants {
      display: flex;
      justify-content: center;
    }

    .card-restaurants {
      .card {
        height: 250px;
        width: 100%;
        display: flex;
        flex-direction: row;
        .img-box {
          width: 200px;
          height: 200px;
          flex-shrink: 0;
        }

        .card-body {
          padding-left: 0;
          h5 {
            width: 100%;
          }

          .badge-container {
            width: 100%;
          }
        }
      }
    }

    .carousel-controls {
      width: 30%;
      top: -60px;

      .prev {
        left: 0;
      }

      .next {
        right: 0;
      }

      &.controls-bottom {
        width: 30%;
        top: 1620px;
      }
    }
  }
}
</style>
