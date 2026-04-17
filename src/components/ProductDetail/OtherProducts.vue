<template>
  <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <ProductCard
      v-if="!isLoading"
      v-for="product in otherProducts"
      :key="product.id"
      :name="product.title"
      :category="product.category"
      :image="product.image"
      :price="product.price"
      :rating="product.rating.rate"
      :reviews="product.rating.count"
      :id="product.id"
    />
  </div>
</template>

<script setup lang="ts">
import ProductCard from '@/shared/ui/ProductCard.vue'
import { useProducts } from '@/utills/useProducts'
import { computed } from 'vue'
const { data: products, isLoading } = useProducts()

const props = defineProps<{
  cat?: string
}>()

const otherProducts = computed(() => {
  return products.value?.filter((x) => x.category === props.cat).slice(0, 4) ?? []
})
</script>

<style scoped></style>
