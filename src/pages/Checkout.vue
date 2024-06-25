<script>
import axios from "axios";
import { store } from "@/data/store";

export default {
  name: "Checkout",

  data() {
    return {
      clientToken: "",

      store,

      name: "",
      surname: "",
      email: "",
      phone_number: "",
      address: "",
      note: "",

      errors: {
        name: [],
        surname: [],
        email: [],
        message: [],
      },
    };
  },

  methods: {
    sendFormData() {
      const formData = {
        name: this.name,
        surname: this.surname,
        email: this.email,
        phone_number: this.phone_number,
        address: this.address,
        note: this.note,
        cart: this.store.cart,
      };

      console.log(formData.cart);

      axios
        .post(this.store.formDataUrl, formData)
        .then((result) => {
          console.log(result.data.success);
          console.log(result.data.order_data);
          if (result.data.success) {
            this.getClientToken();
          }
          console.log(result.data.success);
          console.log(result.data.order_data);
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
    getClientToken() {
      axios
        .get("http://127.0.0.1:8000/api/get-client-token")
        .then((result) => {
          this.clientToken = result.data.clientToken;
          this.createDropinUi(this.clientToken);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    createDropinUi(token) {
      const form = document.getElementById("payment-form");

      braintree.dropin.create(
        {
          authorization: token,
          container: "#dropin-container",
        },
        (error, dropinInstance) => {
          if (error) console.error(error);

          form.addEventListener("submit", (event) => {
            event.preventDefault();

            dropinInstance.requestPaymentMethod((error, payload) => {
              if (error) console.error(error);
              document.getElementById("nonce").value = payload.nonce;
              form.submit();
            });
          });
        }
      );
    },
  },
  mounted() {
    this.formData = {};
  },
};
</script>

<template>
  <div class="container">
    <div class="row row-cols-2 justify-content-between my-4">
      <!-- Form dati utente -->
      <div>
        <form class="row g-3" @submit.prevent="sendFormData()">
          <div class="col-md-6">
            <label for="name" class="form-label">Nome</label>
            <input type="text" class="form-control" id="name" v-model="name" />
          </div>

          <div class="col-md-6">
            <label for="surname" class="form-label">Cognome</label>
            <input
              type="text"
              class="form-control"
              id="surname"
              v-model="surname"
            />
          </div>

          <div class="col-md-6">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="email"
            />
          </div>

          <div class="col-md-6">
            <label for="phone_number" class="form-label"
              >Numero di telefono</label
            >
            <input
              type="text"
              class="form-control"
              id="phone_number"
              v-model="phone_number"
            />
          </div>

          <div class="col-12">
            <label for="address" class="form-label">Indirizzo</label>
            <input
              type="text"
              class="form-control"
              id="address"
              v-model="address"
            />
          </div>
          <div class="col-12">
            <label for="note" class="form-label"
              >Aggiungi eventuali note per l'ordine:</label
            >
            <textarea
              v-model="note"
              id="note"
              rows="6"
              class="form-control"
            ></textarea>
          </div>

          <div class="col-12">
            <button type="submit" class="btn btn-primary">Conferma dati</button>
          </div>
        </form>
      </div>
      <!-- /Form dati utente -->

      <!-- Form pagamento -->
      <div>
        <form
          id="payment-form"
          action="http://127.0.0.1:8000/api/payment-request"
          method="post"
        >
          <!-- Putting the empty container you plan to pass to
      'braintree.dropin.create' inside a form will make layout and flow
      easier to manage -->
          <div id="dropin-container"></div>
          <input type="submit" />
          <input type="hidden" id="nonce" name="payment_method_nonce" />
        </form>
      </div>
      <!-- /Form pagamento -->
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
