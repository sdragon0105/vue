import Vue from 'vue'
import Dashboard from '@/views/Dashboard'
import GridSystem from '@/views/GridSystem'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routers = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/grid-system',
        name: 'GridSystem',
        component: GridSystem
    },
]

const router = new VueRouter({
    mode: 'history',
    routers
})

export default router