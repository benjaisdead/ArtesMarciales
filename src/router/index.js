import Vue from 'vue'
import VueRouter from 'vue-router'
import BuscadorView from '../views/BuscadorView.vue'
import PersonajeView from '../views/PersonajeView.vue'
import NotFound from '../components/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'buscador',
    component: BuscadorView
  },
  {
    path: '/personaje/:id',
    name: 'personaje',
    component: PersonajeView
  },
  {
    path: '/peleadores',
    name: 'peleadores',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/PeleadoresView.vue')
    }
  },
  {
  path: '*',
  name: 'NotFound',
  component: NotFound,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
