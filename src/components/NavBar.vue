<template>
  <header>
    <nav>
      <router-link to="/">
        <IconButton
          icon="ic:round-home"
          label="Home"
        />
      </router-link>
    </nav>
  </header>
</template>

<script setup></script>

<style lang="scss">
@import '../styles/variables';

header {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 10px;
}

nav {
  // border-bottom: 2px solid $link;
}
</style>
