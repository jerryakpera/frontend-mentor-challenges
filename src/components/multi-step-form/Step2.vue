<template>
  <div class="h-5/6 flex flex-col justify-between">
    <div class="flex flex-col gap-8">
      <div>
        <div class="font-bold text-3xl text-dark">Select your plan</div>
        <p class="mt-2 text-gray-400">
          You have the option of monthly or yearly billing
        </p>
      </div>

      <div class="flex gap-3">
        <div
          class="w-1/3"
          v-for="(plan, i) in plans"
          :key="plan.name"
        >
          <BillingCard
            :period="period"
            :name="plan.name"
            :icon="plan.icon"
            :yearlyPrice="plan.yearlyPrice"
            :monthlyPrice="plan.monthlyPrice"
            @click="selectedPlan = plan.name"
            :selected="selectedPlan === plan.name"
          />
        </div>
      </div>

      <div class="flex justify-center w-full py-1 bg-Magnolia rounded-md">
        <div class="flex items-center gap-4">
          <span
            class="font-medium text-sm"
            :class="period === 'monthly' ? ' text-dark' : 'text-gray-300'"
          >
            Monthly
          </span>
          <span>
            <IconifyIcon
              @click="togglePeriod"
              :icon="
                period === 'monthly'
                  ? 'mingcute:toggle-left-fill'
                  : 'mingcute:toggle-right-fill'
              "
              class="text-blue-900 text-4xl cursor-pointer"
            />
          </span>
          <span
            class="font-medium text-sm"
            :class="period === 'yearly' ? ' text-dark' : 'text-gray-300'"
          >
            Yearly
          </span>
        </div>
      </div>
    </div>

    <div class="self-baseline w-full justify-between flex mt-4">
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
import BillingCard from './BillingCard.vue';

import { ref } from 'vue';

const emit = defineEmits(['back', 'next']);

const period = ref('monthly');
const selectedPlan = ref('Arcade');

const plans = [
  {
    no: 1,
    name: 'Arcade',
    monthlyPrice: '$9/mo',
    yearlyPrice: '$90/yr',
    icon: '../../../public/images/multi-step-form/icon-arcade.svg',
  },
  {
    no: 2,
    monthlyPrice: '$12/mo',
    yearlyPrice: '$120/yr',
    name: 'Advanced',
    icon: '../../../public/images/multi-step-form/icon-advanced.svg',
  },
  {
    no: 3,
    name: 'Pro',
    monthlyPrice: '$15/mo',
    yearlyPrice: '$150/yr',
    icon: '../../../public/images/multi-step-form/icon-pro.svg',
  },
];

const togglePeriod = () => {
  if (period.value === 'monthly') {
    period.value = 'yearly';
    return;
  }

  period.value = 'monthly';
};
</script>

<style lang="scss" scoped></style>
