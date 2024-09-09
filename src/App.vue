<template>
  <div
    p-5
    grid
    gap="x-8 y-8"
    grid-cols="sm:2 md:3 lg:4"
    h-full
    border="[&>div]:~ [&>div]:solid"
    class="[&>div]:rounded-lg [&>div]:grid [&>div]:justify-center [&>div]:items-center [&>div>*]:text-4xl"
  >
    <div border-red><i-carbon-logo-github text-green /></div>
    <div border-orange><i-carbon-logo-vue text-green /></div>
    <div border-yellow><i-twemoji-frog /></div>
    <div border-green><i-twemoji-green-heart /></div>
    <div border-gray><i-logos-unocss /></div>
    <div border-blue><i-devicon-nuxtjs /></div>
    <div border="#000080"><i-devicon-homebrew /></div>
    <div border-purple><i-logos-vitejs /></div>
    <div border-pink><i-logos-visual-studio-code /></div>
  </div>
</template>
