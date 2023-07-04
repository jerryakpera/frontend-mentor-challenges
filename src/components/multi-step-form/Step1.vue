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
        v-model="multistepStore.name"
        placeholder="e.g. Stephen King"
      />

      <FormContainer
        class="text-dark"
        label="Email Address"
        v-model="multistepStore.email"
        placeholder="e.g. stephenking@lorem.com"
      />

      <FormContainer
        class="text-dark"
        label="Phone Number"
        v-model="multistepStore.phone"
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

import { useMultiStepStore } from '../../plugins/stores/multistep-store';

const emit = defineEmits(['next']);
const multistepStore = useMultiStepStore();
</script>

<style lang="scss" scoped></style>
