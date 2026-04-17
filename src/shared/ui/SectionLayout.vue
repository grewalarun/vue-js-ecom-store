<script setup lang="ts">
interface Props {
  heading: string
  subline?: string
}

const props = defineProps<Props>()
</script>

<template>
  <section class="py-10 md:py-16 px-4">
    <div class="max-w-6xl mx-auto">
      
      <!-- Section Header -->
      <div class="text-center mb-8 md:mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-text-dark mb-3">
          {{ props.heading }}
        </h2>

        <p 
          v-if="props.subline" 
          class="text-lg md:text-xl font-semibold text-text-muted"
        >
          {{ props.subline }}
        </p>
      </div>

      <!-- Section Content (Slot) -->
      <div>
        <slot />
      </div>

    </div>
  </section>
</template>