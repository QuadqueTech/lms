<template>
    <div class="layout-default layout-login-centered-boxed">

        <div class="layout-login-centered-boxed__form card">
            <div class="d-flex flex-column justify-content-center align-items-center mt-2 mb-5 navbar-light">
                <a href="#"
                   class="navbar-brand flex-column mb-2 align-items-center mr-0"
                   style="min-width: 0">

                    <span class="avatar avatar-sm navbar-brand-icon mr-0">

                        <span class="avatar-title rounded bg-primary"><img :src="base_url+'/images/illustration/student/128/white.svg'"
                                 alt="logo"
                                 class="img-fluid" /></span>

                    </span>

                    Luma
                </a>
                <p class="m-0">Login to access your Luma Account </p>
            </div>

           

            <form @submit.prevent="signIn"
                  novalidate>
                <div class="form-group">
                    <label class="text-label"
                           for="email_2">Email Address:</label>
                    <div class="input-group input-group-merge">
                        <input id="email_2"
                               type="email" name="email" v-model="signInForm.email"
                               required=""
                               class="form-control form-control-prepended"
                               placeholder="john@doe.com">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <span class="far fa-envelope"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="text-label"
                           for="password_2">Password:</label>
                    <div class="input-group input-group-merge">
                        <input id="password_2"
                               type="password"
                               required="" name="password" v-model="signInForm.password"
                               class="form-control form-control-prepended"
                               placeholder="Enter your password">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <span class="fa fa-key"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <button class="btn btn-block btn-primary"
                            type="submit">Login</button>
                </div>
                <div class="form-group text-center">
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox"
                               class="custom-control-input"
                               checked=""
                               id="remember">
                        <label class="custom-control-label"
                               for="remember">Remember me for 30 days</label>
                    </div>
                </div>
                <div class="form-group text-center">
                    <a href="">Forgot password?</a> 
                </div>
            </form>
        </div>
        </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import {useStore} from 'vuex'
import { inject } from '@vue/runtime-core'
export default {
setup(){
    let signInForm = reactive({})
    let store = useStore()
    let base_url = inject('base_url')
    let image_url = inject('image_url')

    function signIn(){
          store.dispatch('signIn', signInForm).then(() => {
            //   this.$router.push({name:"Home"})
            
          }).catch(error => {
              if(error.response.status == 404){

                  this.errorMsg = error.response.data.message[0]

              } else if(error.response.status == 401){

                  this.errorMsg = error.response.data.message[0]

              } else if(error.response.status == 422) {

                   $.each(error.response.data.errors, function(item,index){

                        let input = jQuery(document).find('input[name="'+item+'"]')
                        let inputAfter = jQuery(document).find('input[name="'+item+'"] + span')

                        input.addClass('is-invalid') 
                        
                        inputAfter.remove() 
                        // input.after('<span class="text-danger">'+error.response.data.errors[item]+'</span>')

                })

              } else {

              }
          })
      }


    return{
        signInForm, store, signIn, base_url, image_url
    }
}
    
}
</script>
