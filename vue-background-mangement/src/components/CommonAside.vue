<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <h3>{{isCollapse ? '后台': '通用后台管理系统'}}</h3>
    <el-menu-item v-for="item in noChildren" :index="item.path+''"  :key="item.path" @click="clickMenu(item)">
      <i :class="'el-icon-'+item.icon"></i>
      <span slot="title"> {{item.label}} </span>
    </el-menu-item>
    <el-submenu v-for="item in hasChidren" :index="item.path+''"  :key="item.path" >
      <template slot="title">
        <i :class="'el-icon-'+item.icon"></i>
        <span slot="title">{{item.label}}</span>
      </template>
      <el-menu-item-group v-for="(subItem,index) in item.children" :key="subItem.path">
        <el-menu-item :index="index+''" @click="clickMenu(subItem)">
            <template slot="title">
               <i :class="'el-icon-'+subItem.icon"></i> 
               <span slot="title">{{subItem.label}}</span>
            </template>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>



<script>
export default {
    name: "CommonAside",
    data() {
        return {
            menu:[
                // {
                //     path: '/',
                //     name: 'home',
                //     label:'首页',
                //     icon: 's-home',
                //     url: 'Home/Home'
                // },
                // {
                //     path: '/mall',
                //     name: 'mall',
                //     label:"商品管理",
                //     icon: 'video-play',
                //     url: "MallManage/MallManage"
                // },
                // {
                //     path: '/user',
                //     name: "user" ,
                //     label: "用户管理",
                //     icon: 'user',
                //     url: "UserManage/UserManage"
                // },
                // {
                // label:"其他",
                // icon: 'location',
                // path:'',
                // children:[
                //     {
                //         path: '/page1 ',
                //         name:'page1',
                //         label: '页面1',
                //         icon: 'setting',
                //         url: "Other/Pageone"
                //     },
                //     {
                //         path: '/page2 ',
                //         name: 'page2',
                //         label:'页面2',
                //         icon: "setting",
                //         url: "Other/PageTiwo"
                //     }
                // ]}
            ]
        };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      clickMenu(item){
        this.$router.push({
            "name":item.name
        })
        this.$store.commit('selectMenu',item)
      }
    },
    computed:{
        noChildren(){
            // return this.menu.filter(item => !item.children)
            return this.asyncMenu.filter(item => !item.children)
        },
        hasChidren(){
            // return this.menu.filter(item => item.children)
            return this.asyncMenu.filter(item => item.children)
        },
        isCollapse(){
            return this.$store.state.tab.isCollapse
        },
        asyncMenu(){
          return this.$store.state.tab.menu
        }
    }
}
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu{
    height: 100vh;
    border: none;
    h3{
        color: #fff;
        text-align:center;
        line-height: 48px;
    }
}
</style>