<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<template>
  <div class="main-wrapper">
    <div class="container-fluid header-nav">
      <Header />
    </div>
    <router-view class="mid-section"></router-view>
  </div>
  <Footer />
</template>

<style lang="scss" scoped>



</style>
