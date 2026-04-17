<template>
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">

        <ProductCard v-if="!isLoading" v-for="product in featuredProducts" :key="product.id" :name="product.title"
            :category="product.category" :image="product.image" :price="product.price" :rating="product.rating.rate"
            :reviews="product.rating.count" :id="product.id"/>

    </div>
</template>

<script setup lang="ts">
import ProductCard from '@/shared/ui/ProductCard.vue';
import { useProducts } from '@/utills/useProducts';
import { computed } from 'vue';

const { data: products, isLoading } = useProducts();

const featuredProducts = computed(() => {
    if (!products.value) return [];
    return [...products.value]
        .sort((a, b) => b.rating.rate - a.rating.rate)
        .slice(0, 8);
});
</script>

<style scoped></style>