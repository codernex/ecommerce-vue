<script lang="ts">
import { products } from '@/data'
import NotFoundPage from './NotFoundPage.vue';
export default {
    data() {
        return {
            product: products.find(p => p.id === this.$route.params.productId)
        }
    },
    components: {
        NotFoundPage
    }
}

</script>
<template>
    <div class="flex justify-end my-6">
        <button @click="$router.back()" class="py-2">Go Back</button>
    </div>
    <div v-if="product">
        <div class="img-wrap">
            <img :src="product?.imageName" :alt="product?.name">
        </div>
        <div class="product-details">
            <h1>
                {{ product?.name }}
            </h1>
            <h3 class="price">
                {{ product?.price }}
            </h3>
            <button class="add-to-cart">Add to cart</button>
        </div>
    </div>
    <div v-else>
        <NotFoundPage />
    </div>
</template>