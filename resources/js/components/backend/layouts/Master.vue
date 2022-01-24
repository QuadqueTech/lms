<template>
   <div>
      <master-layout>

        <router-view :key="$router.fullPath"></router-view>
        
      </master-layout>

   </div>
</template>
<script>
import MasterLayout from './MasterLayout.vue'
export default {
   components:{MasterLayout}
}
</script>