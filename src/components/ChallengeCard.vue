<template>
  <div class="challenge">
    <div class="challenge--title">
      <a
        :href="challenge.challengeLink"
        target="_blank"
      >
        {{ challenge.title }}
      </a>
    </div>
    <div class="challenge--body">
      <div class="challenge--link">
        <router-link :to="challenge.solutionLink"> View Solution </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['challenge']);
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';

.challenge {
  flex-basis: 24%;
  width: 350px;
  flex-grow: 1;
  padding: 10px;
  min-width: 250px;
  position: relative;
  text-align: center;
  border-radius: 5px;
  box-sizing: border-box;
  border: 1px solid $light;
  box-shadow: 1px 3px 6px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    // background-color: black;
    max-width: 350px;
  }

  .challenge--title {
    padding-bottom: 5px;
    margin-bottom: 5px;
  }

  a {
    color: $light;
    font-weight: bold;
    text-decoration: none;
  }
}
</style>
