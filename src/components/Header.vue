<script>
import { store } from "../data/store";
import HeaderCart from "./partials/HeaderCart.vue";
export default {
  components: {
    HeaderCart,
  },
  data() {
    return {
      store,
      cartVisible: false,
    };
  },
  computed: {
    cartItemCount() {
      return this.store.cart.reduce((acc, item) => acc + item.quantity, 0);
    },
  },
  methods: {
    toggleCart() {
      this.cartVisible = !this.cartVisible; // Toggle della visibilità del carrello
    },
  },
};
</script>

<template>
  <header>
    <!-- Text-logo -->
    <div>
      <router-link :to="{ name: 'home' }">
        <img class="logo-text" src="/public/logo_text_def.png" alt="" style="height: 40px; margin-left: 25px;">
      </router-link>
    </div>
    <!-- /Text-logo -->
    <div class="d-flex w-100 justify-content-between">
      <div class="sx d-flex align-items-center">
        <ul class="link">
          <li class="list">
            <router-link :to="{ name: 'home' }">Home</router-link>
          </li>
          <!-- <li>
            <a :href="store.login">Accedi</a>
          </li>
          <li>
            <a :href="store.register">Registrati</a>
          </li> -->
        </ul>
      </div>
      <div class="dx d-flex align-items-center me-5">
        <div class="dropdown">
          <a
            class="btn btn-secondary dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Sei un ristoratore?
          </a>

          <ul class="dropdown-menu" style="">
            <li><a class="dropdown-item" :href="store.login">Accedi</a></li>
            <li>
              <a class="dropdown-item" :href="store.register">Registrati</a>
            </li>
          </ul>
        </div>
        <!-- <form class="d-flex" role="search">
          <button class="btn btn-warning" type="submit">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
          <input
            class="form-control"
            type="search"
            placeholder="Cerca"
            aria-label="Search"
          />
        </form> -->
        <ul class="link">
          <li class="list position-relative">
            <a href="#" @click="toggleCart">
              <i class="fa-solid fa-cart-shopping"></i>
              <span v-if="cartItemCount > 0" class="badge">{{
                cartItemCount
              }}</span>
            </a>
            <transition name="cart-fade">
              <HeaderCart v-show="cartVisible" />
            </transition>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "../assets/scss/partials/variables";
header {
  background-color: $color-primary;
  height: 80px;
  padding: 0 !important;
  display: flex;
  align-items: center;
  .btn {
    border-radius: 5px 0 0 5px;
  }
  .form-control {
    border-radius: 0 5px 5px 0;
  }
  .link {
    margin-bottom: 0;
    display: flex;
    .list {
      padding: 0 15px;
      font-size: 1.7rem;
      list-style: none;
      position: relative;
      a {
        color: white;
        text-decoration: none;
        &:hover {
          color: $color-secondary-light;
        }
        &.active {
          color: $color-secondary-light;
        }
      }
      .badge {
        position: absolute;
        top: -10px;
        right: -5px;
        background-color: red;
        color: white;
        border-radius: 50%;
        padding: 5px 10px;
        font-size: 1rem;
      }
      .cart-fade-enter-active,
      .cart-fade-leave-active {
        transition: ease-out 0.5s;
      }
      .cart-fade-enter, .cart-fade-leave-to /* .cart-fade-leave-active in <2.1.8 */ {
        opacity: 0;
      }
    }
  }
  .cart-dropdown {
    display: block;
  }
  .dropdown-toggle {
    border-radius: 5px;
    font-size: 1.2rem;
    background-color: $color-secondary;
    border: none;
  }
}
</style>
