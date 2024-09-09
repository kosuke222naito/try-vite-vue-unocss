<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  isDark: boolean;
}>();

const emit = defineEmits<{
  (event: "toggleDarkMode"): void;
}>();

const emitToggleDarkMode = () => {
  emit("toggleDarkMode");
};

const iconClass = computed(() => {
  return props.isDark ? "i-mi-moon text-white" : "i-mi-sun";
});
</script>

<template>
  <nav h-10vh w-full px-10 flex justify-end items-center>
    <button @click="emitToggleDarkMode">
      <span text-2xl flex content-center :class="iconClass"></span>
    </button>
  </nav>
</template>
