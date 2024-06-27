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
    <div class="swiper-section">
      <div>

        <div class="scorri-text">
          <img src="../../../public/Swipe.png" alt="" class="desk-img">
        </div>
      </div>
      <div class="swiper-bg desktop">
        <swiper-container
          :loop="true"
          :speed="2000"
          direction="vertical"
          :slides-per-view="7"
          :space-between="10"
          class="swiper-desktop text-capitalize">
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
    </div>
    <div class="tab-img">
      <img src="../../../public/Swipe.png" alt=""> 
    </div>
    <div class="swiper-bg-2 tablet">
      <swiper-container
        :loop="true"
        :speed="2000"
        direction="horizontal"
        :slides-per-view="3"
        :space-between="10"
        class="swiper-tablet"
      >
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
  </div>
  <Loader v-else />
</template>

<style scoped>
.swiper-section{
  position: relative;
  width: 400px;
}
.desk-img{
  width: 100%;
  position: absolute;
  bottom: 80%;
}
.swiper-bg {
  background-color: #26a69a;
  height: 660px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10% 10%;
  border-radius: 50px;
  width: 385px;
  margin-top: 130px;
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
  height: 85%;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  swiper-slide {    
    z-index: 99;
    padding: 0 !important;
    &:hover {
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
      border-radius: 20px;
      transform: scale(1.01);
      z-index: 99;
    }
    width: 300px;
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
      font-size: 20px;
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
      &:active {
    transform: translateY(4px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
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
  .scorri-text{
    display: flex;
    justify-content: center;
  }
  .tab-img{
    display: flex;
    justify-content: center;
    max-width: 100%;
    img{
      width: 60%;
      margin-bottom: -60px;
    }

  }
  .tablet{
    height: 135px !important;
    swiper-slide{
      padding: 30px !important;
      label{
        font-size: 20px;
      }
    }
    margin-bottom: -10%;
  }
}

@media (max-width: 576px){ 
  .tablet{
    display: none;
  }
  .tab-img{
    display: none;
  }
  .desk-img{
    display: block;
    margin-bottom: -80px;
  }
  .swiper-section{
    width: 100%;
    .desktop{
      display: block;
      width: 100% !important;
      .swiper-desktop{
        width: 100% !important;
        height: 90%;
        swiper-slide{
          width: 100% !important;
        }
      }
  }

  }
}
</style>
