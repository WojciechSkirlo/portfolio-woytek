<template>
  <h2
    class="text-lg leading-none px-2.5 py-1.5 bg-accent uppercase font-medium text-black"
    :class="[left && 'self-start', center && 'self-center', right && 'self-right']"
  >
    <slot />
  </h2>
</template>
<script setup lang="ts">
defineProps<{
  left?: boolean;
  center?: boolean;
  right?: boolean;
}>();
</script>
