<template>
  <div class="hello">
    <router-link to="/">
      <el-button type="success">HomeM按钮</el-button>
    </router-link>
    <router-link to="/user">
      <el-button type="primary">主要按钮</el-button>
    </router-link>
     
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
