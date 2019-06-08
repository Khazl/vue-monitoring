import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Another from './views/Another.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/another',
      name: 'another',
      component: Another,
    },
  ],
});
