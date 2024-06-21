<script>
import { store } from "../../data/store";
export default {

  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="col mt-4 cart-box">
                    <div class="cart">
                        <h2 class="text-center fs-2 mb-5 pt-4 text-uppercase">Carrello</h2>
                        <ul>
                            <li v-for="(cartItem, index) in this.store.cart" :key="index" class="d-flex justify-content-between mb-4">
                                <div class="d-flex flex-column">
                                    <span>{{ cartItem.name }}</span>
                                    <span class="price">€ {{ cartItem.price }}</span>
                                </div>

                                <div class="d-flex align-items-center">
                                   <!--numero, piu e meno-->
                                    <div class="d-flex gap-2 align-items-center" >
                                    <i class="fa-solid fa-minus" @click="updateCartItem(index, false)"></i>
                                    <span>'quantity'</span>
                                    <i class="fa-solid fa-plus" @click="updateCartItem(index, true)"></i>
                                    </div>

                                    <span @click="removeFromCart(index)" class="remove-item">
                                        <i class="fa-solid fa-trash fs-5 ms-4 me-2"></i>
                                    </span>
                                </div>
                            </li>
                        </ul>
                        
                        <hr class="mx-4">

                        <div class="d-flex justify-content-between align-items-center mx-4">
                            <h2 class="fs-4 ms-2">Totale</h2>

                            <span class="fs-3 me-1">'total_price' €</span>
                        </div>

                        <div class="d-flex justify-content-center">
                            <button type="button" class="btn button-cart" @click="goToCheckout(restaurant.id)">Procedi all'ordine</button>
                        </div>
                    
                    </div>
                </div>
</template>

<style lang="scss" scoped>

.cart-box .cart {
    padding-bottom: 20px;
    background-color: #FEFAF1;

    .price {
        font-size: 14px;
        color: #A0A0A0;
    }

    .fa-minus, .fa-plus {
        font-size: 18px;
        cursor: pointer;
        color:#ebb45b;
        transition: 0.1s;

        &:hover {
            transform: scale(120%);
        }
    }

    .remove-item i {
        cursor: pointer;
        color:#ebb45b;
        transition: 0.1s;

        &:hover {
            transform: scale(120%);
        }
    }

    .button-cart {
        margin-top: 10px;
        padding: 10px 20px;
    
        text-transform: uppercase;
        font-size: bold;
        font-weight: 16px;
        
        background-color: rgba(246, 89, 0, 1);
        color: white;
    
        &:hover {
            background-color: transparent;
            color: rgba(246, 89, 0, 1);
            border: 1px solid rgba(246, 89, 0, 1);
        }
    }

}
  
</style>