<template>
  <div>
    <div class="font-bold text-3xl text-dark">Pick add-ons</div>
    <p class="mt-2 text-gray-400">
      Add-ons help enhance your gaming experience.
    </p>

    <div class="flex flex-col mt-5">
      <div
        class="flex flex-col gap-2"
        v-for="addon in addOns"
        :key="addon.name"
      >
        <AddOn
          :addOn="addon"
          @toggleAddOn="toggleAddOn"
          :selected="selectedAddons.includes(addon.name)"
        />
      </div>

      <div class="flex justify-between mt-28">
        <button
          class="p-2 px-4 font-medium text-gray-400"
          @click="emit('back')"
        >
          Go Back
        </button>

        <button
          class="bg-dark p-2 px-4 font-medium text-white rounded-md"
          @click="emit('next')"
        >
          Next Step
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AddOn from './AddOn.vue';

const emit = defineEmits(['back', 'next']);

const addOns = [
  {
    no: 1,
    price: '+$1/mo',
    name: 'Online Service',
    desc: 'Access to multiplayer games',
  },
  {
    no: 2,
    price: '+$2/mo',
    name: 'Larger storage',
    desc: 'Extra 1TB of cloud save',
  },
  {
    no: 3,
    price: '+$2/mo',
    name: 'Customizable profile',
    desc: 'Custom theme on your profile',
  },
];

const selectedAddons = ref([]);

const toggleAddOn = (addOnName) => {
  const addOnIndex = selectedAddons.value.findIndex(
    (addOn) => addOn == addOnName
  );

  if (addOnIndex < 0) {
    selectedAddons.value.push(addOnName);
    return;
  }

  selectedAddons.value = selectedAddons.value.filter(
    (addOn) => addOn != addOnName
  );
};
</script>

<style lang="scss" scoped></style>
