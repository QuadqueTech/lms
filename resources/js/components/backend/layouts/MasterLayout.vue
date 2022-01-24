<template>

        <div class="preloader">
            <div class="sk-chase">
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
            </div>

            <!-- <div class="sk-bounce">
                <div class="sk-bounce-dot"></div>
                <div class="sk-bounce-dot"></div>
            </div> -->

            <!-- More spinner examples at https://github.com/tobiasahlin/SpinKit/blob/master/examples.html -->
        </div>

        <!-- Drawer Layout -->

        <div class="mdk-drawer-layout js-mdk-drawer-layout"
             data-push
             data-responsive-width="992px">
            <div class="mdk-drawer-layout__content page-content">

                <!-- Header -->

                <!-- Navbar -->

                <navbar></navbar>

                <!-- // END Navbar -->

                <!-- // END Header -->

                <div class="pt-32pt">
                    <div class="container page__container d-flex flex-column flex-md-row align-items-center text-center text-sm-left">
                        <div class="flex d-flex flex-column flex-sm-row align-items-center mb-24pt mb-md-0">

                            <div class="mb-24pt mb-sm-0 mr-sm-24pt">
                                <h2 class="mb-0">Courses</h2>

                                <ol class="breadcrumb p-0 m-0">
                                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>

                                    <li class="breadcrumb-item active">

                                        Courses

                                    </li>

                                </ol>

                            </div>
                        </div>

                        <div class="row"
                             role="tablist">
                            <div class="col-auto">
                                <a href="student-paths.html"
                                   class="btn btn-outline-secondary">Learning Paths</a>
                            </div>
                        </div>

                    </div>
                </div>

                <!-- BEFORE Page Content -->

                <!-- // END BEFORE Page Content -->

                <!-- Page Content -->

                <div class="page-section border-bottom-2">
                    <div class="container page__container">
                        <slot></slot>
                    </div>
                </div>

                <!-- // END Page Content -->

                <!-- Footer -->

                <main-footer></main-footer>

                <!-- // END Footer -->

            </div>

            <!-- // END drawer-layout__content -->

            <!-- Drawer -->

           <sidebar></sidebar>

            <!-- // END Drawer -->

        </div>

        <!-- // END Drawer Layout -->

</template>
<script>
import Preloader from '../partials/Preloader.vue'
import Navbar from '../layouts/Navbar.vue'
import MainFooter from '../layouts/MainFooter.vue'
import { inject } from '@vue/runtime-core'
import Sidebar from './Sidebar.vue'
export default {
  name:'MasterLayout',
  components:{
      Preloader,
      MainFooter,
      Navbar,
      Sidebar
  },

  setup(){

      let base_url = inject('base_url')
      let image_url = inject('image_url')
      return{

          base_url,
          image_url

      }
  }
}
</script>