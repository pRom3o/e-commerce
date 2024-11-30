<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Nav from '../components/Homepage/Nav.vue';
import { reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email, helpers } from '@vuelidate/validators';

const state = reactive({
  contact: {
    email: '', //matches state.email
  },
  password: '',
  agree: false,
});

const rules = {
  contact: {
    email: { required, email }, // Matches state.contact.email
  },
  password: { required },
  agree: {
    required: helpers.withMessage(
      'You must agree to be remembered.',
      value => value === true,
    ),
  },
};

const v$ = useVuelidate(rules, state);

const submit = () => {
  v$.value.$touch();
  if (v$.value.$invalid) {
    console.log('Form is invalid');
    return;
  }
  console.log('Form submitted successfully', state);
};
</script>

<template>
  <Nav />
  <div
    class="w-full h-screen flex items-center justify-center py-8 md:bg-zinc-200"
  >
    <div class="md:w-login w-full md:h-full h-land p-4 my-4 md:mt-14">
      <div class="flex justify-between gap-2 h-full">
        <img
          src="@\assets\login2.png"
          alt="Login"
          class="w-1/2 border hidden md:block h-side my-auto"
        />
        <form
          @submit.prevent="submit"
          class="h-full rounded-xl md:w-1/2 w-full p-6 flex flex-col items-center justify-between md:bg-gray-50 md:shadow-md"
        >
          <div
            class="md:min-h-96 mx-6 md:my-36 my-12 md:w-3/4 w-full flex flex-col justify-between gap-14 items-center"
          >
            <div class="text-center">
              <h1 class="md:text-5xl text-4xl font-medium">Welcome back!</h1>
              <p>please enter your details</p>
            </div>
            <div class="flex flex-col gap-3 w-full">
              <label for="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                v-model="state.contact.email"
                class="w-full px-2 outline-none bg-transparent border-b border-black mb-2"
              />
              <span
                class="text-red-500"
                v-for="error of v$.contact.email.$errors"
                :key="error.$uid"
                >{{ error.$message }}</span
              >
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                v-model="state.password"
                class="w-full px-2 outline-none bg-transparent border-b border-black"
              />
              <span
                class="text-red-500"
                v-for="error of v$.password.$errors"
                :key="error.$uid"
                >{{ error.$message }}</span
              >
            </div>
            <div class="flex flex-col items-center w-full">
              <div class="flex justify-between items-center w-full">
                <p class="text-sm flex gap-2 items-center">
                  <input
                    type="checkbox"
                    name="agree"
                    id="agree"
                    v-model="state.agree"
                  />Remember for 30 days
                </p>

                <a href="#" class="underline text-xs">forgot password?</a>
              </div>
              <span
                class="text-red-500"
                v-for="error of v$.agree.$errors"
                :key="error.$uid"
                >{{ error.$message }}</span
              >
            </div>

            <div class="flex flex-col gap-3 w-full">
              <button
                @click="submit"
                class="w-full rounded-full bg-custom-blue text-white p-3"
              >
                Log In
              </button>
              <button class="w-full rounded-full bg-gray-300 text-black p-3">
                Log In with Google
              </button>
            </div>
          </div>
          <p class="">
            Don't have an account?
            <RouterLink
              :to="{ path: '/Signup' }"
              class="text-custom-blue underline"
              >Sign up</RouterLink
            >
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
