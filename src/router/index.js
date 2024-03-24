import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active', // 匹配当前路由的 RouterLink 默认的 CSS class。如果没有提供，则会使用 router-link-active。
  routes: [
    {
      path: '/',
      name: 'icon',
      component: () => import('@/views/IconView.vue')
    },
    {
      path: '/button',
      name: 'button',
      component: () => import('@/views/ButtonView.vue')
    },
    {
      path: '/card',
      name: 'card',
      component: () => import('@/views/CardView.vue')
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: () => import('@/views/DialogView.vue')
    },
    {
      path: '/collapse',
      name: 'collapse',
      component: () => import('@/views/CollapseView.vue')
    },
    {
      path: '/pager',
      name: 'pager',
      component: () => import('@/views/PagerView.vue')
    },
    {
      path: '/tooltip',
      name: 'tooltip',
      component: () => import('@/views/TooltipView.vue')
    },
    {
      path: '/dropdown',
      name: 'dropdown',
      component: () => import('@/views/DropdownView.vue')
    },
  ]
})

export default router
