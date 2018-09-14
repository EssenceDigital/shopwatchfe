import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/customers',
      name: 'customers',
      // Lazy-loaded when the route is visited
      component: () => import('./views/Customers.vue')
    },
    {
      path: '/work-orders',
      name: 'work-orders',
      // Lazy-loaded when the route is visited
      component: () => import('./views/WorkOrders.vue')
    },
    {
      path: '/invoices',
      name: 'invoices',
      // Lazy-loaded when the route is visited
      component: () => import('./views/Invoices.vue')
    },
    {
      path: '/expenses',
      name: 'expenses',
      // Lazy-loaded when the route is visited
      component: () => import('./views/Expenses.vue')
    },
    {
      path: '/users',
      name: 'users',
      // Lazy-loaded when the route is visited
      component: () => import('./views/Users.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      // Lazy-loaded when the route is visited
      component: () => import('./views/Settings.vue')
    },
    {
      path: '/help',
      name: 'help',
      // Lazy-loaded when the route is visited
      component: () => import('./views/Help.vue')
    }
  ]
})
