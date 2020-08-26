import Vue from 'vue'
import VueRouter from 'vue-router'
import User from '@/views/User.vue'
import UserHome from '@/views/UserHome.vue'
import UserProfile from '@/views/UserProfile.vue'
import UserPosts from '@/views/UserPosts.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/user/:id', name: 'User', component: User,
    children: [
      {
        // /user/:id がマッチした時に
        // UserHome は User の <router-view> 内部で描画されます
        path: '',
        component: UserHome
      },
      {
        // /user/:id/profile にマッチした時に
        // UserProfile は User の <router-view> 内部で描画されます
        path: 'profile',
        component: UserProfile
      },
      {
        // /user/:id/posts にマッチした時に
        // UserPosts は User の <router-view> 内部で描画されます
        path: 'posts',
        component: UserPosts
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
