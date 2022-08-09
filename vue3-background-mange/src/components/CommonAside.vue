<template>
  <el-aside :width="$store.state.isCollapse ? '180px' : '64px'">
    <el-menu
      class="el-menu-vertical-demo"
      :collapse="!$store.state.isCollapse"
      background-color="#545c64"
      text-color="#fff"
      :collapse-transition="false"
    >
      <h3 v-show="$store.state.isCollapse">后台管理</h3>
      <h3 v-show="!$store.state.isCollapse">后台</h3>
      <el-menu-item
        :index="item.path"
        v-for="item in noChildren()"
        :key="item.path"
        @click="clickMenu(item)"
      >
        <component :is="item.icon" class="icons"></component>
        <span>{{ item.label }}</span>
      </el-menu-item>
      <el-sub-menu
        :index="item.label"
        v-for="item in hasChildren()"
        :key="item.path"
      >
        <template #title>
          <component :is="item.icon" class="icons"></component>
          <span>{{ item.label }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            :index="subItem.path"
            v-for="(subItem, subIdex) in item.children"
            :key="subIdex"
            @click="clickMenu(subItem)"
          >
            <component :is="subItem.icon" class="icons"></component>
            <span>{{ subItem.label }}</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </el-aside>
</template>

<script>
import { useRouter} from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    const list = [
      // {
      //   path: '/',
      //   name: 'home',
      //   label: '首页',
      //   icon: 's-home',
      //   url: 'Home/Home'
      // },
      // {
      //   path: '/mall',
      //   name: 'mall',
      //   label: '商品管理',
      //   icon: 'video-play',
      //   url: 'MallManage/MallManage'
      // },
      {
        path: "/user",
        name: "user",
        label: "用户管理",
        icon: "user",
        url: "UserManage/UserManage",
      },
      {
        label: "其他",
        icon: "location",
        path: "/other",
        children: [
          {
            path: "/page1",
            name: "page1",
            label: "页面1",
            icon: "setting",
            url: "Other/PageOne",
          },
          {
            path: "/page2",
            name: "page2",
            label: "页面2",
            icon: "setting",
            url: "Other/PageTwo",
          },
        ],
      },
    ];
    const noChildren = () => {
      return list.filter((item) => !item.children);
    };
    const hasChildren = () => {
      return list.filter((item) => item.children);
    };
    const clickMenu = (item) => {
        router.push({
          name:item.name
        })
    }
    return {
      noChildren,
      hasChildren,
      clickMenu
    };
  },
};
</script>

<style lang="less" scoped>
.icons {
  width: 18px;
  height: 18px;
}
.el-menu {
  border-right: none;
  h3 {
    line-height: 40px;
    color: #fff;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }
}
</style>