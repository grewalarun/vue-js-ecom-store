<script setup lang="ts">
import { fetchSingleProduct } from '@/services/singleProductService'
import { useQuery } from '@tanstack/vue-query'

const props = defineProps<{
  id: string
}>()

const { data, isLoading, isError } = useQuery({
  queryKey: ['product', props.id],
  queryFn: () => fetchSingleProduct(props.id),
})


</script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-10">
    
    <!-- Loading -->
    <div v-if="isLoading" class="text-center py-10">
      Loading product...
    </div>

    <!-- Error -->
    <div v-else-if="isError" class="text-center text-red-500">
      Failed to load product
    </div>

    <!-- Product Detail -->
    <div v-else-if="data" class="grid grid-cols-1 md:grid-cols-2 gap-10">
      
      <!-- Image -->
      <div class="bg-white p-6 rounded-lg shadow">
        <img 
          :src="data.image" 
          alt="product" 
          class="w-full h-[400px] object-contain"
        />
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
          <span class="text-sm text-text-muted">
            ({{ data.rating.count }} reviews)
          </span>
        </div>

        <!-- Price -->
        <div class="text-2xl font-bold text-primary-600 mb-6">
          ₹{{ Math.round(data.price * 80) }}
        </div>

        <!-- Description -->
        <p class="text-text-muted mb-6 leading-relaxed">
          {{ data.description }}
        </p>

        <!-- Actions -->
        <div class="flex gap-4">
          <v-btn color="primary" size="large">
            Add to Cart
          </v-btn>

          <v-btn variant="outlined" size="large">
            Buy Now
          </v-btn>
        </div>

      </div>

    </div>
    <div v-else>Unexpected error</div>
    <div>{{ JSON.stringify(data) }}</div>
  </div>
</template>