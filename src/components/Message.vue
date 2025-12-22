<template>
  <div class="rounded-lg border border-green-800 bg-green-400 px-2 py-1">
    <p class="text-center text-xl text-green-950">{{ message }}</p>
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
