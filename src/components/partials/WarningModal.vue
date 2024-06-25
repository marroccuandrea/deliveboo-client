<script>
export default {
    name: "Modal",
    props: {
        message: {
            type: String,
            required: true,
        },
        visible: {
            type: Boolean,
            default: false,
        },
        showClearButton: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        closeModal() {
            this.$emit("close");
        },
        clearCart() {
            this.$emit("clear-cart");
        },
    },
};
</script>

<template>
    <div class="modal-mask" v-if="visible">
        <div class="modal-wrapper">
            <div class="modal-container">
                <div>
                    <slot>{{ message }}</slot>
                </div>
                <div class="modal-footer d-flex justify-content-evenly">
                    <button class="btn btn-custom-primary w-auto" @click="closeModal">Close</button>
                    <button class="btn btn-custom-secondary w-auto" v-if="showClearButton" @click="clearCart">Clear Cart</button>
                </div>
            </div>
        </div>
    </div>
</template>
    
    
<style lang="scss" scoped>
@import '../../assets//scss/partials/variables';
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .modal-wrapper {
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
    }
    .modal-container {
        background: white;
        border-radius: 8px;
        width: 300px;
        max-width: 100%;
        padding: 20px;
        text-align: center;
    }
    .modal-footer {
        margin-top: 20px;
    }
</style>
