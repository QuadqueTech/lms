export default function useTable(){

let inputData = reactive({})



  let  getDataList = (page = 1, sorting_item) => {

        // console.log('search_item 1', search_item);
        // return false

        let data = JSON.stringify(inputData)

        let formData = data !=""?data:0

        if(formData.length > 2){
            isLoading = true
        }

        if(sorting_item == 'all_data'){

        }

        let api = generalApi != null?generalApi:getApi

        let search = "";

        if((searchForm.search && searchForm.search != 'undefined')){
            

            search = searchForm.search
            isLoading = true

        } else {

            search = false

        }

        let query = sorting_item != undefined?sorting_item:false

        let api_path = url+'/api/'+api+'?page='+page+'&is_paginate='+isPagination+'&search='+search+'&sorting='+query+'&data='+formData
        
        axios.get(api_path)
        .then(response => {

            if(response.status == 200){
                console.log('data', query);
                if(query === 'all_data'){

                    dataDownload = response.data.data
                    isLoading = true 

                    setTimeout(() => {
                        $('.download').trigger('click')
                        isLoading = false
                       
                    }, 3000)
                    console.log('download data', response.data);

                } else {

                    dataList = response.data
                    isLoading = false

                }
               
            }
           
           
        })
        .catch(error => {
            if (error.response.status == 422) {
                errors = error.response.data.errors;
            } else {
                toastMessage('error',error, 'check', '', 'times')
            }
        })
        .finally(() => {

        })
    }

    return{
        getDataList
    }
}