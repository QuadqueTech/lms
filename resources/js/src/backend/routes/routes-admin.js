import Home from '../../../components/backend/views/Home.vue'
import SignIn from '../../../components/backend/Authentication/SignIn.vue'
import Category from '../../../components/backend/admin/category/Index.vue'
import CreateCategory from '../../../components/backend/admin/category/Create.vue'
let routes = [
    {
        path:'/',
        name:'Home',
        component:Home,
        meta:{
            auth:true
        }
    },
    {
        path:'/login',
        name:'SignIn',
        component:SignIn,
        meta:{
            auth:false
        }
    },
    {
        path:'/course-category',
        name:'Category',
        component:Category,
        meta:{
            auth:true
        }
    },
    {
        path:'/course-category/create',
        name:'CreateCategory',
        component:CreateCategory,
        meta:{
            auth:true
        }
    },
    {
        path:'/course-category/:id',
        name:'CreateCategory',
        component:CreateCategory,
        meta:{
            auth:true
        }
        
    },
]

export default routes