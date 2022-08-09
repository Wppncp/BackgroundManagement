<template>
  <el-header>
    <div class="l-content">
      <!-- 图表展示 -->
      <el-button size="small" plain @click="handleCollapse">
        <el-icon :size="20">
          <Menu></Menu>
        </el-icon>
      </el-button>
      <h3>首页</h3>
    </div>
    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
         <img :src="getImageUrl('user')" class="user" />
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script>
import { defineComponent } from 'vue';
import {useStore} from 'vuex'
export default defineComponent({
    setup(){
        let store = useStore()
        let getImageUrl = (user) => {
            return new URL(`../assets/images/${user}.png`,import.meta.url).href
        }
        let handleCollapse= () => {
            store.commit('updataIsCollapse')
        }
        return {
            getImageUrl,
            handleCollapse
        }
    }
}) 
</script>

<style lang="less" scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: #333;
}
.r-content{
    .user{
        width:40px;
        height: 40px;
        border-radius: 50%;
    }
}
.l-content{
    display:  flex;
    align-items: center;
    .el-button{
        margin-right: 20px;
    }
    h3{
        color:#fff
    }
}
</style>