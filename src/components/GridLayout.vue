<script setup lang="ts">
const props = defineProps<{
  gap: string;
  columnsLg: string;
  columnsMd: string;
  columnsSm: string;
}>();
</script>

<template>
  <div
    grid
    px-5
    pb-5
    :gap="props.gap"
    :class="[columnsLg, columnsMd, columnsSm]"
  >
    <slot />
  </div>
</template>
