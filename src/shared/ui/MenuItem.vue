<template>
  <li class="">
    <RouterLink
      :to="to"
      class="px-4 py-2 rounded font-medium transition-all duration-200 "
      :class="[
        variant === 'solid'
          ? 'bg-secondary-600 text-text-light hover:bg-secondary-600'
          : 'text-text-light hover:text-primary-100',
      ]"
    >
      {{ label }}
    </RouterLink>
  </li>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    default: 'ghost',       // 'ghost' or 'solid'
    validator: (val) => ['ghost', 'solid'].includes(val),
  },
})
</script>