<template>
  <HeroSection />

  <section class="max-w-6xl mx-auto px-6">
    <h1>This is home page</h1>
    <v-card class="bg-primary-700 p-5">
      <v-card-item>
        <v-card-title>
          <div class="text-6xl">{{ contX.count }}</div>
        </v-card-title>
        <v-card-actions>
          <v-btn
            class="text-none text-body-large"
            color="bg-secondary-400 p-4"
            rounded="lg"
            size="large"
            variant="flat"
            @click="contX.increment"
          >
            Create Event
          </v-btn>
        </v-card-actions>
      </v-card-item>
    </v-card>
  </section>

  <SectionLayout heading="Browse by Category" subline="Find exactly what you are looking for.">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <CategoryCard name="Men Fashion" :image="menfashion" to="/category/men" />
      <CategoryCard name="Women Fashion" :image="womenfashion" to="/category/men" />
      <CategoryCard name="Jewellery" :image="jewellery" to="/category/men" />
    </div>
  </SectionLayout>

  <SectionLayout
    heading="Featured Products"
    subline="Check out our top-rated selection just for you."
  >
    <FeaturedProduct />
  </SectionLayout>
</template>

<script setup lang="ts">
import HeroSection from '@/components/HomePage/HeroSection.vue'
import CategoryCard from '@/shared/ui/CategoryCard.vue'
import SectionLayout from '@/shared/ui/SectionLayout.vue'
import { useCounterStore } from '@/stores/counter'
import menfashion from '@/assets/images/men-fashion.jpg'
import womenfashion from '@/assets/images/women-fashion.jpg'
import jewellery from '@/assets/images/jewellery.jpg'
import FeaturedProduct from '@/components/HomePage/FeaturedProduct.vue'
const contX = useCounterStore()
</script>

<style scoped></style>
