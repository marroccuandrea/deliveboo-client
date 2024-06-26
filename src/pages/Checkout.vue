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

      paymentFormEnabled: false,

      total_order: 0,
      order_id : 0,
      isValid: true,
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

      console.log(formData);

      axios
        .post(this.store.formDataUrl, formData)
        .then((result) => {
          if (result.data.success) {
            this.paymentFormEnabled = true;
            console.log(result.data.success);
            console.log(result.data.order_data);
            this.total_order = result.data.order_data.total_price;
          }
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

    // validateForm(){
    //   const btnPay = document.getElementById('btn-pay');
    //   // nome
    //   const name = document.getElementById('name');
    //   const errorName = document.getElementById('error-name');
    //   // cognome
    //   const surname = document.getElementById('surname');
    //   const errorSurname = document.getElementById('error-surname');
    //   // email
    //   const email = document.getElementById('email');
    //   const errorEmail = document.getElementById('error-email');
    //   // telefono
    //   const phoneNumber = document.getElementById('phone_number');
    //   const errorPhoneNumber = document.getElementById('error-phone_number');
    //   // indirizzo
    //   const address = document.getElementById('address');
    //   const errorAddress = document.getElementById('error-address');

    //   btnPay.addEventListener('click', function(event){
    //     event.preventDefault();
    //     console.log('prova');
    //     errorName.innerHTML = ''; 
    //     name.classList.remove('is-invalid');
    //     errorSurname.innerHTML = ''; 
    //     surname.classList.remove('is-invalid');
    //     errorEmail.innerHTML = ''; 
    //     email.classList.remove('is-invalid');
    //     errorPhoneNumber.innerHTML = ''; 
    //     phoneNumber.classList.remove('is-invalid');
    //     errorAddress.innerHTML = ''; 
    //     address.classList.remove('is-invalid');

    //     // controlli nome
    //     if (name.value.trim().length === 0) {
    //         errorName.innerHTML = 'Il campo Nome è obbligatorio';
    //         name.classList.add('is-invalid');
    //         this.isValid = false;
    //     } else if (name.value.trim().length < 4) {
    //         errorName.innerHTML = 'Il campo Nome Utente deve avere almeno 4 caratteri';
    //         name.classList.add('is-invalid');
    //         this.isValid = false;
    //     } else if (name.value.trim().length > 50) {
    //         errorName.innerHTML = 'Il campo Nome Utente non deve avere più di 50 caratteri';
    //         name.classList.add('is-invalid');
    //         this.isValid = false;
    //     }

    //     // controlli cognome
    //     if (surname.value.trim().length === 0) {
    //         errorSurname.innerHTML = 'Il campo Cognome è obbligatorio';
    //         surname.classList.add('is-invalid');
    //         this.isValid = false;
    //     } else if (surname.value.trim().length < 4) {
    //         errorSurname.innerHTML = 'Il campo Cognome deve avere almeno 4 caratteri';
    //         surname.classList.add('is-invalid');
    //         this.isValid = false;
    //     } else if (surname.value.trim().length > 50) {
    //         errorSurname.innerHTML = 'Il campo Cognome non deve avere più di 50 caratteri';
    //         surname.classList.add('is-invalid');
    //         this.isValid = false;
    //     }

    //     // controlli email
    //     let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //     if (email.value.trim().length === 0) {
    //         errorEmail.innerHTML = 'Il campo Email è obbligatorio';
    //         email.classList.add('is-invalid');
    //         this.isValid = false;
    //     } else if (!emailPattern.test(email.value)) {
    //         errorEmail.innerHTML = 'Inserisci un indirizzo email valido';
    //         email.classList.add('is-invalid');
    //         this.isValid = false;
    //     } else if (email.value.trim().length > 50) {
    //         errorEmail.innerHTML = 'Il campo Email non deve essere più lungo di 50 caratteri';
    //         email.classList.add('is-invalid');
    //         this.isValid = false;
    //     }

    //     // controlli telefono
    //     if (phoneNumber.value.trim().length === 0) {
    //         errorPhoneNumber.innerHTML = 'Il campo Telefono è obbligatorio';
    //         phoneNumber.classList.add('is-invalid');
    //         this.isValid = false;
    //     } else if (!/^\d+$/.test(phoneNumber.value)) {
    //         errorPhoneNumber.innerHTML = 'Il campo Telefono può contenere solo numeri';
    //         phoneNumber.classList.add('is-invalid');
    //         this.isValid = false;
    //     } else if(phoneNumber.value.trim().length < 11 || phoneNumber.value.trim().length > 11){
    //       errorPhoneNumber.innerHTML = 'Il campo Telefono deve avere 11 numeri';
    //       phoneNumber.classList.add('is-invalid');
    //         this.isValid = false;
    //     }
        
        
            
    //     // controlli indirizzo
    //     if (address.value.trim().length === 0) {
    //         errorAddress.innerHTML = 'Il campo Indirizzo è obbligatorio';
    //         address.classList.add('is-invalid');
    //         this.isValid = false;
    //     } else if (address.value.trim().length < 8) {
    //         errorAddress.innerHTML = 'Il campo Indirizzo deve avere almeno 8 caratteri';
    //         address.classList.add('is-invalid');
    //         this.isValid = false;
    //     } else if (address.value.trim().length > 100) {
    //         errorAddress.innerHTML = 'Il campo Indirizzo non deve avere più di 100 caratteri';
    //         address.classList.add('is-invalid');
    //         this.isValid = false;
    //     }
            
    //   });
    // },

    
    
  },
  mounted() {
    // this.validateForm();
    this.formData = {};
    this.paymentFormEnabled = false;
    this.getClientToken();
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
            <small id="error-name" class="text-danger fw-semibold"></small>
          </div>
          
          <div class="col-md-6">
            <label for="surname" class="form-label">Cognome</label>
            <input
            type="text"
            class="form-control"
            id="surname"
            v-model="surname"
            />
            <small id="error-surname" class="text-danger fw-semibold"></small>
          </div>
          
          <div class="col-md-6">
            <label for="email" class="form-label">Email</label>
            <input
            type="email"
            class="form-control"
              id="email"
              v-model="email"
              />
              <small id="error-email" class="text-danger fw-semibold"></small>
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
              <small id="error-phone_number" class="text-danger fw-semibold"></small>
            </div>
            
            <div class="col-12">
            <label for="c" class="form-label">Indirizzo</label>
            <input
              type="text"
              class="form-control"
              id="address"
              v-model="address"
              />
              <small id="error-address" class="text-danger fw-semibold"></small>
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
            <button type="submit" id="btn-pay" class="btn btn-custom-primary w-auto">
              Vai al pagamento
            </button>
          </div>
        </form>
      </div>
      <!-- /Form dati utente -->

      <!-- Form pagamento -->
      <div v-show="paymentFormEnabled">
        <form
          id="payment-form"
          action="http://127.0.0.1:8000/api/payment-request"
          method="post"
        >
          <div id="dropin-container" class="form-control"></div>
          <input type="submit" class="btn btn-custom-primary w-auto my-3" />
          <input type="hidden" id="nonce" name="payment_method_nonce" />
          <input
            type="hidden"
            id="total_order"
            name="total_order"
            v-model="total_order"
          />
        </form>
      </div>
      <!-- /Form pagamento -->
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
