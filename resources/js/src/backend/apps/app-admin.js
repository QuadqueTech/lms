require('../../../bootstrap')
import {createApp, h} from 'vue'
import axios from 'axios'
import master from '../../../Components/Backend/Layouts/Master.vue'
import router from '../routes/router-config-admin'
import store from '../store/store'

import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import Pagination from 'v-pagination-3';

import CreateTable from '../../../components/backend/layouts/CreateTable.vue'
import FormButton from '../../../components/backend/layouts/FormButton.vue'
import TableContent from '../../../components/backend/layouts/TableContent.vue'

const app = createApp({
    created() {
        const userInfo = localStorage.getItem("user");
        if (userInfo) {
            const userData = JSON.parse(userInfo);
            this.$store.commit("setUserData", userData);
        }
        axios.interceptors.response.use(
            response => response,
            error => {
                if (error.response.status === 401) {
                    this.$store.dispatch('singOut')
                }
                return Promise.reject(error)
            }
        )
    },
    render:()=>h(master)
})

app.component('create-table', CreateTable)
app.component('FormButton', FormButton)
app.component('TableContent', TableContent)

app.component('PulseLoader', PulseLoader)
app.component('pagination', Pagination);

app.provide('base_url', window.location.origin)
app.provide('image_url', window.location.origin)

let userInfo = localStorage.getItem('user')
let user = JSON.parse(userInfo)
app.provide('user', user)
app.use(store)
app.use(router)
app.mount("#app_admin")