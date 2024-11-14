<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue';
import Nav from '@/components/Homepage/Nav.vue';

const Onsale = ref([
  {
    bgImage: 'src/assets/leatherbag1.jpeg',
    p2: 'Tan Solid Laptop Backpack',
    p3: '$149.00 - $185.00',
  },
  {
    bgImage: 'src/assets/leatherbag1.jpeg',
    p2: 'Tan Solid Laptop Backpack',
    p3: '$149.00 - $185.00',
  },
  {
    bgImage: 'src/assets/leatherbag1.jpeg',
    p2: 'Tan Solid Laptop Backpack',
    p3: '$149.00 - $185.00',
  },
  {
    bgImage: 'src/assets/leatherbag1.jpeg',
    p2: 'Tan Solid Laptop Backpack',
    p3: '$149.00 - $185.00',
  },
  {
    bgImage: 'src/assets/leatherbag1.jpeg',
    p2: 'Tan Solid Laptop Backpack',
    p3: '$149.00 - $185.00',
  },
  {
    bgImage: 'src/assets/leatherbag1.jpeg',
    p2: 'Tan Solid Laptop Backpack',
    p3: '$149.00 - $185.00',
  },
  {
    bgImage: 'src/assets/leatherbag1.jpeg',
    p2: 'Tan Solid Laptop Backpack',
    p3: '$149.00 - $185.00',
  },
  {
    bgImage: 'src/assets/leatherbag1.jpeg',
    p2: 'Tan Solid Laptop Backpack',
    p3: '$149.00 - $185.00',
  },
  {
    bgImage: 'src/assets/leatherbag1.jpeg',
    p2: 'Tan Solid Laptop Backpack',
    p3: '$149.00 - $185.00',
  },
  {
    bgImage: 'src/assets/leatherbag1.jpeg',
    p2: 'Tan Solid Laptop Backpack',
    p3: '$149.00 - $185.00',
  },
]);
</script>

<template>
  <Nav />
  <div
    class="md:overflow-x-hidden no-scrollbar pt-16 mt-16 md:pt-8 md:max-w-blog"
  >
    <div class="mx-4 md:flex flex-wrap justify-center md:mx-auto">
      <div class="" v-for="(item, index) in Onsale" :key="index">
        <div class="md:max-w-full h-96 shadow-lg rounded-lg mx-3">
          <div
            class="h-2/3 bg-center bg-cover rounded-sm transition-transform duration-500 ease-in-out transform hover:scale-105"
            :style="{ backgroundImage: `url(${item['bgImage']})` }"
          ></div>
          <div class="h-1/3 text-left p-2">
            <p class="text-base font-semibold">{{ item.p2 }}</p>
            <p class="font-medium text-lg">{{ item.p3 }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
