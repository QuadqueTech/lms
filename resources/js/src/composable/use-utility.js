
import { reactive } from "vue"
export default function useUtility(){

    let state = reactive({

            url:window.location.origin,
            base_url:window.location.origin,
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
            isPagination:true,

    })

    return{

        state

    }
}