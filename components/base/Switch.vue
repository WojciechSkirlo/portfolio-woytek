<template>
  <button
    type="button"
    class="relative flex h-4 transition-colors duration-300 rounded-full w-9"
    :class="background ? 'bg-dark-neutral dark:bg-white' : 'bg-white dark:bg-dark-neutral'"
    aria-label="Change theme mode"
    @click="$emit('update:modelValue', !modelValue)"
  >
    <div class="absolute -top-0.5 w-5 h-5 rounded-full transition-[left] bg-accent" :class="modelValue ? 'left-[18px]' : '-left-0.5'"></div>
  </button>
</template>
<script setup lang="ts">
defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

defineProps<{
  modelValue: boolean;
  background?: boolean;
}>();
</script>
