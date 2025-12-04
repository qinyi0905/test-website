import { createWebHistory, createRouter } from 'vue-router';

import HomeView from './components/HomeView.vue';

const routes = [
    { path: '/', component: HomeView, name: "home" },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;