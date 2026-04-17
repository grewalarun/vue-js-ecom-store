<template>
  <div>
<ProductDetail :id="productId"/>
    <!-- Use kebab-case -->
    <router-link to="/">Back to home page</router-link>
  </div>
</template>

<script setup lang="ts">
import ProductDetail from '@/components/ProductDetail/ProductDetail.vue';
import { useRoute } from 'vue-router'

const route = useRoute()

const productId = route.params.id as string
</script>

<style scoped>
</style>