<script>
import { store } from "../data/store";
import axios from "axios";

import DishCard from "../components/partials/DishCard.vue";
import Cart from "../components/partials/Cart.vue";
import WarningModal from '../components/partials/WarningModal.vue';

export default {
  name: "Menu",

  components: {
    DishCard,
    Cart,
    WarningModal
  },

  data() {
    return {
      store,
      restaurant: {},
      cart: [],

      showModal: false, // Stato per visualizzazione del modale
      modalTitle: "", // Titolo del modale
      modalMessage: "", // Messaggio del modale
      showClearButton: false, // Stato per visualizzare il bottone per svuotare il carrello
    };
  },
  props: {
    slug: String,
  },
  methods: {
    getApi() {
      axios
        .get(store.restaurantBySlug + this.slug)
        .then((result) => {
          this.restaurant = result.data.restaurant;
          console.log(this.restaurant);

          // Controlla se il ristorante corrente corrisponde a quello salvato in localStorage
          if (this.store.restaurantId && this.store.restaurantId !== this.restaurant.id) {
            this.showModal = true;
            this.modalMessage = "Non puoi aggiungere piatti da un altro ristorante. Svuota il carrello prima di aggiungere piatti da questo ristorante.";
            this.showClearButton = true; // Mostra il bottone per svuotare il carrello
          } else if (!this.store.restaurantId && this.store.cart.length > 0) {
            // Se il carrello non è vuoto ma non c'è restaurantId, imposta l'ID del ristorante corrente
            this.store.restaurantId = this.restaurant.id;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addToCart(dish) {
      if (this.store.restaurantId && this.store.restaurantId !== this.restaurant.id) {
        this.showModal = true;
        this.modalMessage = "Non puoi aggiungere piatti da un altro ristorante. Svuota il carrello prima di aggiungere piatti da questo ristorante.";
        this.showClearButton = true; // Mostra il bottone per svuotare il carrello
        return;
      }

      if (!this.store.restaurantId) {
        this.store.restaurantId = this.restaurant.id;
      }

      const itemIndex = this.store.cart.findIndex(item => item.id === dish.id);
      if (itemIndex !== -1) {
        this.store.cart[itemIndex].quantity++;
      } else {
        dish.quantity = 1;
        this.store.cart.push(dish);
      }
      console.log(this.store.cart);
    },
    clearCart() {
      this.store.cart = [];
      this.store.restaurantId = null;
      localStorage.removeItem('cart');
      localStorage.removeItem('restaurantId');
      this.closeModal(); // Chiude il modale dopo aver svuotato il carrello
    },
    closeModal() {
      this.showModal = false; // Funzione per chiudere il modale
      this.showClearButton = false; // Nasconde il bottone per svuotare il carrello
    }
  },
  mounted() {
    this.getApi();
  },
};
</script>




<template>
  <div class="img-box">
    <img :src="restaurant.image" :alt="restaurant.business_name" />
  </div>
  <div class="container">
    <div class="restaurant-info">
      <h3>{{ restaurant.business_name }}</h3>
      <p>{{ restaurant.address }}</p>
      <p>{{ restaurant.phone_number }}</p>
      <p>{{ restaurant.email }}</p>
    </div>

    <WarningModal 
      :message="modalMessage"
      :visible="showModal"
      :showClearButton="showClearButton"
      @close="closeModal"
      @clear-cart="clearCart"
    />

    <div class="row justify-content-between">
      <div class="col col-7">
        <DishCard
          @callFunction="addToCart"
          v-for="dish in restaurant.dishes"
          :key="dish.id"
          :dishObject="dish"
          class="flex-grow-0"
        />
      </div>
      <Cart />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/partials/variables";

.img-box {
  height: 500px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.restaurant-info {
  background-color: $color-secondary;
  color: white;
  border-radius: 20px;
  height: 300px;
  padding: 40px;
  position: relative;
  top: -150px;
}
</style>
