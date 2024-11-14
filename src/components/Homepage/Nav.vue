<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue';

//nav links
const listItems = ref([
  { name: 'Home', path: '/' },
  { name: 'Shop', path: '/Shop' },
  { name: 'Blog', path: '/Blog' },
  { name: 'Contact Us', path: '/Contact' },
]);

const header = ref('PressMart.'); //header
import { icons } from '@/components/Homepage/Svgs.vue'; //svg
import { useRoute, RouterLink } from 'vue-router';
// const selectedIndex = ref(null);
// const SubmitEvent = index => {
//   selectedIndex.value = index;
//   console.log(selectedIndex.value);
//   console.log('hello');
// };

// const router = useRouter();
const route = useRoute();

// Computed property to determine active link
const isActive = path => route.path === path;
</script>

<template>
  <div class="md:h-16 w-full fixed top-0 left-0 z-10 bg-white backdrop-blur-lg">
    <div
      class="md:flex md:flex-wrap justify-between items-center md:mx-16 mx-2"
    >
      <!-- header -->
      <div class="text-center p-2">
        <RouterLink to="/" class="font-bold text-3xl">{{ header }}</RouterLink>
      </div>
      <div class="mx-2">
        <ul class="flex flex-wrap items-center justify-evenly transition-all">
          <!-- list item toloop through array and  render all nav links -->
          <li
            class="list-none mx-2"
            v-for="(item, index) in listItems"
            :key="index"
          >
            <RouterLink
              :to="item.path"
              class="px-2 py-2 hover:border-b border-custom-blue ease-in-out"
              :class="{
                'border-b border-custom-blue': isActive(item.path),
              }"
              >{{ item.name }}
            </RouterLink>
          </li>
        </ul>
      </div>
      <div class="p-4">
        <ul class="hidden md:flex items-center justify-end">
          <!-- list items for svg at far right -->
          <li v-for="icon in icons" :key="icon.id" class="p-2">
            <a :href="icon.link" v-html="icon.svg"></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
