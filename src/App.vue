<script>
import Header from "./components/partials/Header.vue";
import Footer from "./components/partials/Footer.vue";

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
    <div class="container">
      <router-view></router-view>
    </div>
    <div class="container">
      <Footer />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
