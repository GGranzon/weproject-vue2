
<template>
  <div class="background">
    <div class="login">
      <el-form :label-position="labelPosition" label-width="80px" :model="user">
        <h1>欢迎登录</h1>
        <el-form-item label="用户名">
          <el-input v-model="user.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="user.password"></el-input>
        </el-form-item>

        <el-row>
          <el-button type="primary" @click="login">点击登录</el-button>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login-lht",
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
    //登录后跳转主页
    login(){
      this.$router.push("/index")
    }
  }
}
</script>

<style scoped>
  .login{
    margin-top: 200px;
    margin-left: 40%;
    height: 300px;
    width: 20%;
    border: 1px #eeeeee solid;
    text-align: center;
    border-radius: 5px;
    background-color: white;
  }
  .background{
    width: 100%;
    height: 800px;
    border: 1px white solid;
    background: url("../assets/loginIMG.jpg");
  }
  h1{
    color: #1989fA;
  }
</style>
