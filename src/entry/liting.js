import Vue from 'vue'
import '@/styles/baseFy.scss'
import '@/assets/scss/castrol.scss'
import './../server'
import router from './../projects/liting/router'
import VueRouter from 'vue-router'
import axios from 'axios'
import { loadingPlugin, toastPlugin} from './../plugins'

Vue.use(loadingPlugin)
Vue.use(toastPlugin)

Vue.use(VueRouter)

new Vue({
	router
}).$mount('#app') 