<template>
    
        <div class="col-md-12 col-lg-12 col-sm-12 col-xs-4">
             <div class="card">
               
                <div class="card-header">  
                    <div class="row py-1">
                        <div class="col-md-12 col-lg-12 col-sm-12">
                            <h3 class="card-title">{{ state.cardTitle }}</h3>
                            <pulseLoader v-if="state.isLoading" class="text-center"></pulseLoader>
                        </div>
                    </div>
                    <router-link  :to="route.path+'/create'" class="btn btn-sm btn-primary float-right m-1" v-if="state.isAddItem">Add New</router-link>
                     <button type="button" v-if="state.isUpload" class="btn btn-sm btn-primary float-right m-1 modal_show_button" data-toggle="modal" data-target="#exampleModal">
                      Upload Excel
                    </button>
                     
                     <!-- <v-select @input="getDataList(page = 1, sorting_item)" v-if="isSorting" v-model="sortingForm.sorting_item" class="col-md-2 float-right m-1" :options="sortingData" :reduce="sorting => sorting.count_num" label="count_num" placeholder="Sort Item"></v-select> -->
                    
                    <button @click="getDataList(page = 1, sorting_item = 'all_data')" v-if="state.isDownload" class="btn btn-sm btn-success float-right m-1">Download</button>
                    
                    <downloadExcel ref="download" style="display:none" class="download btn btn-sm btn-success float-right m-1" :data="state.dataDownload" :fields="state.excelFields"  :name="state.cardTitle"></downloadExcel>
                   <!-- <form @keypress="dataSearching" > -->
                       <input type="text" @input="getDataList()" v-model="state.searchForm.search" name="search" style="padding: 0 7px!important; height: calc(2.25rem + 1px)!important;" class="col-md-2 form-control"  placeholder="Search here…" v-if="state.isSearchBox">
                   <!-- </form> -->
                    
                  
                </div>
                <div class="card-body">
                    <table class="table table-bordered table-response">
                        <thead>
                            <tr class="table-secondary">
                                <td style="text-align:center;" v-for="(thead, i) in state.columnsHead"  :key="i">{{ thead }}</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in state.dataList.data" :key="index">
                                <td style="text-align:center;">{{ state.dataList.meta.from +index }}</td>
                                <td style="text-align:center;" v-for="(tbody, i) in state.columnsBody.slice(0, state.columnsBody.length)" :key="i" v-html="item[tbody]"> 
                                   
                                </td>
                                <td class="text-center" v-if="state.isActionBtn">
                                    <a href="#" v-if="state.isSingle" @click.prevent="isSingleData(item)"
                                        class="btn btn-success btn-circle btn-sm m-1">
                                        <i class="fa fa-send"></i> {{state.actionTitle}}
                                    </a>
                                    <a href="#" v-if="state.isEditBtn" @click.prevent="showEditForm(item.id)"
                                        class="btn btn-success btn-circle btn-sm m-1">
                                        <i class="fa fa-edit"></i>
                                    </a>
                                    <a href="#" v-if="state.isDelBtn" @click.prevent="deleteItem(item.id)"
                                        class="btn btn-danger btn-circle btn-sm m-1">
                                        <i class="fa fa-trash"></i>
                                    </a>
                                </td>

                            </tr>
                            <!-- <tr v-if="dataList.data.length == 0"><td :colspan="columnsHead.length" class="text-danger text-center">No data available!</td></tr> -->
                        </tbody>
                    </table>
                </div>
                <div class="card-footer clearfix">
                    <!-- <pagination class="pagination pagination-sm m-0 float-right" :data="state.dataList" :limit="1" @pagination-change-page="getDataList"></pagination> -->
                    <nav aria-label="...">
                    <ul class="pagination">
                        <li class="page-item" >
                        <router-link class="page-link" to="#"><span>Previous</span></router-link>
                        </li>
                        <li class="page-item"><router-link class="page-link" to="">1</router-link></li>

                        <li class="page-item" v-for="index in pageOfNumber" :key="index" aria-current="page">
                            {{ index }}
                        <router-link class="page-link" to="#" @click.prevent="getDataList(index)">{{ index }}</router-link>
                        </li>
                        
                        <li class="page-item">
                        <router-link class="page-link" to="#"  @click.prevent="getDataList(state.dataList.meta.to, sorting_item = 'all_data')">Next</router-link>
                        </li>
                    </ul>
                    </nav>
                </div>
            </div>
            <!-- /.card -->
           
        </div>
 
</template>

<script>
    import { computed, reactive, toRef } from 'vue'
    import {useRoute} from 'vue-router'
    export default {
        props: ['stateProperty', 'getDatalist', 'showEditForm', 'deleteItem'],
        setup(props, context){
        let route        = useRoute()
        let propsObj     = toRef(props.stateProperty)
        let state        = propsObj._object
        let showEditForm = props.showEditForm
        let deleteItem   = props.deleteItem
        let getDatalist  = props.getDatalist

        console.log('dataList', state.dataList);

        let pages = state.dataList.meta.total/state.dataList.meta.per_page

        let pageOfNumber = parseInt(pages)

        // console.log('pageOfNumber', );
             

        let sortingData = reactive([
                    {count_num:15},
                    {count_num:25},
                    {count_num:50},
                    {count_num:100},
                    {count_num:500},
                    {count_num:1000},
                ])
            

        return{
          route,
          state,
          sortingData,
          showEditForm,
            deleteItem,
            getDatalist,
            pageOfNumber,

        }

        }
    }

</script>

<style lang="css" scoped>
.table td, .table th {
    padding: 0.2em !important;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
    font-size: 13px !important;
   
}
</style>
