<template>
    <div>
        <!-- <pulseLoader v-if="isLoading" class="text-center"></pulseLoader> -->
        <button type="submit" class="btn btn-sm btn-primary float-right m-1" v-text="isEdit?'Update':'Save Changes'"></button>
        <router-link :to="backUrl" class="btn btn-sm btn-primary float-right m-1"><i class="fa fa-arrow-left"></i> Back</router-link>
    </div>
</template>

<script>
import { computed } from '@vue/reactivity'
export default {
    props:['backUrl','isEdit', 'isLoading'], 
    setup(props){

       let backUrl =  computed(()=>props.backUrl)
       let isEdit =  computed(()=>props.isEdit)
       let isLoading =  computed(()=>props.isLoading)

       return{
        backUrl,
        isEdit,
        isLoading,
       }
    }
    
}
</script>