<template>
   <div>
      <master-layout v-if="name != 'SignIn'">

        <router-view :key="$router.fullPath"></router-view>
        
      </master-layout>

      <router-view v-else :key="$router.fullPath"></router-view>

   </div>
</template>
<script>
import MasterLayout from './MasterLayout.vue'
import {useRoute} from 'vue-router'
import { computed } from '@vue/reactivity'
export default {
   components:{MasterLayout},
   setup(){
      let route = useRoute()

      const name = computed(()=>route.name)

      return{
         name
      }
   }
}
</script>