import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [

        {
            path: '/home',
            name: 'home',
            component: () => import('@/views/home/index.vue')
        },
        //重定向，在项目跑起来的时候，访问/，立马定向到首页
        {
            path: '/:catchAll(.*)',
            redirect: '/home',
        }
    ],
    scrollBehavior() {
        return { top: 0 }
    }
})

export default router