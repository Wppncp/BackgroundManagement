<template>
  <div class="common-layout">
    <el-container class="lay-container">
      <common-aside-vue></common-aside-vue>
      <el-container>
        <common-header-vue></common-header-vue>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script>
import { defineComponent } from "vue"
import CommonHeaderVue from "../components/CommonHeader.vue";
import CommonAsideVue from "../components/CommonAside.vue";
export default defineComponent({
  setup() {},
  components: {
    CommonHeaderVue,
    CommonAsideVue,
  },
});
</script>

<style lang="less" scoped>
.el-container {
  flex-wrap: wrap;
  align-items: flex-start;
}
.el-aside {
  height: 100%;
  background: #545c64;
}
.lay-container{
  flex-wrap: nowrap;
}
.common-layout{
    height: 100%;
        // position: absolute;
    & > .el-container{
        height: 100%;
            // position: absolute;
        & > .el-aside{
            height: 115vh;
            background: #545c64;
        }
    }
}
</style>