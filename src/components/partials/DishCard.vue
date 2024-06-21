<script>
export default {
  props: {
    dishObject: Object,
  },

  methods: {
    addToCart() {
      this.$emit('callFunction');
    }
  }
};
</script>

<template>
  <div class="col">
    <div class="card">
      <h2>{{ dishObject.name }}</h2>
      <p>{{ dishObject.price }}</p>
      <button class="btn btn-danger" @click="addToCart">+</button>
    </div>
  </div>
</template>
