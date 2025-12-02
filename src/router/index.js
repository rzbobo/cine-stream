import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FindView from '@/views/FindView.vue'
import ClickedContent from '@/components/find/ClickedContent.vue'
import CommunityView from '@/views/CommunityView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import MyPageView from '@/views/MyPageView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/find',
    name: 'find',
    component: FindView
  },
  {
    path: '/clicked/:id',
    name: 'clicked',
    component: ClickedContent
  },
  {
    path: '/community',
    name: 'community',
    component: CommunityView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/myPage',
    name: 'mypage',
    component: MyPageView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
