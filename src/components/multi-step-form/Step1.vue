<template>
  <div class="h-5/6 flex flex-col justify-between">
    <div class="flex flex-col gap-6">
      <div>
        <div class="font-bold text-3xl text-dark">Personal Info</div>
        <p class="mt-2 text-gray-400">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <FormContainer
        label="Name"
        class="text-dark"
        placeholder="e.g. Stephen King"
      />

      <FormContainer
        class="text-dark"
        label="Email Address"
        placeholder="e.g. stephenking@lorem.com"
      />

      <FormContainer
        label="Phone Number"
        class="text-dark"
        placeholder="e.g. +1 234 567 890"
      />
    </div>

    <div class="self-baseline w-full justify-end flex">
      <button
        class="bg-dark p-2 px-4 font-medium text-white rounded-md"
        @click="emit('next')"
      >
        Next Step
      </button>
    </div>
  </div>
</template>

<script setup>
import FormContainer from './FormContainer.vue';

const emit = defineEmits([
  'next',
  'update:name',
  'update:email',
  'update:phone',
]);
</script>

<style lang="scss" scoped></style>
