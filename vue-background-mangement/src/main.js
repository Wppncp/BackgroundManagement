import Vue from 'vue'
import App from './App.vue'

import {
  Button, Container, Aside, Header, Main, Menu, MenuItem, Submenu, MenuItemGroup, Dropdown, DropdownMenu,
  DropdownItem, Row, Col, Card, Table, TableColumn, Breadcrumb, BreadcrumbItem,Tag,Form,FormItem,Input,
  Select,Switch,DatePicker,Option,Dialog,Pagination,MessageBox,Message
} from 'element-ui'
Vue.use(Button)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Main)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tag)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Switch)
Vue.use(DatePicker)
Vue.use(Option)
Vue.use(Dialog)
Vue.use(Pagination)
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message

import http from 'axios'
Vue.prototype.$http = http

import store from './store'
import '../api/mock.js'
import './assets/less/index.less'

import router from './router/index.js'
router.beforeEach((to,from,next)=>{
  store.commit('getToken')
  const token = store.state.user.token
  if(!token && to.name !== 'login'){
    next({name:'login'})
  }else if( token && to.name === 'login'){
    next({name: 'home'})
  }else{
    next()
  }
})

Vue.config.productionTip = false
Vue.config.devtools = true



new Vue({
  render: h => h(App),
  router: router,
  store,
  created(){
    store.commit('addMenu',router)
  }
}).$mount('#app')
