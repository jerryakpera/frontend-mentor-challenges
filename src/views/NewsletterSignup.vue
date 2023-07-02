<template>
  <div
    class="page"
    :class="isMobile ? 'mobile' : ''"
  >
    <div
      class="newsletter"
      :class="isMobile ? 'mobile' : ''"
      v-if="!success"
    >
      <div
        class="col-1"
        :class="isMobile ? 'mobile' : ''"
      >
        <form
          @submit.prevent.stop="handleFormSubmit"
          autocomplete="off"
        >
          <div>
            <h2>Stay updated!</h2>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>

            <ul>
              <li
                v-for="(update, i) in updates"
                :key="i"
              >
                <img
                  src="../assets/images/newsletter-signup/icon-list.svg"
                  alt=""
                />
                {{ update }}
              </li>
            </ul>

            <div class="email-container">
              <div class="label">
                <label for="email">Email address</label>
                <label
                  class="error-msg"
                  v-if="error"
                  >Valid email required</label
                >
              </div>
              <input
                id="email"
                type="text"
                v-model="email"
                placeholder="email@company.com"
              />
            </div>

            <button
              type="submit"
              class="btn"
            >
              Subscribe to monthly newsletter
            </button>
          </div>
        </form>
      </div>
      <div
        class="col-2"
        :class="isMobile ? 'mobile' : ''"
      >
        <img
          src="../assets/images/newsletter-signup/illustration-sign-up-desktop.svg"
          alt=""
          v-if="!isMobile"
        />
        <img
          src="../assets/images/newsletter-signup/illustration-sign-up-mobile.svg"
          alt=""
          v-else
        />
      </div>
    </div>

    <div
      v-if="success"
      class="success-state"
      :class="isMobile ? 'mobile' : ''"
    >
      <div>
        <img
          src="../assets/images/newsletter-signup/icon-success.svg"
          alt=""
        />
        <h2>Thanks for Subscribing!</h2>

        <p>
          A confirmation email has been sent to
          <strong>ash@loremcompany.com</strong>. Please open it and click the
          button inside to confirm your subscription.
        </p>

        <button
          type="submit"
          class="btn"
          @click="handleDismissMessage"
        >
          Dismiss message
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useWindowSize } from 'vue-window-size';

const error = ref(false);
const success = ref(false);
const showImage = ref(false);

const email = ref('');

const { width, height } = useWindowSize();
const isMobile = computed(() => width.value <= 375);

const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

const updates = [
  'Product discovery and building what matters',
  'Measuring to ensure updates are a success',
  'And much more!',
];

const handleFormSubmit = () => {
  if (!regex.test(email.value)) {
    error.value = true;
  } else {
    error.value = false;
    success.value = true;
  }
};

const handleDismissMessage = () => {
  success.value = false;
  error.value = false;
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

$bg: #36384d;
$primary: #ff634c;
$secondary: #242741;
$tomato: hsl(4, 100%, 67%);

$dark-slate-grey: hsl(234, 29%, 20%);
$charcoal-grey: hsl(235, 18%, 26%);
$grey: hsl(231, 7%, 60%);

* {
  font-family: 'Roboto', sans-serif;
}

p {
  font-size: 12px;
}

.page {
  height: calc(100vh - 60px);
  background-color: $charcoal-grey;
  display: flex;
  justify-content: center;
  align-items: center;

  &.mobile {
    // background-color: white;

    p {
      font-size: 13px;
    }
  }

  h2 {
    font-size: 2.65rem;
    color: $dark-slate-grey;
    // line-height: 3rem;

    &.mobile {
      font-size: 2em;
    }
  }

  button {
    background-color: $dark-slate-grey;
    outline: none;
    padding: 12px 10px;
    text-align: center;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    font-size: 0.7em;
    cursor: pointer;
    transition: background 0.2s ease-in-out;

    &:hover {
      background-color: $tomato;
      background-image: linear-gradient(160deg, $tomato 0%, #ff634c 100%);
    }
  }

  .newsletter {
    width: 650px;
    background-color: white;
    border-radius: 25px;
    box-shadow: 2px 4px 8px rgba($color: #000000, $alpha: 0.2);
    display: flex;

    &.mobile {
      flex-direction: column-reverse;
      border-radius: 0;
    }

    .col-1,
    .col-2 {
      &.mobile {
        width: 100%;
      }
    }

    .col-1 {
      width: 55%;
      padding: 10px;
      display: flex;
      border-radius: 25px;
      align-items: center;

      &.mobile {
        padding: 20px;

        form {
          justify-content: start;
          & > div {
            row-gap: 20px;
            width: 100%;
          }
        }
      }

      form {
        width: 100%;
        justify-content: center;
        display: flex;

        & > div {
          width: 80%;
          display: flex;
          flex-direction: column;
          row-gap: 15px;
          color: $dark-slate-grey;
        }
      }

      ul {
        li {
          margin: 0;
          padding: 0;
          font-size: 0.7em;
          margin-bottom: 7px;
          list-style-type: none;
          display: flex;
          gap: 10px;
          font-weight: 400;

          img {
            width: 15px;
          }
        }
      }

      .email-container {
        display: flex;
        flex-direction: column;

        .label {
          display: flex;
          width: 100%;
          justify-content: space-between;

          .error-msg {
            color: $tomato;
          }
        }

        label {
          font-weight: bold;
          font-size: 0.6em;
          margin-bottom: 5px;
        }

        input {
          font-size: 0.7em;
          padding: 12px;
          border-radius: 5px;
          border: 1px solid #ccc;
          color: #aaa;

          &:active,
          &:focus {
            outline: none;
            border: 1px solid #333;
          }
        }

        &.error {
          input {
            border: 1px solid $tomato;
            background-color: #ffe8e6;
            color: $tomato;
          }
        }
      }
    }

    .col-2 {
      width: 45%;
      border-radius: 25px;
      padding: 15px 15px;

      &.mobile {
        padding: 0;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .success-state {
    width: 325px;
    background-color: white;
    border-radius: 25px;
    box-shadow: 2px 4px 8px rgba($color: #000000, $alpha: 0.2);
    color: $dark-slate-grey;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0;

    &.mobile {
      width: 100%;
      height: calc(100vh - 60px);
      border-radius: 0;
      border-radius: none;
      position: relative;

      div {
        height: 100%;

        button {
          position: absolute;
          bottom: 40px;
          width: 76%;
        }
      }
    }

    div {
      width: 76%;
      display: flex;
      flex-direction: column;
      gap: 20px;

      img {
        width: 40px;
      }
    }

    p {
      font-size: 11px;
    }

    h2 {
      line-height: 35px;
      font-size: 2em;
      font-weight: bold !important;
    }
  }
}
</style>

<!--
  - Add their email and submit the form
  - See a success message with their email after successfully submitting the form
  - See form validation messages if:
    - The field is left empty
    - The email address is not formatted correctly
  - View the optimal layout for the interface depending on their device's screen size
  - See hover and focus states for all interactive elements on the page
-->
