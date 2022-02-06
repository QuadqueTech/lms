import { reactive, computed } from "vue"
import useUtility from "./use-utility"
import { useRoute, useRouter } from "vue-router"

export default function useGet(){

    let router    = useRouter()
    let route     = useRoute()
    var {state}   = useUtility()
    let inputData = reactive({})
    let page = 1
    console.log('state',state);

    let api_url = computed(()=>state.generalApi)

   
   
    let  getDataList = (page = 1, sorting_item) => { 
    
    state.isLoading = true
    setTimeout(()=>{
        
        let data     = JSON.stringify(state.inputData)
        let formData = data !=""?data:0

        if(formData.length > 2){
            state.isLoading = true
        }

        if(sorting_item == 'all_data'){

        }

        let api = state.generalApi != null?state.generalApi:state.getApi

        let search = "";

        if((state.searchForm.search && state.searchForm.search != 'undefined')){
            
            search = state.searchForm.search
            state.isLoading = true

        } else {

            search = false

        }

        let query       = sorting_item != undefined?sorting_item:false
        let api_path    = state.url+'/api/'+api+'?page='+page+'&is_paginate='+state.isPagination+'&search='+search+'&sorting='+query+'&data='+formData
        
        axios.get(api_path)
        .then(response => {
            
            if(response.status == 200){
                 
                if(query === 'all_data'){

                    state.dataDownload = response.data.data
                    state.isLoading    = true 

                    setTimeout(() => {
                        $('.download').trigger('click')
                        state.isLoading = false
                    
                    }, 3000)

                } else {

                    state.dataList = response.data
                    state.isLoading = false

                }
            
            }
        
        
        })
        .catch(error => {
            if (error.response.status == 422) {
                state.errors = error.response.data.errors;
            } else {
                state.toastMessage('error',error, 'check', '', 'times')
            }
        })
        .finally(() => {

        })

        // return getDataList
    }, 1500)
    }

    getDataList(page, undefined)



    let showEditForm = (id) => {
        let api = state.generalApi != null?state.generalApi:state.getApi

        router.push({ path: route.path+'/'+id })
        
        
    }


    // showEditForm()

    let deleteItem = (i,j) => {

        /*   j = When you have to delete a single image from multiple image during edit 
           then this 'j' parameter passed image id and it helps to delete image item from it's table*/

            // let message = this.dialogConfig().message
            // let options = this.dialogConfig().options
            
            // this.$dialog.confirm(message, options)

            // .then(res => {
            //     let api = state.generalApi != null?state.generalApi:state.getApi
                
            //     let api_path = state.url+'/api/'+api+'/'+i+'?optional_id='+j

            //     axios.delete(api_path)
            //     .then(response => {
                    
            //         // this.toastMessage('error', response.data.message)
            //         this.getDataList()
            //         // this.generalSettings()

            //     })
            //     .catch(error => {
            //         // this.toastMessage('error', error.response.data.message,'times')
            //     })

            // })
            // .catch(error => {
            //     // this.toastMessage('success', 'Thanks for keeping me safe!')
            // });
           
        }



    return{
        route,
        router,
        getDataList,
        showEditForm,
        deleteItem,
        inputData,
        state,

    }
    
}