<template>
   <TableContent  style="margin-top:-20px;"  v-if="typeof(dataList) == 'object'" :searchForm="searchForm" :sortingForm="sortingForm" :isAddItem="isAddItem" :isEditBtn="isEditBtn" :isDelBtn="isDelBtn" :isActionBtn="isActionBtn" :cardTitle="cardTitle" :columnsHead="columnsHead" :columnsBody="columnsBody" :dataList="dataList" :showEditForm="showEditForm" :deleteItem="deleteItem" :getDataList="getDataList" :excelFields="excelFields" :excelTitle="excelTitle" :isDownload="isDownload" :isSearchBox="isSearchBox" :isUpload="isUpload" :isSorting="isSorting" :dataDownload="dataDownload" :isLoading="isLoading" route="admin"></TableContent>
</template>
<script>
import mixin from '../../../../src/mixin/mixin'
export default {
    mixins:[mixin],
    data(){
        return{
            
        }
    },
    
    created(){
    this.generalApi = 'course-category'
    this.columnsHead.push(
        'ক্রঃ নং',
        'বিবরণ',
        'ভাঃ থেকে সরবারহ',
        'জমা',
        'খরচ',
        'মজুদ',
        'মজুদ মূল্য',
        'অ্যাকশন'
    )

    this.columnsBody.push(
        'name',
        'supplier',
        'stock_in',
        'stock_out',
        'total_quantity',
        'total_price',
            
    )
 }
}
</script>