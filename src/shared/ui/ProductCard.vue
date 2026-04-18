<script setup lang="ts">
import { useCartStore } from '@/stores/counter'
import { computed } from 'vue'

interface Props {
  id: number
  name: string
  category: string
  image: string
  price: number
  rating: number
  reviews: number
}

const props = defineProps<Props>()
const emit = defineEmits(['click'])

const cart = useCartStore()
const isAdded = computed(() => cart.isInCart(props.id))

const handleCartAction = (props: Omit<Props, 'quantity'>) => {
  if (isAdded.value) {
    cart.removeCart(props.id)
  } else {
    cart.addToCart(props)
  }
}

const handleAddCart = (x: Omit<Props, 'quantity'>) => {
  console.log('Add to cart:', props.id)

  cart.addToCart(x)
}

const handleRemoveCart = (x: Omit<Props, 'quantity'>) => {
  console.log('Add to cart:', props.id)

  cart.removeCart(x.id)
}
</script>

<template>
  <v-card
    class="product-card flex flex-col h-full"
    elevation="2"
    rounded="lg"
    @click="props.id ? $router.push(`/product/${props.id}`) : emit('click')"
  >
    <!-- Image Wrapper -->
    <div class="relative">
      <v-img :src="props.image" height="220" cover class="rounded-t-lg m-8" />

      <!-- 🔥 Category (Top Overlay) -->
      <div class="absolute top-2 left-2">
        <v-chip size="small" class="bg-secondary-200 font-semibold px-4">
          {{ props.category }}
        </v-chip>
      </div>

      <!-- ⭐ Rating (Bottom Overlay) -->
      <div class="absolute bottom-0 left-2 flex items-center gap-2">
        <v-rating
          :model-value="props.rating"
          density="comfortable"
          size="16"
          half-increments
          readonly
          color="orange-lighten-1"
          active-color="primary-400"
        />

        <span class="text-xs text-text-dark"> ({{ props.reviews }}) </span>
      </div>
    </div>

    <!-- Content -->
    <v-card-text class="flex flex-col grow p-4">
      <!-- Product Name -->
      <h3 class="text-base font-semibold text-text-dark mb-3 line-clamp-2">
        {{ props.name }}
      </h3>

      <!-- Push price to bottom -->
      <div class="mt-auto flex items-center justify-between">
        <span class="text-lg font-bold text-primary-600"> ₹{{ props.price }} </span>
        <v-btn
          color="primary"
          size="large"
          rounded="lg"
          class="px-6 text-text-light"
          @click.stop="handleCartAction(props)"
        >
          {{ isAdded ? 'Remove from Cart' : 'Add to Cart' }}
        </v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.product-card {
  transition: all 0.25s ease;
}

.product-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.12);
}
</style>
