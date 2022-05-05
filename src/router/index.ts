import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home.vue'),
    meta: {
      title: '首页'
    }
  }
];
const router = createRouter({
  routes,
  history: createWebHashHistory()
});
router.beforeEach((to, from) => {
  if (to.meta.title != '') {
    document.title = to.meta.title + '';
  }
});
export default router;
