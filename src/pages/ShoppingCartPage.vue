<script setup lang="ts">
import { cartItems } from '@/data';
</script>
<template>
    <div class="flex justify-between my-6 border-b border-black items-center">
        <h1 class="border-none mb-0">Shopping cart</h1>
        <button @click="$router.back()" class="py-2 h-10">Go Back</button>
    </div>


    <div v-if="cartItems.length > 0">
        <div class="product-container" v-for="product in cartItems" :key="product.id">
            <img :src="product.imageName" class="product-image" alt="">
            <div class="details-wrap">
                <h3>{{ product.name }}</h3>
                <p>
                    {{ product.price }}
                </p>
            </div>
            <button class="remove-button">Remove from Cart</button>
        </div>
        <button class="mt-4 checkout-button">Proceed to Checkout</button>
    </div>
    <div v-else>
        <p>Cart is empty</p>
    </div>
</template>