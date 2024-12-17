<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue';
import { products } from '@/data.ts'
</script>
<template>
    <h1 class="mb-3">Products</h1>
    <div class="grid grid-cols-3 gap-10">
        <div v-for="product in products" :key="product.id">
            <ProductCard :product="product" />
        </div>
    </div>
</template>