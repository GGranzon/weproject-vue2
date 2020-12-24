<template>
<div style="width: 100%;height: 100%;background: url(../assets/loginIMG.jpg)">
  <el-form :label-position="labelPosition" label-width="80px" :model="user">
    <h1>欢迎注册</h1>
    <el-form-item label="用户名">
      <el-input v-model="user.username"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="user.password"></el-input>
    </el-form-item>

    <el-row>
      <el-button type="primary" @click="register">点击注册</el-button>
    </el-row>
  </el-form>
</div>
</template>

<script>
export default {
name: "register-lht",
  data() {
    return {
      labelPosition: 'right',
      user: {
        username:"",
        password:""
      }
    };
  },
  methods:{
    register(){
      this.$axios.get("http://localhost:8888/index/register",{
        params:{
          username:this.user.username,
          password:this.user.password
        }
      }).then((resp) => {
          console.log(resp)
      })
    }
  }
}
</script>

<style scoped>

</style>
