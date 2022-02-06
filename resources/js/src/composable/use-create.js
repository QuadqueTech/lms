import { reactive } from "vue"
import useUtility from './use-utility'
import { useRoute, useRouter } from "vue-router"

export default function useCreate(){
   
    let {state} = useUtility()
    let router    = useRouter()
    let route     = useRoute()
   

    let processData = () => {
        console.log('isEdit',state.isEdit);
        state.isLoading = true
        let api         = state.generalApi != null?state.generalApi:state.postApi
        let post_api    = state.base_url+'/api/'+api
        let patch_api   = state.base_url+'/api/'+api+'/'+state.inputData.id
        
        let form = jQuery(document).find('.form'); 
        let formData = new FormData($(form)[0])

        if(state.isEdit == true){
            formData.append('_method','PUT')
            state.inputData._method = 'PUT'
        }

        let getdata = state.isFile== true || state.isForm?formData:state.inputData

        let axiosRoute = state.isEdit == false?axios.post(post_api, getdata):axios.post(patch_api, getdata)
        
        axiosRoute.then(response => {
            if(state.isSamePage == false){
                let push_url = '/'+api
               router.push(push_url) 
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
            console.log('error', error);
            
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


    let editForm = () =>{

        console.log('route.params.id',route.params.id);

        if(route.params.id != 'create'){
            state.isEdit = true
            axios.get(state.base_url+'/api'+route.path)
            .then(res => {
                
                let image = state.isImage
                console.log(typeof(res.data.data[image]));
                if(typeof(res.data.data[image]) == 'object'){
                    
                    var i = 0;
                    
                    } else {
                        state.showImage = '<img style="width:90px; height:90px;" src="'+res.data.data[image]+'">'
                    }

                
                   state.inputData = res.data.data
                

                console.log('res.data.data',res.data.data);
            })
        } else {
            state.isEdit = false
        }

    }

    editForm()

    return{
        state,
        processData,
        editForm, 
        
    }

    
}