<script>
import { store } from "../../data/store";
export default {
  data() {
    return {
      store,
    };
  },
  computed: {
    cartItemCount() {
      return this.store.cart.reduce((acc, item) => acc + item.quantity, 0);
    },
  },
};
</script>

<template>
  <div class="container hero d-flex justify-content-center">
    <div class="logo d-flex justify-content-center">
      <img src="/logo_1.png" alt="">
      <div
        v-if="cartItemCount === 0" 
        class="thought"
      >Potresti ordinare qualcosa..</div>
      <div 
        v-if="cartItemCount > 0"
        class="speech"
      >Hai prodotti nel carrello!</div>
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

</style>