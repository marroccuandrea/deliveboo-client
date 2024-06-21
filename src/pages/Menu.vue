<script>
export default {
  components: {},
  props: {
    restaurantObject: Object,
  },
};
</script>

<template>
  <div class="container-fluid">Menu {{ restaurantObject.slug }}</div>
</template>

<style lang="scss" scoped>
.container-fluid {
  padding: 0 !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
}
</style>
