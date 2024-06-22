<script>
export default {
  props: {
    dishObject: Object,
  },

  methods: {
    addToCart() {
      this.$emit("callFunction", this.dishObject);
    },
  },
};
</script>

<template>
  <div class="dish-card mb-3">
    <div class="img-box">
      <img :src="dishObject.image" :alt="dishObject.name" />
    </div>

    <div class="dish-info">
      <h3>{{ dishObject.name }}</h3>
      <p>
        <span class="fst-italic">Ingredienti: </span
        >{{ dishObject.description }}
      </p>
      <div>
        <span class="badge badge-custom-secondary">
          &euro; {{ dishObject.price }}
        </span>
      </div>
      <div class="dish-quantity">
        <button class="btn btn-custom-primary-outline mx-3" @click="addToCart">
          <i class="fa-solid fa-minus"></i>
        </button>
        Quantità
        <button class="btn btn-custom-primary-outline mx-3" @click="addToCart">
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/scss/partials/variables";

.dish-card {
  height: 250px;
  border-radius: 20px;
  background-color: $color-primary;
  color: white;
  padding: 25px;
  display: flex;

  .img-box {
    width: 200px;
    flex-shrink: 0;
    background-color: white;
    overflow: hidden;
    border-radius: 20px;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 20px;
    }
  }

  .dish-info {
    margin-left: 40px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .dish-quantity {
      align-self: flex-end;
    }
  }
}
</style>
