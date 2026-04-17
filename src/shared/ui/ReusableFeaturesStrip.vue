<script setup lang="ts">
const features = [
  {
    icon: 'mdi-refresh',
    title: '7 Day Easy Return',
    description: 'Hassle-free returns within 7 days',
  },
  {
    icon: 'mdi-shield-check',
    title: '100% Authentic Products',
    description: 'Guaranteed genuine and verified items',
  },
  {
    icon: 'mdi-lock',
    title: 'Secure Payment',
    description: 'Your transactions are safe and encrypted',
  },
]
</script>

<template>
  <section class="bg-gray-50 py-10">
    <div class="max-w-6xl mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(item, index) in features"
          :key="index"
          class="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
        >
          <!-- Icon -->
          <div class="text-primary-600">
            <v-icon size="32">{{ item.icon }}</v-icon>
          </div>

          <!-- Text -->
          <div>
            <h3 class="font-semibold text-lg text-gray-800">
              {{ item.title }}
            </h3>
            <p class="text-sm text-gray-500 mt-1">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
