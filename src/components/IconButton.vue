<template>
  <button>
    <div class="font-2">
      <VueIcon
        :icon="icon"
        class="text-link"
        style="font-size: x-large; margin-right: 5px"
      />

      {{ label }}
    </div>
  </button>
</template>

<script setup>
const props = defineProps(['icon', 'label']);
</script>

<style lang="scss" scoped>
@import '../styles/variables';

button {
  padding: 3px 10px;
  cursor: pointer;

  div {
    display: flex;
    align-items: center;
  }
}
</style>
