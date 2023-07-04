<template>
  <div
    class="p-4 flex flex-col gap-9 rounded-lg border cursor-pointer transition-all duration-200"
    :class="selected ? 'border-dark bg-Magnolia' : 'border-gray-300'"
  >
    <div class="icon">
      <img
        alt=""
        width="35"
        :src="icon"
      />
    </div>

    <div>
      <div class="plan font-bold text-dark ubuntu">
        {{ name }}
      </div>
      <div
        class="price text-gray-400 text-xs font-medium"
        v-if="period === 'monthly'"
      >
        {{ monthlyPrice }}
      </div>
      <div
        class="price text-gray-400 text-xs font-medium"
        v-if="period === 'yearly'"
      >
        {{ yearlyPrice }}
      </div>
      <div
        style="font-size: 0.7em"
        v-if="period === 'yearly'"
        class="price text-dark font-medium"
      >
        2 months free
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useMultiStepStore } from '../../plugins/stores/multistep-store';

const props = defineProps([
  'icon',
  'name',
  'period',
  'yearlyPrice',
  'monthlyPrice',
]);

const multistepStore = useMultiStepStore();

const selected = computed(() => {
  return multistepStore.plan.name === props.name;
});
</script>

<style lang="scss" scoped></style>
