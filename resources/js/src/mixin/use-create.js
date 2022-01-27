import { reactive } from "vue"
export default function useCreate(){

    let state = reactive({
        base_url:window.location.origin,
        backUrl:'',
        generalApi:'',
        isLoading:false,
        isEdit:false,
        
        isFile:false,
        isForm:false,
        isSamePage:false,
        dataList:[],
    })

    let inputData = reactive({})

    let processData = () => {
        
        state.isLoading = true
        let api         = state.generalApi != null?state.generalApi:state.postApi
        let post_api    = state.base_url+'/api/'+api
        let patch_api   = state.base_url+'/api/'+api+'/'+inputData.id
        
        let form = jQuery(document).find('.form');
        let formData = new FormData($(form)[0])

        if(state.isEdit == true){
            formData.append('_method','PUT')
            inputData._method = 'PUT'
        }

        let getdata = state.isFile== true || state.isForm?formData:inputData

        let axiosRoute = state.isEdit == false?axios.post(post_api, getdata):axios.post(patch_api, getdata)
        
        axiosRoute.then(response => {
            if(state.isSamePage == false){
                let push_url = '/'+api
               state.$router.push(push_url) 
            } else {
                if(state.isSamePage == false){

                    // state.resetForm()
                } else {
                    // state.dataList = response.data
                }
            }

            state.isLoading = false
            // state.toastMessage('success', response.data.message)
            
        })
        .catch(error =>{
            
            if(error.response.status == 422){
                state.error = error.response.data.errors

                $.each(error.response.data.errors, function(item,index){
                    let input = jQuery(document).find('input[name="'+item+'"]')
                    let inputAfter = jQuery(document).find('input[name="'+item+'"] + span')

                    input.addClass('is-invalid')
                    
                    inputAfter.remove() 
                    input.after('<span class="text-danger">'+error.response.data.errors[item]+'</span>')

                    // Array element 
                    let inputArr = jQuery(document).find('input[name="'+item+'[]"]')
                    let inputAfterArr = jQuery(document).find('input[name="'+item+'[]"] + span')

                    inputArr.addClass('is-invalid')
                    
                    inputAfterArr.remove() 
                    inputArr.after('<span class="text-danger">'+error.response.data.errors[item]+'</span>')

                })
                
                
                
            }
        })
    }

    return{
        state,
        processData,
        inputData
    }

    
}