<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Nav from '@/components/Homepage/Nav.vue';
// import items from '@/components/svg.vue';
import { ref } from 'vue';
const header = ref('Get in Touch');
const largeText = ref("Let's Chat, Reach Out to Us");
const smallText = ref(
  "Have questions or feedback? We're here to help. Send us a message and we'll respond within 24 hours.",
);
const items = ref([
  {
    name: 'Email',
    id: 'pressmart@gmail.com',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg>`,
    link: 'mailto:alameleromeo1@gmail.com',
  },
  {
    name: 'Phone',
    id: '(0250)82347213',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg>`,
    link: 'tel:+025082347213',
  },
]);
</script>

<template>
  <Nav />
  <div class="py-16 bg-customZinc font-sans">
    <div
      class="md:max-w-7xl max-h-contact md:flex items-center jusify-center gap-4 mt-16 md:mx-auto mx-8"
    >
      <form
        class="md:w-full rounded-3xl md:p-8 p-4 border bg-zinc-100 shadow-sm"
      >
        <h1 class="text-custom-blue-2 text-xl font-medium mb-4 mt-4">
          {{ header }}
        </h1>
        <p class="text-2xl md:text-6xl font-medium md:mb-6 mb-3">
          {{ largeText }}
        </p>
        <p class="leading-6 md:text-base text-sm md:font-medium md:mb-10 mb-4">
          {{ smallText }}
        </p>
        <div class="h-line bg-zinc-200 rounded-full mb-6"></div>
        <div class="w-full flex flex-col">
          <div class="w-full md:flex gap-3 md:gap-6">
            <div class="md:w-1/2">
              <label for="first name" class="font-medium block mb-3"
                >First Name</label
              >
              <input
                type="text"
                name="first name"
                id="first name"
                placeholder="First name"
                class="p-3 rounded-md w-full bg-slate-50 focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div class="md:w-1/2">
              <label for="last name" class="font-medium block mb-3"
                >Last Name</label
              >
              <input
                type="text"
                name="last name"
                id="last name"
                placeholder="Last name"
                class="p-3 rounded-md w-full bg-slate-50 focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
          </div>
          <label for="email address" class="font-medium block mt-6 mb-3"
            >Email address</label
          >
          <input
            type="text"
            name="email address"
            id="email address"
            placeholder="Email address"
            class="p-3 rounded-md w-full bg-slate-50 focus:outline-none focus:ring focus:border-blue-500"
          />
          <label for="message" class="font-medium block mt-6 mb-3"
            >Message</label
          >
          <textarea
            type="text"
            name="message"
            id="message"
            placeholder="Leave us a message"
            class="p-3 rounded-md w-full resize-none md:h-52 h-28 bg-slate-50 focus:outline-none focus:ring focus:border-blue-500"
          />
          <div class="flex justify-between mt-6 items-center">
            <div class="flex gap-3">
              <input type="checkbox" />
              <p class="text-custom-blue-2 md:text-base text-xs">
                I agree to our friendly
                <span class="underline"
                  ><RouterLink to="/Privacy">privacy policy</RouterLink></span
                >
              </p>
            </div>
            <button
              type="submit"
              class="md:px-6 px-4 md:ml-0 ml-3 py-2 bg-custom-blue-2 text-custom-zinc-2 rounded-md hover:bg-opacity-80"
            >
              send
            </button>
          </div>
        </div>
      </form>
      <div class="hidden w-full h-full md:flex flex-col gap-4">
        <img
          src="@/assets/Business Card.png"
          class="rounded-3xl w-full h-2/3 center cover border shadow-sm"
        />
        <div
          class="rounded-3xl w-full h-1/3 flex flex-col gap-4 bg-zinc-100 p-6 shadow-sm"
        >
          <div
            class="bg-slate-50 rounded-3xl p-4 items-center h-full"
            v-for="(item, index) in items"
            :key="index"
          >
            <div class="w-full flex gap-4 h-full items-center">
              <a
                :href="item.link"
                target="_self"
                class="p-5 rounded-full bg-svg text-custom-blue"
                v-html="item.svg"
              ></a>
              <div class="flex flex-col gap-4 w-full">
                <h1 class="text-2xl font-medium">{{ item.name }}</h1>
                <p class="text-xl">{{ item.id }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
