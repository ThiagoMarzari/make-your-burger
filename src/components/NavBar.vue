<template>
  <header class="w-full border-b-2 border-gray-950 bg-gray-900 p-4">
    <nav class="flex items-center justify-between gap-4">
      <RouterLink to="/">
        <img class="h-10 w-10" src="/img/logo.png" alt="logo" />
      </RouterLink>

      <div class="flex gap-4">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/pedidos">Pedidos</RouterLink>
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
