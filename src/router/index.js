import { createRouter, createWebHistory } from 'vue-router'
import DefaultHeaderNavigation from '../components/UserComponent/DefualtHeaderNavigation.vue'
import store from '../store/index';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/RegisterView.vue'),
    },
    {
      path: '/forgot',
      name: 'Forgot',
      component: () => import('../views/ForgotPassword.vue'),
    },
    {
      path: '/password-reset/:token',
      name: 'Reset',
      component: () => import('../views/ResetNewPassword.vue'),
    },
    {
      path: '/',
      name: 'home',
      component: DefaultHeaderNavigation,
      children: [
        { 
          path: '/', name: 'HomePage', component: () => import('../views/UserViews/HomePageView.vue')
        },
      ],
      beforeEnter: (to, from, next) => {
        if (store.state.auth.token && store.state.auth.type_of_user !== 'Admin') {
          next()
        } else {
          next('/login')
        }
      }
    },
    {
      path: '/admin',
      name: 'Admin',
      component: () => import('../views/AdminView/HomePageAdminView.vue'),
      beforeEnter: (to, from, next) => {
        if (store.state.auth.token && store.state.auth.type_of_user === 'Admin') {
          next()
        } else {
          next('/login')
        }
      }
    },
  ]
});

export default router;