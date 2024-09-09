<script setup lang="ts">
import { ref } from "vue";

import GridLayout from "./components/GridLayout.vue";
import GridIcon from "./components/GridIcon.vue";
import Navbar from "./components/Navbar.vue";

const isDark = ref(false);

const toggleDarkMode = () => {
  isDark.value = !isDark.value;
};

const items = [
  { borderColor: "border-red", icon: "i-carbon-logo-github" },
  { borderColor: "border-orange", icon: "i-carbon-logo-vue" },
  { borderColor: "border-yellow", icon: "i-twemoji-frog" },
  { borderColor: "border-green", icon: "i-twemoji-avocado" },
  { borderColor: "border-gray", icon: "i-logos-unocss" },
  { borderColor: "border-blue", icon: "i-devicon-nuxtjs" },
  { borderColor: "border-#000080", icon: "i-devicon-homebrew" },
  { borderColor: "border-purple", icon: "i-logos-vitejs" },
  { borderColor: "border-pink", icon: "i-logos-visual-studio-code" },
];
</script>

<template>
  <div :class="{ 'bg-black': isDark }">
    <Navbar :isDark @toggleDarkMode="toggleDarkMode"> </Navbar>
    <GridLayout
      :gap="'x-8 y-8'"
      :columnsLg="'lg:grid-cols-4'"
      :columnsMd="'md:grid-cols-3'"
      :columnsSm="'sm:grid-cols-2'"
      h-90vh
    >
      <GridIcon
        v-for="(item, index) in items"
        :key="`icon-${index}`"
        :borderColor="item.borderColor"
        :icon="item.icon"
        :isDark
      />
    </GridLayout>
  </div>
</template>
