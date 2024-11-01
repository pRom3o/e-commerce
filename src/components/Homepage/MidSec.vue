<script setup>
import { ref } from 'vue';
import { svgs } from './MidSvgs.vue';

const headers = ref([
  { id: 'Free Shipping', value: 'On All Orders Over $99', svgKey: 'ship' },
  { id: 'Secure Payment', value: 'We ensure secure payment', svgKey: 'secure' },
  { id: '100% Money Back', value: '30 Days Return Policy', svgKey: 'refund' },
  {
    id: 'Online Support',
    value: '24/7 Uninterrupted support',
    svgKey: 'support',
  },
]);
</script>

<template>
  <div class="w-2xl h-mid mx-20 my-auto" @click.prevent="SubmitEvent">
    <div
      class="hidden md:flex justify-between max-h-16 md:my-6 mx-auto max-w-7xl"
    >
      <div
        class="mx-4 text-sm"
        v-for="{ id, value, svgKey } in headers"
        :key="id"
      >
        <div class="bg-custom-zinc-2 rounded-lg p-4 flex items-center">
          <p class="text-custom-blue" v-html="svgs[svgKey]"></p>
          <div class="mx-4">
            <div class="">{{ id }}</div>
            <div class="">{{ value }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid h-full md:flex md:h-side md:max-w-7xl md:mx-auto p-2">
      <div
        class="rounded-md md:mr-4 bg-[url('@/assets/woman.jpeg')] bg-cover mx-6 my-4 md:w-1/2 transition-transform duration-500 ease-in-out transform hover:scale-105"
      >
        <div
          class="flex flex-col items-end relative top-0 right-0 text-right mx-8 my-6 text-zinc-300"
        >
          <p class="text-custom-blue font-semibold text-2xl my-4">
            New Arrivals!!
          </p>
          <h2 class="text-4xl font-semibold mb-3">Women's Style</h2>
          <p class="text-2xl">Up to 70% Off</p>
          <button
            class="rounded-full border-2 border-white text-white font-medium py-2 px-5 my-4 hover:opacity-70 transition-all ease-in-out duration-500"
          >
            Shop Now
          </button>
        </div>
      </div>
      <div class="rounded-md flex flex-col justify-between md:w-1/2 ml-3 my-4">
        <div class="flex justify-between text-left h-1/2">
          <div
            class="w-1/2 mr-4 p-4 relative top-0 left-0 leading-2 rounded-xl bg-[url('@/assets/bag1.jpg')] bg-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
          >
            <div class="promo">25% OFF</div>
            <h2 class="text-3xl text-white font-bold mt-2 mb-6">Handbag</h2>
            <a href="#" class="text-white flex items-center hover:underline"
              >Shop Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                /></svg
            ></a>
          </div>
          <div
            class="w-1/2 p-4 relative top-0 left-0 leading-2 rounded-xl bg-[url('@/assets/watch.jpg')] bg-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
          >
            <div class="promo mb-3">45% OFF</div>
            <h2 class="text-3xl text-zinc-500 font-bold mt-2 mb-7">Watch</h2>
            <a href="#" class="text-zinc-400 flex items-center hover:underline"
              >Shop Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                /></svg
            ></a>
          </div>
        </div>
        <div
          class="p-4 md:pl-8 md:pt-4 text-left text-zinc-600 rounded-xl h-1/2 mt-4 bg-[url('@/assets/backpack.jpg')] bg-center bg-cover bg-no-repeat transition-transform duration-500 ease-in-out transform hover:scale-105"
        >
          <p class="font-medium text-lg mb-3">Accessories</p>
          <h2 class="text-4xl font-extrabold mb-4">Backpack</h2>
          <p class="font-medium text-lg mb-3">Min. 40-80% Off</p>
          <p class="flex items-center w-24 border-b-2 border-zinc-600">
            <a href="#">Shop Now</a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
              />
            </svg>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.promo {
  padding: 0 6px;
  color: #ffffff;
  background-color: #1d4ed8;
  font-weight: 500;
  width: 70px;
  text-align: center;
}
</style>
