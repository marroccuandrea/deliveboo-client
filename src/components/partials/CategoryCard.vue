<script>
import Category from "./Category.vue";
import Card from "./Card.vue";

export default {
  components: {
    Category,
    Card,
  },
  setup() {
    return {};
  },
};
</script>

<template>
  <div class="d-flex">
    <div class="category-wrapper">
      <Category />
    </div>
    <div class="card-wrapper">
      <Card />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
