import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/pages/MainPage.vue';
import PostIdPage from '@/pages/PostIdPage.vue';
import PostPageStore from '@/pages/PostPageStore.vue';
const routes = [
    { path: '/', component: Main },
    { path: '/posts', component: PostPageStore },
    { path: '/posts/:id', component: PostIdPage },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
