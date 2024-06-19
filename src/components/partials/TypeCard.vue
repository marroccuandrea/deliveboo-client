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
  <div class="container main-wrapper">
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

@media (min-width: 769px) {
  .main-wrapper {
    display: flex;
    justify-content: center;
  }
}
</style>
