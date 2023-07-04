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
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
      class="border border-gray-300 mt-2 p-3 rounded-md font-medium text-xs"
    />
  </div>
</template>

<script setup>
import { watch, ref, onMounted } from 'vue';

const value = ref(null);

const emit = defineEmits(['update:modelValue']);
const props = defineProps(['label', 'placeholder', 'modelValue']);

watch(value, (current) => {
  emit('update:modelValue', current);
});
</script>

<style lang="scss" scoped></style>
