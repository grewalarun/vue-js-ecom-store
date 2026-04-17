<script setup lang="ts">
interface Props {
  name: string
  image: string
  to?: string // optional route
}

const props = defineProps<Props>()
const emit = defineEmits(['click'])
</script>

<template>
  <!-- Clickable Card -->
  <v-card
    class="category-card cursor-pointer"
    elevation="2"
    rounded="lg"
    @click="props.to ? $router.push(props.to) : emit('click')"
  >
    <!-- Image -->
    <v-img
      :src="props.image"
      height="180"
      cover
      class="align-end p-5"
    >
      <!-- Overlay -->
      <div class="overlay"></div>

      <!-- Category Name -->
      <v-card-title class="text-white font-bold text-lg z-10 relative">
        {{ props.name }}
      </v-card-title>
    </v-img>
  </v-card>
</template>

<style scoped>
.category-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.category-card:hover {
  transform: translateY(-4px);
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.1)
  );
}
</style>