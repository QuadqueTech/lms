
export default {
    data(){
        return {
            url:window.location.origin, 
            isEdit:false,
            isEditItem:false,
            isFile:false,
            isForm:false,
            isAddItem:true,
            isPagination:true,
            isSingleItem:false,
            isSamePage:false,
            isSearch:false,
            isActionBtn:true,
            isEditBtn:true,
            isDelBtn:true,
            isSearchBox:true,
            backUrl:'',
            isImage:'',
            showImage:'',
            notReset:{},
            cardTitle:"",
            inputData:{},
            error:{},
            dataList:{},
            excelFields:{},
            excelTitle:{},
            isDownload:false,
            isSorting:false,
            searchApi:null,
            generalApi:null,
            getApi:null,
            postApi:null,
            patchApi:null,
            editApi:null,
            search:"",
            showPagination:true,   
            tableContent: "",
            columnsHead:[],
            columnsBody:[],
            columnsBodyExtra:[],
            vColumns:[],
            isDataSearching:false,
            dataSearchingApi:null,
            searchForm:{},
            sortingForm:{},
            dataDownload:{},
            isLoading:false,
            isUpload: false,
            isPagination:true
        }
    },
    
 
    created(){

        this.generalSettings()

        jQuery(document).on('keyup','form input', function(e){
            

            //     jQuery(this).removeClass('is-invalid')
            // if(jQuery(this).val() != ''){
            //     jQuery(this).addClass('is-valid')
            //     jQuery(this).next().remove()
            // } else {
            //     jQuery(this).removeClass('is-valid')
            // }
              
        })    
         
    },
    mounted(){
       this.getDataList()             
    },
    methods:{
        /**
         * 
         * add isImage to Create.vue component. Example this.isImage = edit_photo 
         * return image with it's path from Resource such as [edit_photo => url('uploads/employee_photo/'.$this->employee_photo)]
         *  
         */
        generalSettings(){

            if(this.$route.params.id){
                // this.isEdit = true
                axios.get(this.url+'/api'+this.$route.path)
                .then(res => {
                    
                    let image = this.isImage
                    console.log(typeof(res.data.data[image]));
                    if(typeof(res.data.data[image]) == 'object'){
                        var i = 0;
                        // res.data.data[image].forEach(image => {
                        //     if(image.name){
                        //         // this.showImage += 
                        //         //'<a href="#" data-imageid="'+image.id+'" class="text-danger deleteImage" style="position:absolute; margin-left:10px; z-index:999; "><i class="fa fa-trash"></i></a><img style="width:100px; height:100px; position:relative; margin:10px; padding:5px;" src="'+res.data.data['image_path']+image.name+'">'  
                        //     }
                           
                        // })
                        } else {
                            this.showImage = '<img style="width:90px; height:90px;" src="'+res.data.data[image]+'">'
                        }
                    this.inputData = res.data.data
                })
            }

        },
        
        

        previewImage: function(event) {
            var input = event.target;
      
            if (input.files && input.files[0]) {
              var reader = new FileReader();
              reader.onload = (e) => {
                this.imageData = e.target.result;
              }
              reader.readAsDataURL(input.files[0]);
            }
          },
       

        showEditForm(id){
            let api = this.generalApi != null?this.generalApi:this.getApi
            this.$router.push({path:api+'/'+id});    
            
        },

        dialogConfig(){
            let message = "Are you sure?";
            
            let options = {
                html: false, // set to true if your message contains HTML tags. eg: "Delete <b>Foo</b> ?"
                loader: false, // set to true if you want the dailog to show a loader after click on "proceed"
                reverse: false, // switch the button positions (left to right, and vise versa)
                okText: 'Delete',
                cancelText: 'Close',
                animation: 'bounce', // Available: "zoom", "bounce", "fade"
                type: 'basic', // coming soon: 'soft', 'hard'
                verification: 'continue', // for hard confirm, user will be prompted to type this to enable the proceed button
                verificationHelp: 'Type "[+:verification]" below to confirm', // Verification help text. [+:verification] will be matched with 'options.verification' (i.e 'Type "continue" below to confirm')
                clicksCount: 3, // for soft confirm, user will be asked to click on "proceed" btn 3 times before actually proceeding
                backdropClose: false, // set to true to close the dialog when clicking outside of the dialog window, i.e. click landing on the mask
                customClass: '' // Custom class to be injected into the parent node for the current dialog instance
            };

            let config = {
                message:message,
                options:options
            }

            return config

            
        },
        
        /* This delete function work for multiple image delete with relational data and it can
        also delete single image item form it's table */
        
        deleteItem(i,j){

        /*   j = When you have to delete a single image from multiple image during edit 
           then this 'j' parameter passed image id and it helps to delete image item from it's table*/

            let message = this.dialogConfig().message
            let options = this.dialogConfig().options
            
            this.$dialog.confirm(message, options)

            .then(res => {
                let api = this.generalApi != null?this.generalApi:this.getApi
                
                let api_path = this.url+'/api/'+api+'/'+i+'?optional_id='+j

                axios.delete(api_path)
                .then(response => {
                    
                    this.toastMessage('error', response.data.message)
                    this.getDataList()
                    this.generalSettings()

                })
                .catch(error => {
                    this.toastMessage('error', error.response.data.message,'times')
                })

            })
            .catch(error => {
                this.toastMessage('success', 'Thanks for keeping me safe!')
            });
           
        },

        resetForm(){
            this.inputData = {}
            
            let field = this.notReset.field
            let value = this.notReset.value
            this.inputData[field] = value
        }

       
    }  
}
