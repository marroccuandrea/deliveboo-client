<script>
export default {
  props: {
    dishObject: Object,
  },

  methods: {
    addToCart() {
      this.$emit("callFunction", this.dishObject);
    },
    formatPrice(price) {
      // Sostituisce il punto con una virgola
      return price.toString().replace(".", ",");
    },
  },
};
</script>

<template>
  <div v-if="dishObject.available" class="dish-card mb-3">
    <div class="img-box d-flex justify-content-center align-items-center">
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
          &euro; {{ formatPrice(dishObject.price) }}
        </span>
      </div>
      <div class="dish-quantity">
        <button
          class="btn btn-custom-primary-outline mx-3 mt-3 z-3"
          @click="addToCart"
        >
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/scss/partials/variables";

.dish-card {
  border-radius: 20px;
  background-color: $color-primary;
  color: white;
  padding: 25px;
  display: flex;

  .img-box {
    max-width: 200px;
    flex-shrink: 0;
    background-color: white;
    border-radius: 20px;
    aspect-ratio: 1/1;

    img {
      height: 90%;
      width: 90%;
      object-fit: cover;
      border-radius: 20px;
    }
  }

  .dish-info {
    margin-left: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .dish-quantity {
      align-self: flex-end;
    }
  }

}
@media (max-width: 768px) and (min-width: 577px) {
  .dish-card {
    flex-direction: column;
    .img-box {
      margin-bottom: 20px;
      img {
        height: 90%;
        width: 90%;
      }
    }
  }
}
</style>
