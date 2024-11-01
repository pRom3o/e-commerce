<script setup>
import { ref } from 'vue';

const listItems = ref(['Home', 'Shop', 'Pages', 'Blog', 'Elements', 'Buy']); //nav links
const header = ref('PressMart.'); //header
import { icons } from '@/components/Homepage/Svgs.vue'; //svg
const selectedIndex = ref(null);
const SubmitEvent = index => {
  selectedIndex.value = index;
};
</script>

<template>
  <div class="md:h-16 w-full fixed top-0 left-0 z-10 bg-white bg-opacity-50">
    <div class="md:grid grid-cols-3 items-center mx-10">
      <!-- header -->
      <div class="text-center col-start-1 col-span-1 p-2">
        <a href="./Home.vue" class="font-bold text-3xl">{{ header }}</a>
      </div>
      <div class="col-start-2 col-span-1">
        <ul class="flex items-center justify-between transition-all">
          <!-- list item toloop through array and  render all nav links -->
          <li
            class="list-none font-medium"
            v-for="(items, index) in listItems"
            :key="index"
            @click.prevent="SubmitEvent(index)"
          >
            <a
              href="blank"
              class="py-2 px-4 hover:border-b border-custom-blue ease-in-out"
              :class="{
                'border-b border-custom-blue': selectedIndex === index,
              }"
              >{{ items }}</a
            >
          </li>
        </ul>
      </div>
      <div class="col-start-3 col-span-1 p-4">
        <ul class="hidden md:flex items center justify-end">
          <!-- list items for svg at far right -->
          <li v-for="icon in icons" :key="icon.id" class="p-2">
            <a :href="icon.link" v-html="icon.svg"></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
