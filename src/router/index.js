import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import About from '../views/About.vue'
import Home from '../components/Home.vue'
import per from '../components/Per.vue'
import gk from '../components/gk.vue'
import msg from '../components/message.vue'


const routes = [
  {
    path: '/',
    name: 'Login',
		meta:{requireAuth:false},
    component: Login
  },
  {
    path: '/about',
    name: 'About',
		meta:{requireAuth:false},
    component: About,
		children:[
			{
				path:'List',
				meta:{requireAuth:true},
				component:Home
			},
			{
				path:'per',
				meta:{requireAuth:true},
				component:per
			},
			{
				path:'gk',
				meta:{requireAuth:true},
				component:gk
			},
			{
				path:'msg',
				meta:{requireAuth:true},
				component:msg
			}
		],
		redirect:'/about/List'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})
router.beforeEach((to,from,next) => {
		if(to.path === '/'){
			next()
		}else{
			if(to.meta.requireAuth){
				next()
			}else{
				next()
			}
		}
	})

export default router
