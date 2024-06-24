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
      return this.store.cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },
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
      if (this.store.cart.length === 0) {
        this.store.restaurantId = null;
      }
    },
    clearCart() {
      this.store.cart = [];
      this.store.restaurantId = null;
    },
    goToCheckout() {
      // Logica per il checkout
    },
  },
};
</script>

<template>
  <div class="col col-4">
    <div class="cart">
      <h4>Carrello</h4>

      <!-- Lista elementi carrello -->
      <ul class="text-start">
        <li
          v-for="(cartItem, index) in this.store.cart"
          :key="index"
          class="d-flex justify-content-between mb-4"
        >
          <div class="d-flex flex-column">
            <span class="fw-semibold">{{ cartItem.name }}</span>
            <span>€ {{ cartItem.price }} x {{ cartItem.quantity }}</span>
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

            <span @click="removeFromCart(index)" class="delete-box">
              <i class="fa-solid fa-trash fs-5 mx-3"></i>
            </span>
          </div>
        </li>
      </ul>

      <!-- Totale carrello -->
      <div class="total-cart d-flex justify-content-between align-items-center">
        <h4>Totale</h4>
        <span>{{ totalCartPrice }} €</span>
      </div>

      <!-- Pulsanti -->
      <div class="button-container d-flex justify-content-center">
        <button
          type="button"
          class="btn btn-custom-primary"
          @click="goToCheckout"
        >
          Procedi al pagamento
        </button>
        <button
          type="button"
          class="btn btn-custom-secondary"
          @click="clearCart"
        >
          Svuota il carrello
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/scss/partials/variables";

.col {
  flex-shrink: 0;

  .cart {
    padding: 20px;
    border-radius: 20px;
    background-color: white;
    flex-shrink: 0;
    text-align: center;
    position: sticky;
    top: 30px;

    ul {
      border-bottom: 1px solid $color-primary;
    }

    .total-cart {
      padding: 0 40px;
      font-size: 1.5rem;

      h4 {
        color: $color-primary;
      }
    }

    i {
      font-size: 18px;
      cursor: pointer;
      color: $color-primary;

      &:hover {
        color: $color-secondary;
      }
    }

    .button-container {
      .btn-custom-primary,
      .btn-custom-secondary {
        margin: 10px;
        width: auto;
        height: auto;
      }
    }
  }
}
</style>
