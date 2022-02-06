<template>
   <TableContent  style="margin-top:-20px;"  v-if="typeof(state.dataList) == 'object'" :stateProperty="state" :getDataList="getDataList" :showEditForm="showEditForm" :deleteItem="deleteItem"></TableContent>
</template>
<script>
import useGet from '../../../../src/composable/use-get'
export default {

    setup(){
        
        let {getDataList, showEditForm, state} = useGet()

        
        
        state.generalApi = 'course-category'        
        state.cardTitle = 'Course Category'

        state.columnsHead.push(
            'Serial No.',
            'Name',
            'Action'
        )

        state.columnsBody.push(
            'name',
                
        )

        return{
        getDataList,
        showEditForm,
        state
        }
    },

}
</script>