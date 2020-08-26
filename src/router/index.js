import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/user/:id', name: 'User', component: () => import('@/views/User.vue'),
    children: [
      {
        // /user/:id がマッチした時に
        // UserHome は User の <router-view> 内部で描画されます
        path: '',
        component: () => import('@/views/UserHome.vue')
      },
      {
        // /user/:id/profile にマッチした時に
        // UserProfile は User の <router-view> 内部で描画されます
        path: 'profile',
        component: () => import('@/views/UserProfile.vue')
      },
      {
        // /user/:id/profile にマッチした時に
        // UserPosts は User の <router-view> 内部で描画されます
        path: 'posts',
        component: () => import('@/views/UserPosts.vue')
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
