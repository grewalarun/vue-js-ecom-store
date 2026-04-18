<template>
  <main class="min-h-screen flex flex-col w-full items-center">
    <header class="fixed top-0 left-0 w-full z-50 bg-white shadow">
      <Header @open-cart="isCartOpen = true" />
    </header>
    <CartDrawer v-model="isCartOpen" />

    <section class="w-full mt-16">
      <RouterView />
    </section>
    <Footer />
  </main>
</template>

<script setup lang="ts">
import CartDrawer from '@/components/CartDrawer.vue'
import { ref } from 'vue'

const isCartOpen = ref(false)
import Footer from '../Footer.vue'
import Header from '../Header.vue'
</script>

<style scoped></style>
