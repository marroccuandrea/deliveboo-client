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
    <router-view class="mid-section"></router-view>

    <Footer />
  </div>
</template>

<style lang="scss" scoped></style>
