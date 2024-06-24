<script>
import { store } from "../data/store";
export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <header>
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
      <div class="dx d-flex align-items-center me-3">
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
          <li class="list">
            <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
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
    }
  }
  .dropdown-toggle {
    border-radius: 5px;
    font-size: 1.2rem;
    background-color: $color-secondary;
    border: none;
  }
}
</style>
