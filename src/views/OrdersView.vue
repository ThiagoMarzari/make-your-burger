<template>
  <main class="min-h-dvh px-4">
    <div class="flex w-full flex-col">
      <h1 class="text-4xl">Gerenciar pedidos:</h1>
      <Dashboard />
    </div>
  </main>
</template>

<script setup lang="ts">
import Dashboard from '@/components/Dashboard.vue'

defineOptions({ name: 'OrdersView' })
</script>
