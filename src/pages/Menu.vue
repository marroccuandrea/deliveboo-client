<script>
import { store } from "../data/store";
import axios from "axios";

import DishCard from "../components/partials/DishCard.vue";
import Cart from "../components/partials/Cart.vue";
import WarningModal from "../components/partials/WarningModal.vue";

export default {
  name: "Menu",

  components: {
    DishCard,
    Cart,
    WarningModal,
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
          if (
            this.store.restaurantId &&
            this.store.restaurantId !== this.restaurant.id
          ) {
            this.showModal = true;
            this.modalMessage =
              "Non puoi aggiungere piatti da un altro ristorante. Svuota il carrello prima di aggiungere piatti da questo ristorante.";
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
      if (
        this.store.restaurantId &&
        this.store.restaurantId !== this.restaurant.id
      ) {
        this.showModal = true;
        this.modalMessage =
          "Non puoi aggiungere piatti da un altro ristorante. Svuota il carrello prima di aggiungere piatti da questo ristorante.";
        this.showClearButton = true; // Mostra il bottone per svuotare il carrello
        return;
      }

      if (!this.store.restaurantId) {
        this.store.restaurantId = this.restaurant.id;
      }

      const itemIndex = this.store.cart.findIndex(
        (item) => item.id === dish.id
      );
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
      localStorage.removeItem("cart");
      localStorage.removeItem("restaurantId");
      this.closeModal(); // Chiude il modale dopo aver svuotato il carrello
    },
    closeModal() {
      this.showModal = false; // Funzione per chiudere il modale
      this.showClearButton = false; // Nasconde il bottone per svuotare il carrello
    },
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

    <div class="row row-cols-1 row-cols-sm-2">
      <div class="col piatti">
        <DishCard
          @callFunction="addToCart"
          v-for="dish in restaurant.dishes"
          :key="dish.id"
          :dishObject="dish"
          class="flex-grow-0"
        />
        <div class="spacer d-none">
          <img src="/public/logo_1_def.png" alt="">
        </div>
      </div>
      <Cart class="cart-fixed"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/partials/variables";
@import "../assets/scss/partials/variables";

.piatti {
  overflow-y: auto;
}

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

@media (max-width: 576px) {
  .cart-fixed {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background-color: white; // o qualsiasi altro colore di sfondo tu voglia
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);

    .piatti .dish-card {
    width: 100%;
    flex: 0 0 100%;
    max-width: 100%;
    .dish-card{
      z-index: 99 !important;
    }
    }

  }
  .spacer {
    display: block !important;
    height: 600px; 
    display: flex !important;
    justify-content: center !important;
    width: 100%;
    align-items: center !important;
    img {
      width: 70%;
      height: 70%;
      object-fit: contain;
      z-index: 0 !important;
      margin-top: -300px;
    }
  }
}

</style>
