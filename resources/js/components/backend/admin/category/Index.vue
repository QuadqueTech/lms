<template>
   <TableContent  style="margin-top:-20px;"  v-if="typeof(state.dataList) == 'object'" :searchForm="state.searchForm" :sortingForm="state.sortingForm" :isAddItem="state.isAddItem" :isEditBtn="state.isEditBtn" :isDelBtn="state.isDelBtn" :isActionBtn="state.isActionBtn" :cardTitle="state.cardTitle" :columnsHead="state.columnsHead" :columnsBody="state.columnsBody" :dataList="state.dataList" :showEditForm="state.showEditForm" :deleteItem="state.deleteItem" :getDataList="state.getDataList" :excelFields="state.excelFields" :excelTitle="state.excelTitle" :isDownload="state.isDownload" :isSearchBox="state.isSearchBox" :isUpload="state.isUpload" :isSorting="state.isSorting" :dataDownload="state.dataDownload" :isLoading="state.isLoading" route="admin"></TableContent>
</template>
<script>
import useGet from '../../../../src/composable/use-get'
export default {

    setup(){
        
        let {getDataList, state} = useGet()
        

        state.generalApi = 'course-category'

        console.log(state.generalApi);
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
        state
        }
    },

}
</script>