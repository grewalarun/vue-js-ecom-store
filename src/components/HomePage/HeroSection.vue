<script setup>
import heroImage from '@/assets/images/hero-banner.jpg'
defineProps({
  image: {
    type: String,
    default: '.assets/images/hero-banner.jpg'
  }
})
</script>

<template>
  <section
    class="relative w-full flex items-center 
           min-h-auto md:min-h-100 
           bg-cover bg-center"
    :style="{ backgroundImage: `url(${heroImage})` }"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/40"></div>

    <!-- Content -->
    <div class="relative z-10 max-w-6xl mx-auto px-6 py-12 md:py-16 text-white">
      <h1 class="text-3xl md:text-5xl font-bold leading-tight mb-4">
        Elevate Your Style <br />
        <span class="text-primary-400">This Season</span>
      </h1>

      <p class="text-base md:text-lg text-gray-200 mb-6 max-w-xl">
        Discover curated fashion that blends timeless elegance with modern trends. 
        Step into confidence with every outfit.
      </p>

      <div class="flex flex-wrap gap-4">
        <button class="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium">
          Shop Now
        </button>

        <button class="bg-white/10 hover:bg-white/20 backdrop-blur text-white px-6 py-3 rounded-lg font-medium border border-white/30">
          Explore Collection
        </button>
      </div>
    </div>
  </section>
</template>