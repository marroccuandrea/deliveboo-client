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
    <div class="container d-flex justify-content-between align-items-center">
      <!-- Home logo -->
      <router-link :to="{ name: 'home' }">
        <div class="img-box">
          <img class="logo-text" src="/public/home.png" alt="" />
        </div>
      </router-link>
      <!-- /Home logo -->

      <!-- Navbar -->
      <nav class="d-none d-sm-flex justify-content-between align-items-center">
        <!-- Restaurant dropdown -->
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

          <ul class="dropdown-menu">
            <li><a class="dropdown-item" :href="store.login">Accedi</a></li>
            <li>
              <a class="dropdown-item" :href="store.register">Registrati</a>
            </li>
          </ul>
        </div>
        <!-- /Restaurant dropdown -->
        <!-- Cart -->
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
        <!-- /Cart -->
      </nav>
      <!-- Navbar -->

      <!-- Hamburger menu -->
      <nav class="navbar d-sm-none">
        <button
          class="navbar-toggler navbar-toggler-custom"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-top"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <h4>Sei un ristoratore?</h4>
            <ul class="navbar-nav justify-content-end flex-grow-1 px-3">
              <li class="nav-item d-flex align-items-center">
                <i class="fa-solid fa-user-shield"></i>
                <a class="nav-link" :href="store.login">Accedi</a>
              </li>
              <li class="nav-item d-flex align-items-center">
                <i class="fa-solid fa-user-pen"></i>
                <a class="nav-link" :href="store.register">Registrati</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <!-- /Hamburger menu -->
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

  .img-box {
    width: 200px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: relative;
      left: -28px;
    }
  }

  .navbar-toggler-custom {
    color: white;
    border-color: white;

    .navbar-toggler-icon {
      filter: brightness(0) invert(1);
    }
  }

  .nav-item {
    i {
      color: $color-primary;
      padding-right: 10px;
    }
  }

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
@media (max-width: 576px) {
  header {
    margin-bottom: 50px;
  }
}
</style>
