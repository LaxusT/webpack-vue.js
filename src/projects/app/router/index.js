import VueRouter from 'vue-router'

var routes = [
  // 首页
  {
    name: '',
    path: '/',
    component: resolve => require(['./../views/index'], resolve)
  }
]

export default new VueRouter({
  routes
})
