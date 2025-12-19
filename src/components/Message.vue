<template>
  <div class="border bg-amber-50">
    <h1 class="text-center text-3xl">{{ message }}</h1>
  </div>
</template>

<script setup lang="ts">
interface MessageProps {
  message: string
}

defineProps<MessageProps>()

defineOptions({
  name: 'MessageComponent',
})
</script>
