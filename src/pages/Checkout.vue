<script>
import axios from "axios";

export default {
  name: "Checkout",

  data() {
    return {
      clientToken: "",
    };
  },

  methods: {
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
    this.getClientToken();
  },
};
</script>

<template>
  <h2>Checkout</h2>
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
</template>

<style lang="scss" scoped></style>
