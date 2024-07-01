<script>
import { store } from "../../data/store";
import axios from 'axios';
export default {
  props: {
    type: {
      name: String,
    }
  },
  data() {
    return {
      store,
      types: [],
      selectedTypes: [],
    };
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
  computed: {
    cartItemCount() {
      return this.store.cart.reduce((acc, item) => acc + item.quantity, 0);
    },
  },
  mounted() {
    this.getApi();
  }
};
</script>

<template>
  <div class="container hero d-flex justify-content-center d-block">
    <div class="logo d-flex justify-content-center position-relative">
      
      <div class="popup position-absolute position-fixed z-3 rounded-5 d-none">

        <button class="btn btn-primary rounded-5" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i class="fa-solid fa-utensils"></i></button>

        
      </div>
        <div class="offcanvas offcanvas-start w-50 overflow-hidden overflow-y-auto" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel"></h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class=" list-unstyled">
            <li v-for="item in store.types" :key="`t-${item.id}`">
              <label :class="{ 'red-bg': isSelected(item.name) }">
                <input 
                class="hidden"
                type="checkbox" 
                :value="item.name" 
                @change="updateFilter" 
                />
                {{ item.name }}
              </label>
            </li>
          </ul>
        </div>
</div>
      
      <img src="/logo_1.png" alt="logo">
      <img src="/logo_1_def.png" alt="logo" class="d-none logo-mobile">

      
      
      <div
        v-if="cartItemCount === 0" 
        class="thought floating"
      >
        <p class="line-1 anim-typewriter">Potresti ordinare qualcosa..</p>
      </div>
      <div 
        v-if="cartItemCount > 0"
        class="speech floating"
      >
        <p class="line-1 anim-typewriter">Hai prodotti nel carrello!</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  margin: 20px auto;
  .logo{
    position: relative;
    .img{
      position: absolute;
    }
    .thought{
      width: 100%;
      position: absolute;
      top: 10%;
      left: 80%;
    }
    .speech{
      width: 100%;
      position: absolute;
      top: 10%;
      left: 80%;
    }
  }
}

/* Google Fonts */
@import url(https://fonts.googleapis.com/css?family=Anonymous+Pro);

.red-bg {
  background-color: rgb(219, 110, 9) !important;
}

.line-1{
    position: relative;
    top: 50%;  
    width: 24em;
    margin: 0 auto;
    border-right: 2px solid rgba(255,255,255,.75);
    text-align: center;
    white-space: nowrap;
    overflow: hidden; 
}

/* Animation */
.anim-typewriter{
  animation: typewriter 1s steps(44) 1s 1 normal both,
             blinkTextCursor 500ms steps(44) infinite normal;
}
@keyframes typewriter{
  from{width: 0;}
  to{width: 91%;}
}
@keyframes blinkTextCursor{
  from{border-right-color: rgba(255,255,255,.75);}
  to{border-right-color: transparent;}
}

/* PRIMO */
.thought {
  color: #fff;
  font-size: 18px;
  max-width: 28ch;
  text-align: center;
}
.thought { 
  --b: 3em; /* tail dimension */

  --p: 16%;  /* main position (0%:left 100%:right) */
  --r: 1.2em; /* the radius */

  padding: 1em;
  border-radius: var(--r) var(--r) min(var(--r),100% - var(--p) - var(--b)/4) min(var(--r),var(--p) - var(--b)/4)/var(--r);
  background: #ff9f1c; /* the main color */
  position: relative;
}


.thought:before {
  content: "";
  position: absolute;
  top: 100%;
  left: clamp(var(--b)/-2,var(--p) - 3*var(--b)/4,100% - var(--b));
  width: var(--b);
  aspect-ratio: 1;
  background: inherit;
  --g:#000 calc(100% - 1px),#0000;
  -webkit-mask: 
    radial-gradient(circle closest-side at 12% 88%,var(--g)),
    radial-gradient(20% 20% at 52% 55%,var(--g)),
    radial-gradient(25% 25% at 75% 0,var(--g));
}
/* /PRIMO */

/* SECONDO */
.speech {
  color: #fff;
  font-size: 18px;
  max-width: 28ch;
  text-align: center;
}
.speech {
  /* tail dimension */
  --b: 3em;   /* base */
  --h: 1.8em; /* height */
  --t: .6;    /* thickness (from 0 to 1) */

  --p: 20%;  /* main position (0%:left 100%:right) */
  --r: 1.2em; /* the radius */

  padding: 1em;
  border-radius: var(--r) var(--r) min(var(--r),100% - var(--p) - (1 - var(--t))*var(--b)/2) min(var(--r),var(--p) - (1 - var(--t))*var(--b)/2)/var(--r);
  background: #4ECDC4; /* the main color */
  position: relative;
}
.speech:before {
  content: "";
  position: absolute;
  top: 100%;
  left: clamp(-1*var(--t)*var(--b),var(--p) - (var(--t) + 1)*var(--b)/2,100% - var(--b));
  width: var(--b);
  height: var(--h);
  background: inherit;
  border-bottom-right-radius: 100%;
  -webkit-mask: radial-gradient(calc(var(--t)*100%) 105% at 0 0,#0000 99%,#000 101%);
}

@media (max-width: 768px) {
  .logo{
    img{
      width: 65%;
    }
    .thought{
      display: none;
    }
    .speech{
      display: none;
    }
}
}

@media (max-width: 576px) {
  .hero{
    img{
      display: none !important;
    }
    .logo-mobile{
      display: block !important;
      margin-bottom: -100px;
    }
    .logo{
      .popup{
        left: -14px;
        padding: 4px;
        background-color: #2ec4b6;
        display: block !important;
        position: fixed;
        button{
          background: #ff9f1c !important;
          border: none;
          &:active{
            transition: scale .2s;
            scale: .9;
          }
        }
        &:hover{
          transition: left .3s;
          left: 4px;
        }
        &:not(:hover){
          transition: left .3s;
        }
      }
      .offcanvas{
        border-radius: 0 50% 50% 0;
        background-color: #2ec4b6;
        .offcanvas-body{
          label {
            background-color: #ff9f1c;
            color: white;
            text-decoration: none;
            font-size: 20px;
            padding: 10px 20px;
            width: 160px;
            margin-bottom: 10px;
            text-align: center;
            border-radius: 20px;
            cursor: pointer;
            .hidden {
              display: none;
            }
          }
        }
      }
      .offcanvas-backdrop{
          background-color: transparent !important;
        }
    }
}
}


</style>

