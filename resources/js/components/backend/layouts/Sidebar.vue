<template>
    <div class="mdk-drawer js-mdk-drawer" id="default-drawer">
        <div class="mdk-drawer__content">
            <div class="sidebar sidebar-dark-pickled-bluewood sidebar-left" data-perfect-scrollbar>

                <!-- Sidebar Content -->

                <div class="d-flex align-items-center navbar-height">
                    <form action="index.html" class="search-form search-form--black mx-16pt pr-0 pl-16pt">
                        <input type="text" class="form-control pl-0" placeholder="Search">
                        <button class="btn" type="submit"><i class="material-icons">search</i></button>
                    </form>
                </div>

                <a href="index.html" class="sidebar-brand ">
                    <!-- <img class="sidebar-brand-icon" :src="image_url+'/image/images/illustration/student/128/white.svg'" alt="Luma"> -->

                    <span class="avatar avatar-xl sidebar-brand-icon h-auto">

                        <span class="avatar-title rounded bg-primary"><img
                                :src="image_url+'/images/logo/white-100@2x.png'" class="img-fluid"
                                alt="logo" /></span>

                    </span>

                    <span>Luma</span>
                </a>

                <div class="sidebar-heading">Courses</div>
                <ul class="sidebar-menu">

                    <li class="sidebar-menu-item" :class="{'active':path == '/'}">
                        <router-link class="sidebar-menu-button" to="/">
                            <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">home</span>
                            <span class="sidebar-menu-text">Home</span>
                        </router-link>
                    </li>
                   
                    <li class="sidebar-menu-item" :class="{'active':path == '/category'}">
                        <router-link class="sidebar-menu-button" to="/category">
                            <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">account_box</span>
                            <span class="sidebar-menu-text">Category</span>
                        </router-link>
                    </li>
                    <li class="sidebar-menu-item" :class="{'active':path == '/class-room'}">
                        <router-link class="sidebar-menu-button" to="/class-room">
                            <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">room</span>
                            <span class="sidebar-menu-text">Class Room</span>
                        </router-link>
                    </li>
                    <li class="sidebar-menu-item" :class="{'active':path == '/course'}">
                        <router-link class="sidebar-menu-button" to="/course">
                            <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">class</span>
                            <span class="sidebar-menu-text">Course</span>
                        </router-link>
                    </li>
                    

                </ul>
                <div class="sidebar-heading">Instructor</div>
                <ul class="sidebar-menu">

                    <li class="sidebar-menu-item">
                        <a class="sidebar-menu-button" href="instructor-dashboard.html">
                            <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">school</span>
                            <span class="sidebar-menu-text">Instructor Dashboard</span>
                        </a>
                    </li>
                    <li class="sidebar-menu-item">
                        <a class="sidebar-menu-button" href="instructor-courses.html">
                            <span
                                class="material-icons sidebar-menu-icon sidebar-menu-icon--left">import_contacts</span>
                            <span class="sidebar-menu-text">Manage Courses</span>
                        </a>
                    </li>
                    <li class="sidebar-menu-item">
                        <a class="sidebar-menu-button" href="instructor-quizzes.html">
                            <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">help</span>
                            <span class="sidebar-menu-text">Manage Quizzes</span>
                        </a>
                    </li>
                </ul>

                <div class="sidebar-heading">Applications</div>
                <ul class="sidebar-menu">

                    <li class="sidebar-menu-item">
                        <a class="sidebar-menu-button js-sidebar-collapse" data-toggle="collapse"
                            href="#enterprise_menu">
                            <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">donut_large</span>
                            Enterprise
                            <span class="ml-auto sidebar-menu-toggle-icon"></span>
                        </a>
                        <ul class="sidebar-submenu collapse sm-indent" id="enterprise_menu">
                           
                            <li class="sidebar-menu-item">
                                <a class="sidebar-menu-button" href="employees.html">
                                    <span class="sidebar-menu-text">Employees</span>
                                </a>
                            </li>
                            <li class="sidebar-menu-item">
                                <a class="sidebar-menu-button" href="staff.html">
                                    <span class="sidebar-menu-text">Staff</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="sidebar-menu-item">
                        <a class="sidebar-menu-button" data-toggle="collapse" href="#ecommerce_menu">
                            <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">shopping_cart</span>
                            eCommerce
                            <span class="ml-auto sidebar-menu-toggle-icon"></span>
                        </a>
                        <ul class="sidebar-submenu collapse sm-indent" id="ecommerce_menu">
                            <li class="sidebar-menu-item">
                                <a class="sidebar-menu-button" href="ecommerce.html">
                                    <span class="sidebar-menu-text">Shop Dashboard</span>
                                </a>
                            </li>
                            <li class="sidebar-menu-item">
                                <a class="sidebar-menu-button disabled" href="edit-product.html">
                                    <span class="sidebar-menu-text">Edit Product</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>              
                <!-- // END Sidebar Content -->

            </div>
        </div>
    </div>
</template>
<script>
import { inject, computed } from 'vue'
import {useRoute} from 'vue-router'
export default {
    setup(){
        let image_url = inject('image_url')

        let route = useRoute()

        const path = computed(()=> route.path)

        return{
            image_url,
            path
        }
    }
}
</script>
