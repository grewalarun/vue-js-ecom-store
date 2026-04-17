<template>
    <main class="min-h-screen flex flex-col w-full items-center ">
        <Header />
        <section class="w-full">
           <RouterView /> 
        </section>
    </main>
</template>

<script setup lang="ts">
import Header from '../Header.vue';


</script>

<style scoped></style>