<script setup lang="ts">
import { fetchSingleProduct } from '@/services/singleProductService'
import ReusableFeaturesStrip from '@/shared/ui/ReusableFeaturesStrip.vue'
import SectionLayout from '@/shared/ui/SectionLayout.vue'
import { useQuery } from '@tanstack/vue-query'
import OtherProducts from './OtherProducts.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useCartStore } from '@/stores/counter'

const props = defineProps<{
  id: string
}>()
const route = useRoute()

interface ID {
  id: number
}

interface Props {
  id: number
  name: string
  category: string
  image: string
  price: number
  rating: number
  reviews: number
}

const productId = computed(() => route.params.id as string)

const { data, isLoading, isError } = useQuery({
  queryKey: computed(() => ['product', productId.value]),
  queryFn: () => fetchSingleProduct(productId.value),
})

const cart = useCartStore()

const isAdded = computed(() => {
  const id = data.value?.id
  return id ? cart.isInCart(id) : false
})

const handleCartAction = (props: Omit<Props, 'quantity'>) => {
  if (isAdded.value) {
    cart.removeCart(props.id)
  } else {
    cart.addToCart(props)
  }
}
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-10">
    <!-- Loading -->
    <div v-if="isLoading" class="text-center py-10">Loading product...</div>

    <!-- Error -->
    <div v-else-if="isError" class="text-center text-red-500">Failed to load product</div>

    <!-- Product Detail -->
    <div v-else-if="data" class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <!-- Image -->
      <div class="bg-white p-6 rounded-lg shadow">
        <img :src="data.image" alt="product" class="w-full h-100 object-contain" />
      </div>

      <!-- Info -->
      <div class="flex flex-col">
        <!-- Category -->
        <span class="text-sm text-text-muted mb-2 uppercase">
          {{ data.category }}
        </span>

        <!-- Title -->
        <h1 class="text-2xl md:text-3xl font-bold text-text-dark mb-4">
          {{ data.title }}
        </h1>

        <!-- Rating -->
        <div class="flex items-center gap-2 mb-4">
          <v-rating
            :model-value="data.rating.rate"
            readonly
            size="20"
            color="amber"
            half-increments
          />
          <span class="text-sm text-text-muted"> ({{ data.rating.count }} reviews) </span>
        </div>

        <!-- Price -->
        <div class="text-2xl font-bold text-primary-600 mb-6">${{ Math.round(data.price) }}</div>

        <!-- Description -->
        <p class="text-text-muted mb-6 leading-relaxed">
          {{ data.description }}
        </p>

        <!-- Actions -->
        <div class="flex gap-4">
          <v-btn
            color="primary"
            size="x-large"
            rounded="lg"
            class="px-6 text-text-light"
            @click.stop="
              handleCartAction({
                id: data.id,
                name: data.title,
                category: data.category,
                image: data.image,
                price: data.price,
                rating: data.rating.rate,
                reviews: data.rating.count,
              })
            "
          >
            {{ isAdded ? 'Remove from Cart' : 'Add to Cart' }}
          </v-btn>

          <v-btn
            color="secondary-600"
            class="px-4 text-text-light"
            size="x-large"
            rounded="lg"
            prepend-icon="mdi-hand-coin"
          >
            Buy Now
          </v-btn>
        </div>
      </div>
    </div>
    <div v-else>Unexpected error</div>
    <section v-if="data" class="my-6">
      <h3 class="text-2xl font-bold text-text-dark mb-4">Specification</h3>
      <p>{{ data.description }}</p>
    </section>
    <ReusableFeaturesStrip />

    <section-layout heading="You May Also Like" subline="Similar products in men's clothing">
      <other-products :cat="data?.category" />
    </section-layout>
  </div>
</template>
