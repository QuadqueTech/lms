export default function useUtility(){

    const state = reactive({

    
        url:window.location.origin,
        base_url:window.location.origin,
        isLoading:false,
        generalApi:'',
        getApi:'',
        searchForm:{},
        isPagination:false,
        dataDownload:false,
        dataList:[]
    
    })
}