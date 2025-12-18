<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineOptions({
  name: 'NavBarComponent',
})
</script>

<template>
  <header>
    <div class="wrapper">
      <RouterLink to="/">
        <img src="" alt="logo" />
      </RouterLink>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/pedidos">Pedidos</RouterLink>
      </nav>
    </div>
  </header>
</template>
