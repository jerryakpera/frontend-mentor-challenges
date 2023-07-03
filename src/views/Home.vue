<template>
  <div class="page font-1">
    <div>
      <h1>Frontend Mentor Challenges</h1>
      <h5>
        Below are an ever growing collection of solutions to Frontend Mentor
        Challenges
      </h5>
    </div>

    <hr />

    <div class="challenges">
      <ChallengeCard
        v-for="challenge in challenges"
        :key="challenge.id"
        :challenge="challenge"
      />
    </div>
  </div>
</template>

<script setup>
import ChallengeCard from '../components/ChallengeCard.vue';

const challenges = [
  {
    id: 1,
    title: 'QR code component',
    challengeLink:
      'https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H/hub',
    solutionLink: '/qr-code',
    solutionCode:
      'https://github.com/jerryakpera/frontend-mentor-challenges/blob/main/src/views/QRCode.vue',
  },
  {
    id: 2,
    title: 'Newsletter Signup',
    challengeLink:
      'https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv/hub',
    solutionLink: '/newsletter-signup',
    solutionCode:
      'https://github.com/jerryakpera/frontend-mentor-challenges/blob/main/src/views/NewsletterSignup.vue',
  },
  {
    id: 3,
    title: 'Multi step form',
    challengeLink:
      'https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv/hub',
    solutionLink: '/multistep-form',
    solutionCode:
      'https://github.com/jerryakpera/frontend-mentor-challenges/blob/main/src/views/NewsletterSignup.vue',
  },
];
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';

.page {
  padding: 10px;
  height: 100vh;
  background-color: $dark;
  color: $light;

  .challenges {
    gap: 10px;
    display: flex;
    margin-top: 10px;
    flex-flow: row wrap;
    justify-content: flex-start;
  }
}
</style>
