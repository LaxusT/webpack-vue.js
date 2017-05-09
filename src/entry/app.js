import Vue from 'vue'
import router from './../projects/app/router'
import VueRouter from 'vue-router'
import { loadingPlugin, toastPlugin} from './../plugins'

Vue.use(loadingPlugin)
Vue.use(toastPlugin)

Vue.use(VueRouter)

new Vue({
	router
}).$mount('#app')