<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const season = ref('Season Sale');
const main = ref("Men's Fashion");
</script>

<template>
  <div
    class="min-w-midW md:h-land md:bg-customZinc md:overflow-x-hidden no-scrollbar pt-16 mt-16"
  >
    <div
      class="md:flex items-center md:justify-between max-w-7xl h-full m-auto"
    >
      <div class="md:w-1/2 text-center md:mx-6 mx-auto">
        <p
          class="font-playwrite-NL md:text-5xl text-3xl text-custom-blue md:mb-6"
        >
          {{ season }}
        </p>
        <h1 class="md:text-7xl text-4xl font-bold my-4">{{ main }}</h1>
        <p class="md:text-3xl text-xl font-thin font-mono">Min. 35-70% Off</p>

        <div
          class="flex items-center justify-center md:mt-14 mt-4 transition-all text-white"
        >
          <RouterLink
            to="/Shop"
            class="md:px-6 md:py-4 ease-in-out text-sm p-2 mx-1 bg-custom-blue rounded-md hover:bg-opacity-75"
            >SHOP NOW</RouterLink
          >
          <RouterLink
            to="/Blog"
            class="md:px-6 md:py-4 ease-in-out text-sm p-2 mx-1 bg-custom-blue rounded-md hover:bg-opacity-75"
            >READ MORE</RouterLink
          >
        </div>
      </div>
      <div class="w-1/2 h-full md:flex mb-4">
        <img
          src="@\assets\Autumn___Winter_2016_Lookbook-removebg-preview.png"
          alt="A male Model"
          class="hidden md:block w-full h-full object-contain md:flex-shrink-0"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-blue {
  border-radius: 3px;
  background-color: #346eea;
  color: #e4e4e7;
  padding: 0.7rem 1.2rem;
  margin: 0 0 1rem 1rem;
}

.btn-light {
  border-radius: 3px;
  background-color: #e5e5e5;
  border: 2px solid #346eea;
  padding: 0.55rem 0.8rem;
  color: #346eea;
  margin: 0 0 1rem 1rem;
}

.btn-blue:hover {
  border-radius: 3px;
  background-color: #e5e5e5;
  border: 2px solid #346eea;
  padding: 0.55rem 1rem;
  color: #346eea;
  margin: 0 0 1rem 1rem;
}

.btn-light:hover {
  border-radius: 3px;
  background-color: #346eea;
  color: #e4e4e7;
  padding: 0.55rem 0.75rem;
  margin: 0 0 1rem 1rem;
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
