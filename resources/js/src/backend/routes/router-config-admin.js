import {createRouter, createWebHistory} from 'vue-router'
import axios from 'axios'
import routes from './routes-admin'
axios.defaults.baseURL = window.location.origin

const router = createRouter({
 history:createWebHistory("/admin/"),
 fallback:true,
 linkActiveClass:'active',
 routes

})


router.beforeEach((to, from, next) => {
    const loggedIn = localStorage.getItem('user')
    const user = JSON.parse(localStorage.getItem('user'))

    if (to.matched.some(record => record.meta.auth) && !loggedIn) {
        // next('/auth/signin')

        location.href = window.location.origin+'/admin/login'
        return
    } 
    
    next()
    // console.log('user', user); 
    
})

export default router
