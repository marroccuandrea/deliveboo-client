<script>
import { store } from "../../data/store";
import HeaderCart from "./HeaderCart.vue";
export default {
  components: {
    HeaderCart,
  },
  data() {
    return {
      store,
      orderDate: new Date().toLocaleDateString("it-IT"),
      isCartVisible: true,
    };
  },
  computed: {
    cartItemCount() {
      return this.store.cart.reduce((acc, item) => acc + item.quantity, 0);
    },
    totalCartPrice() {
      return this.store.cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },
  },
  methods: {
    formatPrice(price) {
      // Sostituisce il punto con una virgola
      return price.toString().replace(".", ",");
    },
    updateCartItem(index, increment) {
      if (increment) {
        this.store.cart[index].quantity++;
      } else if (this.store.cart[index].quantity > 1) {
        this.store.cart[index].quantity--;
      } else {
        this.store.cart.splice(index, 1);
        if (this.store.cart.length === 0) {
          this.clearCart();
        }
      }
    },
    removeFromCart(index) {
      this.store.cart.splice(index, 1);
      if (this.store.cart.length === 0) {
        this.clearCart();
      }
    },
    clearCart() {
      this.store.cart = [];
      this.store.restaurantId = null;
      localStorage.removeItem("cart");
      localStorage.removeItem("restaurantId");
    },
    goToCheckout() {
      // Inserire rotta checkout
    },
    toggleCart() {
      this.isCartVisible = !this.isCartVisible; // Metodo per togglare la visibilità del carrello
    },
  },
};
</script>

<template>
  <div class="col col-5">
    <div id="desk-cart" class="cart">
      <div>
        <h4>Carrello</h4>
      </div>

      <!-- Lista elementi carrello -->
      <ul class="text-start">
        <li
          v-for="(cartItem, index) in this.store.cart"
          :key="index"
          class="d-flex justify-content-between mb-4"
        >
          <div class="d-flex flex-column">
            <span class="fw-semibold">{{ cartItem.name }}</span>
            <span
              >€ {{ formatPrice(cartItem.price) }} x
              {{ cartItem.quantity }}</span
            >
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
        <span>{{ formatPrice(totalCartPrice.toFixed(2)) }} €</span>
      </div>

      <!-- Pulsanti -->
      <div class="button-container d-flex justify-content-center">
        <router-link :to="{ name: 'checkout' }" class="btn btn-custom-primary"
          >Procedi al pagamento</router-link
        >
        <button
          type="button"
          class="btn btn-custom-secondary"
          @click="clearCart"
        >
          Svuota il carrello
        </button>
      </div>
    </div>

    <!-- TOGGLE CARRELLO  -->
    <div class="d-flex justify-content-between align-items-center">
      <button @click="toggleCart" class="btn btn-toggle-cart">
        <i
          :class="
            isCartVisible
              ? 'fa-solid fa-chevron-down'
              : 'fa-solid fa-chevron-up'
          "
        ></i>
        Carrello
      </button>
      <span v-if="cartItemCount > 0" class="badge">{{ cartItemCount }}</span>
    </div>

    <div id="mobile-cart" v-if="isCartVisible" class="cart">
      <!-- Lista elementi carrello -->
      <ul class="text-start">
        <li
          v-for="(cartItem, index) in this.store.cart"
          :key="index"
          class="d-flex justify-content-between mb-4"
        >
          <div class="d-flex flex-column">
            <span class="fw-semibold">{{ cartItem.name }}</span>
            <span
              >€ {{ formatPrice(cartItem.price) }} x
              {{ cartItem.quantity }}</span
            >
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
        <span>{{ formatPrice(totalCartPrice.toFixed(2)) }} €</span>
      </div>

      <!-- Pulsanti -->
      <div class="button-container d-flex justify-content-center">
        <router-link :to="{ name: 'checkout' }" class="btn btn-custom-primary"
          >Procedi al pagamento</router-link
        >
        <button
          type="button"
          class="btn btn-custom-secondary"
          @click="clearCart"
        >
          Svuota il carrello
        </button>
      </div>
    </div>

    <!-- TOGGLE CARRELLO  -->
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/scss/partials/variables";

.col {
  #mobile-cart {
    display: none;
  }
  flex-shrink: 0;
  .btn-toggle-cart {
    display: none;
  }

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
        width: 50%;
        height: auto;
      }
    }
  }
}

@media (max-width: 768px) {
  .col {
    .cart {
      padding: 10px;

      .total-cart {
        padding: 0 20px;
        font-size: 1.2rem;
      }

      .button-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        .btn-custom-primary {
          width: 95%;
        }
        .btn-custom-secondary {
          width: 95%;
        }
      }
    }
  }
}
@media (max-width: 576px) {
  .col {
    .badge {
      background-color: red;
      color: white;
      border-radius: 50%;
      padding: 5px 8px;
      font-size: 1rem;
    }
    .btn-toggle-cart {
      display: block;
      background-color: $color-primary;
      padding: 3px 8px;
      margin-top: 7px;
      color: white;
    }
    #mobile-cart {
      display: block;
    }
    #desk-cart {
      display: none;
    }
  }
}
</style>
