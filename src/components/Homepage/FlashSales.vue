<script setup>
import { ref } from 'vue';

const flashs = ref([
  {
    head: 'Weekend Sale',
    main: "Men's Fashion",
    par: 'Flat',
    tBlue: '70% Off',
    bgImage: 'src/assets/male2.jpg',
  },
  {
    head: 'Fashion Style',
    main: "Women's Wear",
    par: 'Min.',
    tBlue: '35-70% Off',
    bgImage: 'src/assets/sunglass1.jpeg',
  },
]);
</script>

<template>
  <div
    class="flex flex-col md:grid grid-cols-2 gap-3 md:max-w-7xl h-flash my-6 mx-auto text-left"
    @click.prevent="SubmitEvent"
  >
    <div
      class="h-full rounded-md p-6 mx-3 bg-center bg-cover transition-transform duration-500 ease-in-out transform md:hover:scale-105"
      v-for="(flash, index) in flashs"
      :key="index"
      :style="{ backgroundImage: `url(${flash['bgImage']})` }"
    >
      <div class="top-0 left-0">
        <p class="mb-3 font-medium">{{ flash.head }}</p>
        <h1 class="mb-2 text-3xl font-bold">{{ flash.main }}</h1>
        <p class="mb-6 text-xl font-medium">
          {{ flash.par }}
          <strong class="text-custom-blue font-medium">{{
            flash.tBlue
          }}</strong>
        </p>
        <a href="#" class="flex items-center hover:underline"
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
  </div>
</template>
