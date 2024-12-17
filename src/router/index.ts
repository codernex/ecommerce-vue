import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/products",
    },
    {
      path: "/cart",
      component: () => import("@/pages/ShoppingCartPage.vue"),
    },
    {
      path: "/products",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/pages/ProductsPage.vue"),
      name: "products",
    },
    {
      path: "/products/:productId",
      name: "product-details",
      component: () => import("@/pages/ProductDetailPage.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("@/pages/NotFoundPage.vue"),
    },
  ],
});

export default router;
