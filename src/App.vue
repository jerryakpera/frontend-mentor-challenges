<template>
  <div class="main">
    <NavBar />
    <router-view> </router-view>
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
</script>

<style lang="scss">
@import './styles/variables';

.text {
  &-link {
    color: $link;
  }
  &-dark {
    color: $dark;
  }
  &-light {
    color: $light;
  }
  &-accent {
    color: $accent;
  }
  &-primary {
    color: $primary;
  }
  &-secondary {
    color: $secondary;
  }
}

.main {
  height: 100vh;
  // background-color: $dark;
}
</style>
