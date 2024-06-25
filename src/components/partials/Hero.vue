<script>
export default { 
}
</script>
<template>
  <div class="container hero">
    <div class="baloon">
      <img src="../../../public/FumettoE.png" alt="">
    </div>
    <div class="logo">
      <img src="../../../public/DeliveBoo.png" alt="">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
  .logo img{
    position: relative;
  }
  .baloon img{
    position: absolute;
    top: -165px;
    left: 50%;
  }
}
</style>