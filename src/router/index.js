import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import Shop from '../views/Shop.vue';
import Blog from '../views/Blog.vue';
import Contact from '../views/Contact.vue';
import Privacy from '../views/Privacy.vue';
import Login from '../views/Login.vue';
import Signup from '../views/Signup.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/Shop', name: 'Shop', component: Shop },
  { path: '/Blog', name: 'Blog', component: Blog },
  { path: '/Contact', name: 'Contact Us', component: Contact },
  { path: '/Privacy', name: 'Privacy policy', component: Privacy },
  { path: '/Login', name: 'Login', component: Login },
  { path: '/Signup', name: 'Signup', component: Signup },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
