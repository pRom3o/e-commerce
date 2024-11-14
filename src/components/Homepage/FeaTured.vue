<script setup>
import { ref } from 'vue';
import { availableItems } from '@/components/Homepage/FeaTureds.vue';
const top = ref('Featured Products');
// const topLinks = ref(['New Arrival', 'Best Selling', 'Top Rated']);
// const selectedIndex = ref(null);
// const SubmitEvent = index => {
//   selectedIndex.value = index;
// };
</script>

<template>
  <div class="max-w-7xl h-hero md:h-land md:mt-24 mb-8 mx-auto">
    <div class="max-w-sm mx-auto md:mt-6 mt-16 text-center">
      <h1 class="font-bold text-2xl">{{ top }}</h1>
    </div>
    <div
      class="flex flex-col items-center justify-center h-full gap-3 my-6 mx-4"
    >
      <div
        class="overflow-y-auto no-scrollbar md:overflow-y-hidden max-h-full mb-20"
      >
        <div class="grid gap-3 md:grid-cols-5">
          <div class="" v-for="(item, index) in availableItems" :key="index">
            <div class="md:max-w-full h-80 md:h-80">
              <div
                class="h-2/3 bg-center bg-cover rounded-sm transition-transform duration-500 ease-in-out transform hover:scale-105"
                :style="{ backgroundImage: `url(${item['bgImage']})` }"
              ></div>
              <div class="h-1/3 text-left p-2">
                <p class="text-xs">{{ item.p1 }}</p>
                <p class="text-base font-semibold">{{ item.p2 }}</p>
                <p class="font-bold text-lg">{{ item.p3 }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
