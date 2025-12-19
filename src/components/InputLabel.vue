<template>
  <label class="border-l-4 border-l-green-500 px-2 py-2">{{ text }} </label>
</template>

<script setup lang="ts">
defineOptions({
  name: 'InputLabelComponent',
})

interface InputLabelProps {
  text: string
}

defineProps<InputLabelProps>()
</script>
