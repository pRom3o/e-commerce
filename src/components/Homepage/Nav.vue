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
// const isIn = ref(true);
const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
// const router = useRouter();
const route = useRoute();

// Computed property to determine active link
const isActive = path => route.path === path;
</script>

<template>
  <div class="h-16 w-full fixed top-0 left-0 z-10 backdrop-blur-sm">
    <div
      class="flex md:flex-wrap justify-between items-center md:mx-16 mx-4 h-full"
    >
      <!-- header -->
      <div class="text-center p-2">
        <RouterLink to="/" class="font-bold text-3xl">{{ header }}</RouterLink>
      </div>
      <div class="mx-2">
        <ul
          class="hidden sm:flex flex-wrap items-center justify-evenly transition-all"
        >
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
        <ul class="hidden sm:flex items-center justify-end">
          <!-- list items for svg at far right -->
          <li
            v-for="icon in icons"
            :key="icon.id"
            class="p-2 hover:bg-gray-200 text-custom-blue rounded-full"
          >
            <RouterLink :to="icon.path"
              ><span v-html="icon.svg"></span
            ></RouterLink>
          </li>
        </ul>
      </div>
      <!-- mobile menu -->
      <div
        class="md:hidden fixed right-0 top-0 flex items-center justify-center"
      >
        <button
          class="flex cursor-pointer flex-col gap-1 p-4 transition-all sm:hidden rounded-md absolute top-1 right-0"
          @click="toggleMenu"
        >
          <span
            class="inline-block transition-transform duration-300 ease-in-out"
            :class="{ 'rotate-45': isMenuOpen, 'rotate-0': !isMenuOpen }"
          >
            <svg
              v-if="!isMenuOpen"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </button>
        <!-- mobile menu items -->
        <div class="text-center flex items-center justify-center">
          <transition name="dropdown" appear>
            <TransitionGroup
              name="fade"
              tag="ul"
              appear
              v-if="isMenuOpen"
              class="flex flex-col justify-center items-center absolute top-14 right-0 w-screen h-screen md:hidden p-6 space-y-5 bg-gray-100 text-custom-blue transition-transform duration-300 ease-in-out"
            >
              <li
                class="list-none mx-2 transition-all"
                v-for="(item, index) in listItems"
                :key="index"
              >
                <RouterLink
                  :to="item.path"
                  class="px-2 py-2 hover:border-b border-custom-blue ease-in-out"
                  >{{ item.name }}
                </RouterLink>
              </li>
              <!-- list items for svg at far right -->
              <li v-for="icon in icons" :key="icon.id">
                <RouterLink :to="icon.path" class="p-2 text-custom-blue"
                  ><span v-html="icon.id"></span
                ></RouterLink>
              </li>
            </TransitionGroup>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-from {
  opacity: 0;
  transform: translateY(100px) scale(0.85);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-70px) scale(0.85);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-in-out 0.2s;
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.5s ease;
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-50px) scale(0.95);
}

.dropdown-enter-to,
.dropdown-leave-from {
  opacity: 1;
  transform: scale(1);
}

.rotate-0 {
  transform: rotate(0deg);
}

.rotate-45 {
  transform: rotate(90deg);
}
</style>
