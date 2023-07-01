<template>
  <main>
    <div>
      <h1>Frontend Mentor Challenges</h1>
      <h5>
        Below are an ever growing collection of solutions to Frontend Mentor
        Challenges
      </h5>
    </div>

    <router-view> </router-view>
    <h4>
      <!-- Each challenge should have a link to the challenge page, my github code and the actual solution -->
      <div>List of cards with challenges and links to challenge</div>
    </h4>
  </main>
</template>

<script setup></script>

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
