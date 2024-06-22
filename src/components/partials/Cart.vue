<template>
  <div class="col col-4">
    <div class="cart">
      <h4>Carrello</h4>
      <ul>
        <li
          v-for="(cartItem, index) in this.store.cart"
          :key="index"
          class="d-flex justify-content-between mb-4"
        >
          <div class="d-flex flex-column">
            <span>{{ cartItem.name }}</span>
            <span class="price">€ {{ cartItem.price }} x {{ cartItem.quantity }}</span>
          </div>

          <div class="d-flex align-items-center">
            <div class="d-flex gap-2 align-items-center">
              <i
                class="fa-solid fa-minus"
                @click="updateCartItem(index, false)"
              ></i>
              <span>{{ cartItem.quantity }}</span>
              <i
                class="fa-solid fa-plus"
                @click="updateCartItem(index, true)"
              ></i>
            </div>

            <span @click="removeFromCart(index)" class="remove-item">
              <i class="fa-solid fa-trash fs-5 ms-4 me-2"></i>
            </span>
          </div>
        </li>
      </ul>

      <hr class="mx-4" />

      <div class="d-flex justify-content-between align-items-center mx-4">
        <h2 class="fs-4 ms-2">Totale</h2>

        <span class="fs-3 me-1">{{ totalCartPrice }} €</span>
      </div>

      <div class="d-flex justify-content-center">
        <button
          type="button"
          class="btn button-cart"
          @click="goToCheckout(restaurant.id)"
        >
          Procedi all'ordine
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../../data/store";

export default {
  data() {
    return {
      store,
    };
  },
  computed: {
    totalCartPrice() {
      return this.store.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    }
  },
  methods: {
    updateCartItem(index, increment) {
      if (increment) {
        this.store.cart[index].quantity++;
      } else if (this.store.cart[index].quantity > 1) {
        this.store.cart[index].quantity--;
      }
    },
    removeFromCart(index) {
      this.store.cart.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/partials/variables";

.col {
  position: sticky;
  top: 30px;
  width: 300px;
  flex-shrink: 0;

  .cart {
    padding: 20px;
    border-radius: 20px;
    background-color: white;
    flex-shrink: 0;
    text-align: center;

    .price {
      font-size: 14px;
    }

    .fa-minus,
    .fa-plus {
      font-size: 18px;
      cursor: pointer;
      color: $color-primary;
      transition: 0.1s;

      &:hover {
        transform: scale(120%);
      }
    }

    .remove-item i {
      cursor: pointer;
      color: $color-primary;
      transition: 0.1s;

      &:hover {
        transform: scale(120%);
      }
    }

    .button-cart {
      margin-top: 10px;
      padding: 10px 20px;

      text-transform: uppercase;
      font-size: bold;
      font-weight: 16px;

      background-color: $color-primary;
      color: white;

      &:hover {
        background-color: transparent;
        color: $color-primary;
        border: 1px solid $color-primary;
      }
    }
  }
}
</style>
