<template>
  <div class="h-5/6 flex flex-col justify-between">
    <div class="flex flex-col gap-8">
      <div>
        <div class="font-bold text-3xl text-dark">Pick add-ons</div>
        <p class="mt-2 text-gray-400">
          Add-ons help enhance your gaming experience.
        </p>
      </div>

      <div class="flex flex-col gap-4">
        <div
          v-for="addon in addOns"
          :key="addon.name"
        >
          <AddOn
            :addOn="addon"
            @toggleAddOn="toggleAddOn"
            :price="
              multistepStore.period === 'monthly'
                ? addon.monthlyPrice
                : addon.yearlyPrice
            "
          />
        </div>
      </div>
    </div>
    <div class="self-baseline w-full justify-between flex mt-8">
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
</template>

<script setup>
import AddOn from './AddOn.vue';

import _ from 'lodash';

import { useMultiStepStore } from '../../plugins/stores/multistep-store';

const emit = defineEmits(['back', 'next']);
const multistepStore = useMultiStepStore();

const addOns = [
  {
    no: 1,
    monthlyPrice: '+$1/mo',
    yearlyPrice: '+$10/yr',
    name: 'Online Service',
    desc: 'Access to multiplayer games',
  },
  {
    no: 2,
    monthlyPrice: '+$2/mo',
    yearlyPrice: '+$20/yr',
    name: 'Larger storage',
    desc: 'Extra 1TB of cloud save',
  },
  {
    no: 3,
    monthlyPrice: '+$2/mo',
    yearlyPrice: '+$20/yr',
    name: 'Customizable profile',
    desc: 'Custom theme on your profile',
  },
];

const toggleAddOn = (_addOn) => {
  const addOnIndex = multistepStore.addOns.findIndex(
    (addOn) => addOn.name == _addOn.name
  );

  if (addOnIndex < 0) {
    multistepStore.addOns.push(_addOn);
    return;
  }

  multistepStore.addOns = multistepStore.addOns.filter(
    (addOn) => addOn.name != _addOn.name
  );
};
</script>

<style lang="scss" scoped></style>
