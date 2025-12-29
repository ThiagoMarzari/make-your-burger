<template>
  <main class="flex min-h-dvh flex-col gap-4">
    <Banner />

    <BurgerForm />
  </main>
</template>

<script setup lang="ts">
import Banner from '@/components/Banner.vue'
import BurgerForm from '@/components/BurgerForm.vue'

defineOptions({
  name: 'HomeView',
})
</script>
