<script setup lang="ts">
import { useCartStore } from '@/stores/counter'

const cart = useCartStore()

const props = defineProps<{ modelValue: boolean }>()
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <v-navigation-drawer
    :model-value="props.modelValue"
    @update:model-value="emit('update:modelValue', $event)"
    location="right"
    width="350"
    temporary
  >
    <div class="p-4 flex flex-col h-full">
      <!-- Header -->
      <h2 class="text-xl font-bold mb-4">Your Cart</h2>

      <!-- Cart Items -->
      <div class="flex-1 overflow-y-auto space-y-4">
        <div v-for="item in cart.cart" :key="item.id" class="flex gap-3 items-center border-b pb-3">
          <!-- Image -->
          <img :src="item.image" class="w-16 h-16 object-contain rounded" />

          <!-- Info -->
          <div class="flex-1">
            <p class="text-sm font-medium line-clamp-2">
              {{ item.name }}
            </p>

            <p class="text-primary-600 font-semibold">₹{{ item.price }}</p>

            <!-- Quantity -->
            <div class="flex items-center gap-2 mt-1">
              <v-btn size="x-small" icon="mdi-minus" @click="cart.decreaseQuantity(item)" />

              <span>{{ item.quantity }}</span>

              <v-btn size="x-small" icon="mdi-plus" @click="cart.addToCart(item)" />
            </div>
          </div>

          <!-- Remove -->
          <v-btn
            icon="mdi-delete"
            size="small"
            color="red"
            variant="text"
            @click="cart.removeCart(item.id)"
          />
        </div>
      </div>

      <!-- Footer -->
      <div class="pt-4 border-t">
        <div class="flex justify-between mb-3 font-semibold">
          <span>Total</span>
          <!-- <span>₹{{ Math.round(cart.cartTotal * 80) }}</span> -->
        </div>

        <v-btn block color="primary" size="large"> Checkout </v-btn>
      </div>
    </div>
  </v-navigation-drawer>
</template>
