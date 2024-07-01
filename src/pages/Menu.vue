<script>
import { store } from "../data/store";
import axios from "axios";

import DishCard from "../components/partials/DishCard.vue";
import Cart from "../components/partials/Cart.vue";
import WarningModal from "../components/partials/WarningModal.vue";
import Loader from "@/components/partials/Loader.vue";

export default {
  name: "Menu",

  components: {
    DishCard,
    Cart,
    WarningModal,
    Loader,
  },

  data() {
    return {
      store,
      restaurant: {},
      cart: [],
      isLoaded: false,

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
          this.isLoaded = true;

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
  <div v-if="isLoaded">
    <div class="img-box">
      <img :src="restaurant.image" :alt="restaurant.business_name" />
    </div>
    <div class="container">
      <div class="restaurant-info text-center">
        <h1>{{ restaurant.business_name }}</h1>
        <div class="sub-info">
          <div class="info">
            <i class="fa-solid fa-location-dot icon"></i>
            {{ restaurant.address }}
          </div>
          <div class="info">
            <i class="fa-solid fa-envelope icon"></i> {{ restaurant.email }}
          </div>
          <div class="info">
            <i class="fa-solid fa-phone icon"></i> {{ restaurant.phone_number }}
          </div>
        </div>
      </div>

      <WarningModal
        :message="modalMessage"
        :visible="showModal"
        :showClearButton="showClearButton"
        @close="closeModal"
        @clear-cart="clearCart"
      />

      <div class="row row-cols-1 row-cols-sm-2">
        <div class="col dishes">
          <DishCard
            @callFunction="addToCart"
            v-for="dish in restaurant.dishes"
            :key="dish.id"
            :dishObject="dish"
            class="flex-grow-0"
          />
          <div class="spacer d-none">
            <img src="/public/logo_1_def.png" alt="" />
          </div>
        </div>
        <Cart class="cart-fixed" />
      </div>
    </div>
  </div>
  <Loader class="loader-menu" v-else />
</template>

<style lang="scss" scoped>
@import "../assets/scss/partials/variables";
@import "../assets/scss/partials/variables";

.loader-menu {
  margin-top: 200px;
}

.dishes {
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
  box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.2);

  .sub-info {
    margin-top: 20px;
    padding-top: 50px;
    border-top: 2px solid white;
    display: flex;
    justify-content: space-evenly;
    font-size: 1.2rem;
    .info {
      width: 100%;
    }
  }
}
@media (max-width: 768px) {
  .sub-info {
    display: flex;
    // flex-direction: column;
    .info {
      display: flex;
      flex-direction: column;
      .icon {
        padding-bottom: 5px;
      }
    }
  }
}
@media (max-width: 576px) {
  .img-box {
    height: 200px;
    margin-top: -50px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .restaurant-info {
    height: 250px;
    top: -80px;
    padding: 10px;

    h1 {
      font-size: 1.3rem;
    }
    .sub-info {
      display: flex;
      flex-direction: column;
      font-size: 1rem;
      padding-top: 10px !important;
      .icon {
        padding-bottom: 5px;
        padding-top: 8px;
      }
    }
  }

  .cart-fixed {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background-color: white; // o qualsiasi altro colore di sfondo tu voglia
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);

    .dishes .dish-card {
      width: 100%;
      flex: 0 0 100%;
      max-width: 100%;
      .dish-card {
        z-index: 99 !important;
      }
    }
  }
  .spacer {
    display: block !important;
    height: 250px;
    display: flex !important;
    justify-content: center !important;
    width: 100%;
    align-items: center !important;

    img {
      width: 70%;
      height: 70%;
      object-fit: contain;
      z-index: 0 !important;
      margin-top: -20px;
    }
  }
}
</style>
