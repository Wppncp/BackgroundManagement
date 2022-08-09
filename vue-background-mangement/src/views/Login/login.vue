<template>
  <el-form
    :model="form"
    status-icon
    :rules="rules"
    ref="form"
    label-width="100px"
    class="login-container"
    
    >
    <h3 class="login_title">系统登录</h3>
    <el-form-item
        label="用户名"
        label-width="80px"
        prop="username"
        class="username"
    >
        <el-input
            type="input"
            v-model="form.username"
            autocomplete="off"
            placeholder="请输入账号"
        >
        </el-input>
    </el-form-item>
    <el-form-item
        label="密码"
        label-width="80px"
        prop="password"
        class="password"
    >
        <el-input
            type="password"
            v-model="form.password"
            autocomplete="off"
            placeholder="请输入密码"
        >
        </el-input>
    </el-form-item>
    <el-form-item class="login_submit">
        <el-button type="primary" @click="login" class="login_submit">登录</el-button>
    </el-form-item>
    </el-form>
</template>

<script>
// import Mock from 'mockjs'
import { getMenu } from '../../../api/data'
export default {
  /* eslint-disable */
  name: "login",
  data() {
    return {
      form: {},
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 2,
            max: 10,
            message: "用户名不能小于两位,大于十位",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
        //   {
        //     min: 8,
        //     message: "密码不能小于八位",
        //     trigger: "blur",
        //   },
        ],
      },
    };
  },
  methods:{
    login(){
        getMenu(this.form).then((res)  => {
            // console.log(res,"res")
            // console.log(data,"res")
            if(res.code === 20000){
                this.$store.commit('clearMenu')
                this.$store.commit('setMenu',res.data.menu)
                this.$store.commit('setToken',res.data.token)
                this.$store.commit('addMenu',this.$router)
                this.$router.push({name:'home'})
            }else{
                this.$message.warning(res.data.message)
            }
        })
        // const token = Mock.random.guid()
        // this.$store.commit('setToken',token)
        // this.$router.push({name:'home'})
    }
  }
};
</script>

<style lang="less" scoped>
.login-container{
    border-radius: 15px;
    background-clip: padding-box;
    margin: 100px auto;
    width: 350px;
    padding: 35px 35px 15px 35px; 
    background-color: #fff;
    border:  1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
}
.login_title{
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
}
.login_submit{
    margin: 10px auto 0px auto;
}
</style>