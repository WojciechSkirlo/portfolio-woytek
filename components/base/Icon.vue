<template>
  <component :is="HeroIcons[name]" :class="bigger ? 'w-5 h-5' : smaller ? 'w-3.5 h-3.5' : 'w-4 h-4'"></component>
</template>
<script setup lang="ts">
import * as HeroIcons from "@heroicons/vue/solid/index.js";
defineProps<{
  name: keyof typeof HeroIcons;
  bigger?: boolean;
  smaller?: boolean;
}>();
</script>
