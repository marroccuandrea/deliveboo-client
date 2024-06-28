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
  <div class="container-fluid header-nav">
    <Header />
  </div>
  <div class="main-wrapper">
    <router-view class="mid-section"></router-view>
  </div>
  <div class="container-fluid footer">
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.main-wrapper {
  display: flex;
  flex-direction: column;
  min-height:calc(100vh - 275px);
}

.footer{
  padding: 0!important;
  padding-left: 0!important;
  padding-right: 0!important;
}

.mid-section{
  flex: 0;
}
</style>
