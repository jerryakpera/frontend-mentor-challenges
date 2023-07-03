<template>
  <div class="flex flex-col">
    <label
      for="name"
      class="font-medium text-xs"
    >
      {{ label }}
    </label>

    <input
      type="text"
      :placeholder="placeholder"
      class="border border-gray-300 mt-2 p-3 rounded-md font-medium text-xs"
    />
  </div>
</template>

<script setup>
const props = defineProps(['label', 'placeholder']);
</script>

<style lang="scss" scoped></style>
