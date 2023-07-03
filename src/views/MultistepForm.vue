<template>
  <div
    class="page w-full bg-Light-gray flex justify-center items-center ubuntu"
    :class="width < 700 ? 'p-2' : ''"
  >
    <!-- <img
      src="../challenges/multi-step-form/design/desktop-design-step-1.jpg"
      alt=""
    /> -->
    <div
      id="multi-step-form"
      class="bg-white rounded-lg flex"
    >
      <div
        class="p-3 h-full"
        :class="width < Mobile ? 'w-full' : width < 700 ? 'w-1/2' : 'w-1/3'"
      >
        <div
          class="bg-blue w-full rounded-md h-full sidebar-img"
          :style="`background-image: url('${sidebarBackgroundImage}')`"
        >
          <div class="steps h-full flex flex-col gap-6 pt-8 pl-8">
            <div
              class="step flex gap-4 cursor-pointer uppercase text-white text-xs"
              v-for="i in 4"
              :key="i"
              @click="step = i"
            >
              <div
                class="border border-white h-8 w-8 rounded-full flex justify-center items-center font-bold text-xs text-white"
                :class="step === i ? 'bg-lightBlue text-dark border-0' : ''"
              >
                {{ i }}
              </div>
              <div>
                <h5
                  class="text-gray-400"
                  style="font-size: 11px; letter-spacing: 0.5px"
                >
                  Step 1
                </h5>
                <p class="font-medium tracking-widest">
                  {{ steps[i - 1] }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="h-full flex justify-center"
        :class="width < Mobile ? 'w-full' : width < 700 ? 'w-1/2' : 'w-2/3'"
      >
        <div
          style="width: 70%"
          class="flex flex-col h-full justify-center pt-8"
        >
          <Step1
            v-if="step === 1"
            @back="handleBack"
            @next="handleNext"
            v-model:name="name"
            v-model:email="email"
            v-model:phone="phone"
          />

          <Step2
            v-if="step === 2"
            @back="handleBack"
            @next="handleNext"
          />

          <Step3
            v-if="step === 3"
            @back="handleBack"
            @next="handleNext"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Step1 from '../components/multi-step-form/Step1.vue';
import Step2 from '../components/multi-step-form/Step2.vue';
import Step3 from '../components/multi-step-form/Step3.vue';

import { computed, ref } from 'vue';
import { useWindowSize } from 'vue-window-size';

const Mobile = 375;
const Desktop = 1440;

const step = ref(1);

const name = ref('');
const plan = ref('');
const email = ref('');
const phone = ref('');
const addOns = ref([]);
const period = ref('monthly');

const steps = ['Your info', 'Select a plan', 'Add ons', 'Summary'];

const { width, height } = useWindowSize();

const isMobile = computed(() => width.value <= Mobile);

const sidebarBackgroundImage = computed(() => {
  if (!isMobile.value) {
    return 'images/multi-step-form/bg-sidebar-desktop.svg';
  }

  return 'images/multi-step-form/bg-sidebar-mobile.svg';
});

const handleBack = () => {
  if (step.value === 1) return;
  step.value = step.value - 1;
};

const handleNext = () => {
  if (step.value === 3) return;
  step.value = step.value + 1;
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap');

$Cool-gray: hsl(231, 11%, 63%);
$Light-gray: hsl(229, 24%, 87%);
$Magnolia: hsl(217, 100%, 97%);
$Alabaster: hsl(231, 100%, 99%);
$White: hsl(0, 0%, 100%);
$dark: #002556;

$lightBlue: #bee2ff;

.bg-lightBlue {
  background-color: $lightBlue;
}

.text-dark {
  color: $dark;
}

.bg-dark {
  background-color: $dark;
}

.border-dark {
  border: 1px solid $dark;
}

.text-Cool-gray {
  color: $Cool-gray;
}

.text-Light-gray {
  color: $Light-gray;
}

.bg-Magnolia {
  background-color: $Magnolia;
}

.bg-Light-gray {
  background-color: $Light-gray;
}

.bg-Cool-gray {
  background-color: $Cool-gray;
}

.ubuntu-font {
  font-family: 'Ubuntu', sans-serif;
}

.page {
  height: 100vh;
}

#multi-step-form {
  background-color: 3px 6px 10px rgba(0, 0, 0, 1);
  width: 900px;
  height: 600px;
}

.sidebar-img {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
}
</style>

<!--
Complete each step of the sequence
Go back to a previous step to update their selections
See a summary of their selections on the final step and confirm their order
View the optimal layout for the interface depending on their device's screen size
See hover and focus states for all interactive elements on the page
Receive form validation messages if:
A field has been missed
The email address is not formatted correctly
A step is submitted, but no selection has been made
 -->
