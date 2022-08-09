<template>
  <el-container style="100%">
    <el-aside width="auto">
        <common-aside></common-aside>
    </el-aside>
    <el-container>
      <el-header>
        <Common-Header></Common-Header>
      </el-header>
      <common-tag></common-tag>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from '../components/CommonAside.vue'
import CommonHeader from '../components/CommonHeader.vue'
import CommonTag from '../components/CommonTag.vue'

export default {
  /* eslint-disable */
  name: "Main",
  data() {
    return {
      property: "value",
    };
  },
  components:{
    CommonAside,
    CommonHeader,
    CommonTag
  }
};
</script>

<style lang="less" scoped>
.el-header{
    background-color: #333;
}
.el-main{
    padding: 0;
}
.el-container{
    height: 100vh;
}
</style>