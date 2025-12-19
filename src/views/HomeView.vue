<template>
  <main class="flex min-h-dvh flex-col gap-4">
    <Banner />
    <h1 class="text-center text-4xl">Monte seu burger:</h1>
    <burgerForm />
  </main>
</template>

<script setup lang="ts">
import Banner from '@/components/Banner.vue'
import BurgerForm from '@/components/BurgerForm.vue'

defineOptions({
  name: 'HomeView',
})
</script>
