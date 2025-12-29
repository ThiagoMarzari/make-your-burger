<template>
  <header class="h-20 w-full border-b-2 border-gray-950 bg-gray-900 p-4">
    <nav class="flex items-center justify-between gap-4">
      <RouterLink to="/">
        <img class="h-10 w-10" src="/img/logo.png" alt="logo" />
      </RouterLink>

      <div class="flex gap-4">
        <RouterLink class="text-2xl font-bold transition-all hover:scale-105" to="/"
          >Home</RouterLink
        >
        <RouterLink class="text-2xl font-bold transition-all hover:scale-105" to="/pedidos"
          >Pedidos</RouterLink
        >
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineOptions({
  name: 'NavBarComponent',
})
</script>
