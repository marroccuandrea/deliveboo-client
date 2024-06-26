<script>
export default { 
}
</script>
<template>
  <div class="container hero d-flex justify-content-center">
    <div class="logo">
      <img src="/logo_1_def.png" alt="">
    </div>
    <div class="speech-bubbles">
      <!-- <div class="jiji">Potresti ordinare qualcosa..</div> -->
      <!-- <div class="gudoghi">Hai prodotti nel carrello!</div> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  height: 20%;
  .logo{
    position: relative;
    .logo img{
      position: relative;
    }
    .speech-bubbles{
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}


/* PRIMO */
.jiji {
  color: #fff;
  font-size: 18px;
  max-width: 28ch;
  text-align: center;
}
.jiji { 
  --b: 3em; /* tail dimension */

  --p: 16%;  /* main position (0%:left 100%:right) */
  --r: 1.2em; /* the radius */

  padding: 1em;
  border-radius: var(--r) var(--r) min(var(--r),100% - var(--p) - var(--b)/4) min(var(--r),var(--p) - var(--b)/4)/var(--r);
  background: #ff9f1c; /* the main color */
  position: relative;
}
.jiji:before {
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
.gudoghi {
  color: #fff;
  font-size: 18px;
  max-width: 28ch;
  text-align: center;
}
.gudoghi {
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
.gudoghi:before {
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
/* /SECONDO */

</style>