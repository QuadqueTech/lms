import { inject } from "vue"
export default function useSortingScript()
{
    
    let base_url = inject('base_url')
    let flatpickr = document.createElement("script")
    flatpickr.src = base_url+'/vendor/flatpickr/flatpickr.min.js'
    flatpickr.addEventListener("load", loadflatpickr)
    document.body.appendChild(flatpickr)
    
    let flatpickrMain = document.createElement("script")
    flatpickrMain.src = base_url+'/js/flatpickr.js'
    flatpickrMain.addEventListener("load", loadflatpickrMain)
    document.body.appendChild(flatpickrMain)

    let listScriptMin = document.createElement("script")
    listScriptMin.src = base_url+'/vendor/list.min.js'
    listScriptMin.addEventListener("load", loadListScriptMin)
    document.body.appendChild(listScriptMin)

    let listScript = document.createElement("script")
    listScript.src = base_url+'/js/list.js'
    listScript.addEventListener("load", loadListScript)
    document.body.appendChild(listScript)

    let loadflatpickr = () => {}
    let loadflatpickrMain = () => {}
    let loadListScriptMin = () => {}
    let loadListScript = () => {}
    
    return{
        flatpickr,
        flatpickrMain,
        listScriptMin,
        listScript,
        base_url
    }
}