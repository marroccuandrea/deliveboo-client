<script>
import { register } from "swiper/element/bundle";
import { store } from "../../data/store";
import Loader from "../partials/Loader.vue";
import axios from 'axios';
register();

export default {
  components: {
    Loader,
  },
  props: {
    type: {
      name: String,
    }
  },
  data() {
    return {
      store,
      types: [],
      loading: true,
      selectedTypes: [], // Aggiunta di una proprietà per tracciare gli elementi selezionati
    }
  },
  methods: {
    getApi() {
      this.loading = true;
      axios.get(this.store.typeUrl, {
        params: store.queryParams
      })
      .then(result => {
        this.store.types = result.data.types;
        console.log(this.store.types);
        this.loading = false;
      })
      .catch(error => {
        this.loading = false;
        console.log(error);
      })
    },
    updateFilter(event) {
      const selectedType = event.target.value;
      const index = this.store.filterTypes.indexOf(selectedType);
      if (event.target.checked && index === -1) {
        // If the checkbox is checked and the type is not in the array, add it
        this.store.filterTypes.push(selectedType);
        this.selectedTypes.push(selectedType);
      } else if (!event.target.checked && index !== -1) {
        // If the checkbox is unchecked and the type is in the array, remove it
        this.store.filterTypes.splice(index, 1);
        const selectedIndex = this.selectedTypes.indexOf(selectedType);
        if (selectedIndex !== -1) {
          this.selectedTypes.splice(selectedIndex, 1);
        }
      }
      this.$emit('update-filter', this.store.filterTypes);
      console.log(this.store.filterTypes);
    },
    isSelected(type) {
      return this.selectedTypes.includes(type);
    }
  },
  mounted() {
    this.getApi();
  }
}
</script>

<template>
  <div v-if="!loading">
    <img src="../../../public/Swipe.png" alt="" class="desk-img">
    <div class="swiper-bg desktop">
      <swiper-container
        :loop="true"
        :speed="2000"
        direction="vertical"
        :slides-per-view="7"
        :space-between="10"
        class="swiper-desktop">
        <swiper-slide v-for="item in store.types" :key="`t-${item.id}`" :class="{ 'red-bg': isSelected(item.name) }">
          <label>
            <input 
              class="hidden" 
              type="checkbox" 
              :value="item.name" 
              @change="updateFilter" 
            />
            {{ item.name }}
          </label>
        </swiper-slide>
      </swiper-container>
    </div>
    <img src="../../../public/Swipe.png" alt="" class="tab-img">
    <div class="swiper-bg-2 tablet">
      <swiper-container
        :loop="true"
        :speed="2000"
        direction="horizontal"
        :slides-per-view="2"
        :space-between="10"
        class="swiper-tablet"
      >
        <swiper-slide v-for="item in store.types" :key="`t-${item.id}`" :class="{ 'red-bg': isSelected(item.name) }">
          <label>
            <input 
              type="checkbox" 
              :value="item.name" 
              @change="updateFilter" 
            />
            {{ item.name }}
          </label>
        </swiper-slide>
      </swiper-container>
    </div>
  </div>
  <Loader v-else />
</template>

<style scoped>
.desk-img{
  margin-bottom: -170px;
}
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
        display: none;
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

.red-bg {
  background-color: rgb(219, 110, 9) !important;
}

@media (min-width: 769px) {
  .tablet {
    display: none;
  }
  .tab-img{
    display: none;
  }
}

@media (max-width: 768px) {
  .desktop {
    display: none;
  }
  .desk-img{
    display: none;
  }
}
</style>
