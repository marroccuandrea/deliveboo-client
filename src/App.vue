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
    <div class="container-fluid footer">
      <Footer />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-wrapper {
  display: flex;
  flex-direction: column;
  min-height:calc(100vh - 195px);
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
