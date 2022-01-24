import {createRouter, createWebHistory} from 'vue-router'
import axios from 'axios'
import routes from './routes-teacher'
axios.defaults.baseURL = window.location.origin

const router = createRouter({
 history:createWebHistory("/teacher/"),
 fallback:true,
 routes

})


router.beforeEach((to, from, next) => {
    const loggedIn = localStorage.getItem('user')
    const user = JSON.parse(localStorage.getItem('user'))

    if (to.matched.some(record => record.meta.auth) && !loggedIn) {
        // next('/auth/signin')
        location.href = window.location.origin+'/admin/signin'
        return
    } 
    // console.log('user', user); 
    
    next()

    
    
    
})

export default router
