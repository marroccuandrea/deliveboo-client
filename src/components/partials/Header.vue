<script>
export default {
  setup() {
    return {};
  },
};
</script>

<template>
  <header>
    <div class="d-flex w-100 justify-content-between">
      <div class="sx d-flex align-items-center">
        <ul>
          <li>
            <router-link :to="{ name: 'home' }">Home</router-link>
          </li>
          <li>
            <a href="#">Accedi</a>
          </li>
        </ul>
      </div>
      <div class="dx d-flex align-items-center me-3">
        <form class="d-flex" role="search">
          <button class="btn btn-warning" type="submit">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
          <input
            class="form-control"
            type="search"
            placeholder="Cerca"
            aria-label="Search"
          />
        </form>
        <ul>
          <li>
            <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: #2dc4b6;
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

  ul {
    margin-bottom: 0;
    display: flex;
    li {
      padding: 0 15px;
      list-style: none;
      a {
        color: white;
        text-decoration: none;
        &:hover {
          color: orange;
        }
        &.active {
          color: orange;
        }
      }
    }
  }
}
</style>
