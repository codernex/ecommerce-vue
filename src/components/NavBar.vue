<script lang="ts">
import logo from '@/assets/images/logo-hexagon.svg'
import { RouterLink } from 'vue-router';
export default {
    name: "Navbar",
    data() {
        return {
            logo
        }
    }
}
</script>

<template>
    <nav class="nav-bar">
        <RouterLink :to="{name:'products'}" class="products-link">
            <div class="logo-wrap">
                <img :src="logo" />
            </div>
        </RouterLink>
        <RouterLink to="/cart" class="cart-link" >
            <button>Shopping Cart</button>
        </RouterLink>
    </nav>
</template>