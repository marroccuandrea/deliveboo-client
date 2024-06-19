<script>
import Type from "./Type.vue";
import Card from "./Card.vue";

export default {
  components: {
    Type,
    Card,
  },
  setup() {
    return {};
  },
};
</script>

<template>
  <div class="d-flex">
    <div class="type-wrapper">
      <Type />
    </div>
    <div class="card-wrapper">
      <Card />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.type-wrapper {
  margin-bottom: 50px;
}
</style>
