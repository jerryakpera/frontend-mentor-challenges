<template>
  <div class="h-5/6 flex flex-col justify-between">
    <div class="flex flex-col gap-8">
      <div>
        <div class="font-bold text-3xl text-dark">Finishing up</div>
        <p class="mt-2 text-gray-400">
          Double-check everything looks OK before confirming.
        </p>
      </div>

      <div class="flex flex-col">
        <div class="flex flex-col gap-2 bg-Magnolia p-4 rounded-md">
          <div
            class="flex w-full justify-between items-end font-bold text-dark"
          >
            <div class="">
              {{
                `${multistepStore.plan.name} (${_.capitalize(
                  multistepStore.period
                )})`
              }}
              <div class="underline text-gray-400 text-xs font-light">
                Change
              </div>
            </div>

            <div>
              {{
                multistepStore.period === 'monthly'
                  ? multistepStore.plan.monthlyPrice
                  : multistepStore.plan.yearlyPrice
              }}
            </div>
          </div>

          <hr class="my-3" />

          <!-- {{ multistepStore.addOns }} -->
          <div class="flex flex-col gap-4">
            <div
              class="flex justify-between"
              v-for="item in multistepStore.addOns"
            >
              <div class="text-gray-400 text-xs">
                {{ item.name }}
              </div>

              <div class="text-xs text-dark font-medium">
                {{
                  multistepStore.period === 'monthly'
                    ? item.monthlyPrice
                    : item.yearlyPrice
                }}
              </div>
            </div>
          </div>
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
        class="bg-indigo-700 p-2 px-4 font-medium text-white rounded-md"
        @click="emit('next')"
      >
        Confirm
      </button>
    </div>
  </div>
</template>

<script setup>
import _ from 'lodash';
import { useMultiStepStore } from '../../plugins/stores/multistep-store';

const emit = defineEmits(['back', 'next']);

const multistepStore = useMultiStepStore();
</script>

<style lang="scss" scoped></style>
