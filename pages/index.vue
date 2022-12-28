<script setup lang="ts">
const config = useRuntimeConfig()
console.log(config.public.apiBase)
</script>

<template>
  <div>
    <p>{{ config.public.apiBase }}</p>
  </div>
</template>
