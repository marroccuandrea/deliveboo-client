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
  width: 50%;
}

@media (min-width: 769px) {
  .main-wrapper {
    display: flex;
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .type-wrapper {
    width: 100%;
  }
}

@media (max-width: 576px) {
  .main-wrapper {
    
  }
  
  .main-wrapper .card-wrapper {
    width: 100%;
    display: none;
  }
}
</style>
