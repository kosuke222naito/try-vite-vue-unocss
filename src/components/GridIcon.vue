<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  borderColor?: string;
  icon?: string;
  isDark: boolean;
}>();

const borderClass = computed(() => {
  return props.borderColor || "border-gray";
});

const iconClass = computed(() => {
  return props.icon || "i-logos-vue";
});
</script>

<template>
  <div
    grid
    items-center
    justify-center
    border
    rounded-lg
    border-solid
    :class="borderClass"
    hover="bg-gray"
  >
    <span text-4xl :class="[iconClass, { 'text-white': isDark }]"> </span>
  </div>
</template>
