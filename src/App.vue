<template>
  <main>
    <div>
      <h3>Navigation</h3>
    </div>
    <router-view> </router-view>
  </main>
</template>

<script setup>
import QRCode from '@/components/QRCode.vue';
</script>

<style scoped lang="scss">
$link: #d62828;
$dark: #000814;
$light: #edf6f9;
$accent: #003566;
$primary: #001d3d;
$secondary: #ffc300;

body {
  background-color: $dark;
}
</style>
