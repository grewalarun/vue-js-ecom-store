<template>
  <nav class="w-full bg-primary">
    <div class="max-w-6xl mx-auto px-6">
      <div class="flex items-center justify-between h-16">

        <!-- Logo -->
        <RouterLink to="/" class="text-text-light font-bold text-xl">
          Logo
        </RouterLink>

        <!-- Desktop Menu -->
        <ul class="hidden md:flex items-center h-full gap-2">
          <MenuItem
            v-for="item in navItems"
            :key="item.label"
            :label="item.label"
            :to="item.to"
            :variant="item.variant"
          />
        </ul>

        <!-- Mobile Hamburger -->
        <button
          class="md:hidden text-text-light"
          @click="mobileOpen = !mobileOpen"
        >
          <span class="text-2xl">☰</span>
        </button>

      </div>

      <!-- Mobile Menu -->
      <ul v-if="mobileOpen" class="md:hidden flex flex-col gap-2 pb-4">
        <MenuItem
          v-for="item in navItems"
          :key="item.label"
          :label="item.label"
          :to="item.to"
          :variant="item.variant"
        />
      </ul>

    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import MenuItem from '../shared/ui/MenuItem.vue'

const mobileOpen = ref(false)

const navItems = [
  { label: 'Home',    to: '/',        variant: 'ghost' },
  { label: 'About',   to: '/aboutus',   variant: 'ghost' },
  { label: 'Contact', to: '/contactus', variant: 'solid' },  // CTA button
]
</script>