<script setup lang="ts">
const socialLinks = [
  { icon: 'mdi-facebook', link: '#' },
  { icon: 'mdi-twitter', link: '#' },
  { icon: 'mdi-instagram', link: '#' },
  { icon: 'mdi-linkedin', link: '#' },
]
</script>

<template>
  <footer class="bg-secondary-600 text-white py-10 w-full">
    <div class="max-w-6xl mx-auto px-4 flex flex-col items-center text-center space-y-6">
      <!-- Logo / Brand -->
      <h1 class="text-3xl md:text-3xl font-bold tracking-wide">Logo</h1>

      <!-- Social Icons -->
      <div class="flex gap-5">
        <a
          v-for="(item, index) in socialLinks"
          :key="index"
          :href="item.link"
          target="_blank"
          class="hover:text-gray-200 transition"
        >
          <v-icon size="26">{{ item.icon }}</v-icon>
        </a>
      </div>

      <!-- Copyright -->
      <p class="text-sm text-gray-200">
        © {{ new Date().getFullYear() }} YourBrand. All rights reserved.
      </p>
    </div>
  </footer>
</template>
