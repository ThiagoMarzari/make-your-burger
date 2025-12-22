<template>
  <main class="min-h-dvh w-full px-4">
    <div class="container mx-auto w-full">
      <h1 class="text-4xl">Gerenciar pedidos:</h1>
      <Dashboard />
    </div>
  </main>
</template>

<script setup lang="ts">
import Dashboard from '@/components/Dashboard.vue'

defineOptions({ name: 'OrdersView' })
</script>
