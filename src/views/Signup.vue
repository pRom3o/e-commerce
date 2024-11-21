<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Nav from '../components/Homepage/Nav.vue';
</script>

<template>
  <Nav />
  <div
    class="w-full h-screen flex items-center justify-center md:py-8 md:bg-zinc-200"
  >
    <div class="md:w-signup w-full md:h-full h-land md:py-4 px-4 my-4 md:mt-14">
      <div class="flex justify-between gap-2 h-full">
        <div
          class="rounded-xl md:border md:shadow-lg w-full md:max-w-1/2 md:bg-white md:py-6"
        >
          <div
            class="flex flex-col justify-between gap-8 px-6 max-w-full leading-none md:mx-4 h-full"
          >
            <form class="md:mx-16 flex flex-col gap-6 my-auto md:my-0">
              <div class="w-full text-center mb-10 md:mt-10">
                <h1
                  class="md:text-4xl text-3xl font-medium mb-2 md:mt-18 text-custom-blue-2"
                >
                  Create an account
                </h1>
                <p>Please fill in your details</p>
              </div>
              <div class="flex flex-col w-full">
                <label for="email" class="font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="outline-none border-b p-2 border-black mb-4"
                />
                <div class="md:grid md:grid-cols-2 gap-3 mt-4 mb-8">
                  <div class="flex flex-col w-full mb-6">
                    <label for="firstName" class="font-medium"
                      >First Name</label
                    >
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      class="outline-none border-b p-2 border-black rounded-0"
                    />
                  </div>
                  <div class="flex flex-col w-full">
                    <label for="lastName" class="font-medium">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      class="outline-none border-b p-2 border-black rounded-0"
                    />
                  </div>
                </div>
                <div class="mb-4 flex flex-col">
                  <label for="password" class="font-medium">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    class="outline-none border-b p-2 border-black rounded-0"
                  />
                </div>
                <div class="my-4 flex flex-col">
                  <label for="confirmPassword" class="font-medium"
                    >Confirm password</label
                  >
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    class="outline-none border-b p-2 border-black rounded-0"
                  />
                </div>
              </div>
              <div class="flex justify-between items-center md:mb-8">
                <div class="flex items-center gap-1 w-full">
                  <input type="checkbox" name="remember" id="remember" />
                  <p class="font-medium">Remember me for 30 days</p>
                </div>
              </div>
              <div class="flex flex-col gap-5 items-center text-center w-full">
                <button
                  class="w-full bg-custom-blue-2 text-white font-medium rounded-3xl p-4 hover:bg-opacity-85"
                >
                  Create account
                </button>
                <button
                  class="w-full bg-gray-100 font-medium rounded-3xl p-4 hover:bg-gray-200 flex justify-center items-center gap-2"
                >
                  <p class="w-6 h-6 mr-3 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      width="20px"
                      height="20px"
                    >
                      <path
                        fill="#EA4335"
                        d="M24 9.5c3.58 0 6.61 1.24 9.09 3.26l6.82-6.82C35.51 2.37 30.12 0 24 0 14.97 0 7.18 5.63 3.54 13.75l7.64 5.93C12.75 12.33 17.95 9.5 24 9.5z"
                      />
                      <path
                        fill="#34A853"
                        d="M46.5 24c0-1.61-.14-3.18-.41-4.69H24v9.39h12.73c-.55 3.13-2.19 5.79-4.71 7.61l7.42 5.76C44.38 37.38 46.5 31.08 46.5 24z"
                      />
                      <path
                        fill="#FBBC04"
                        d="M10.54 28.63c-.5-1.48-.79-3.05-.79-4.63s.28-3.15.79-4.63L2.91 13.46C1.06 17.08 0 20.94 0 24.5s1.06 7.42 2.91 11.04l7.63-5.91z"
                      />
                      <path
                        fill="#4285F4"
                        d="M24 48c6.12 0 11.29-2.03 15.05-5.5l-7.42-5.76C29.85 38.9 27.06 39.5 24 39.5c-6.05 0-11.25-3.88-13.18-9.42l-7.63 5.91C7.18 42.38 14.97 48 24 48z"
                      />
                      <path fill="none" d="M0 0h48v48H0z" />
                    </svg>
                  </p>
                  Sign up with Google
                </button>
              </div>
            </form>
            <div class="mx-auto mb-8">
              <p>
                Already have an account?
                <RouterLink
                  to="/Login"
                  class="font-medium text-custom-blue underline"
                  >Login</RouterLink
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
