import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import projects from '../views/projects.vue'
import experience from '../views/experience.vue'
import skills from '../views/skills.vue'
import proj from '../components/project.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/experience',
        name: 'my experience',
        component: experience
    },
    {
        path: '/projects',
        name: 'projects',
        component: projects
    },
    {
        path: '/skills',
        name: 'skills',
        component: skills
    },
    {
        path: '/projec-details',
        name: 'project',
        component: proj
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router