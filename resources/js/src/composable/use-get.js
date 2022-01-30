import { reactive, computed } from "vue"
import useUtility from "./use-utility"

export default function useGet(){

    let route     = computed(() => route)
    let {state}   = useUtility()
    let inputData = reactive({})


    let getDataList = (page = 1, sorting_item) => {

        console.log('generalApi');

        // console.log('search_item 1', search_item);
        // return false

        let data = JSON.stringify(state.inputData)

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

        let query = sorting_item != undefined?sorting_item:false

        let api_path = state.url+'/api/'+api+'?page='+page+'&is_paginate='+state.isPagination+'&search='+search+'&sorting='+query+'&data='+formData
        
        axios.get(api_path)
        .then(response => {

            if(response.status == 200){
                console.log('data', query);
                if(query === 'all_data'){

                    state.dataDownload = response.data.data
                    state.isLoading = true 

                    setTimeout(() => {
                        $('.download').trigger('click')
                        state.isLoading = false
                    
                    }, 3000)
                    console.log('download data', response.data);

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
    }

    let showEditForm = (id) => {
        let api = state.generalApi != null?state.generalApi:state.getApi
        route.push({path:api+'/'+id});    
        
    }

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
        state,
        getDataList,
        showEditForm,
        deleteItem,
        inputData

    }
    
}