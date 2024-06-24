import { reactive, watch } from "vue";

export const store = reactive({
  typeUrl: "http://127.0.0.1:8000/api/types",
  restaurantUrl: "http://127.0.0.1:8000/api/restaurants",
  restaurantBySlug: "http://127.0.0.1:8000/api/restaurant-by-slug/",
  login: "http://127.0.0.1:8000/login",
  register: "http://127.0.0.1:8000/register",
  restaurants: [],
  types: [],
  queryParams: {},
  filterTypes: [],
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  restaurantId: localStorage.getItem('restaurantId') || null,
});

// Watch for changes in cart and update localStorage
watch(
  () => store.cart,
  (newCart) => {
    if (newCart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(newCart));
    } else {
      localStorage.removeItem('cart');
      store.restaurantId = null;
      localStorage.removeItem('restaurantId');
    }
  },
  { deep: true }
);

// Watch for changes in restaurantId and
