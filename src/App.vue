<template>
  <div>
    <NavBar />
    <RouterView />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>
