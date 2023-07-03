<template>
  <div
    class="border border-gray-200 p-4 rounded-md mb-3 flex items-center justify-between cursor-pointer"
    @click="emit('toggleAddOn', addOn.name)"
    :class="selected ? 'bg-Magnolia border-purple-900' : ''"
  >
    <div class="flex gap-6 items-center">
      <div>
        <IconifyIcon
          :icon="selected ? 'mdi:checkbox-marked' : 'carbon:checkbox'"
          class="text-2xl"
          :class="selected ? 'text-blue-700' : 'text-gray-300'"
        />
      </div>

      <div>
        <div class="font-medium text-dark">
          {{ addOn.name }}
        </div>
        <div class="font-medium text-gray-400 text-sm">
          {{ addOn.desc }}
        </div>
      </div>
    </div>

    <div class="justify-self-end text-blue-500 text-xs font-bold">
      {{ addOn.price }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['addOn', 'selected']);
const emit = defineEmits(['toggleAddOn']);
</script>

<style lang="scss" scoped></style>
