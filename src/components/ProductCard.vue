<script lang="ts" setup>
import { products } from '@/data'

type Product = typeof products[number]
const { product } = defineProps<{ product: Product }>()
</script>
<template>
    <div class="flex flex-col items-center shadow-md p-4 rounded-md gap-y-2">
        <img :src="product.imageName" />
        <h3 class="product-name">{{ product.name }}</h3>
        <p class="product-price">{{ product.price }}</p>
        <button @click="() => $router.push(`/products/${product.id}`)">View</button>
    </div>
</template>