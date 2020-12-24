
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
<!--        <el-form-item>-->
<!--          <el-checkbox v-model="user.checked" @click="changeRemember">记住我</el-checkbox>-->
<!--        </el-form-item>-->

        <el-row>
          <el-button type="primary" @click="login">点击登录</el-button>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'


export default {
  name: "Login-lht",
  data() {
    return {
      labelPosition: 'right',
      none:false,
      user: {
        username:"",
        password:"",
      }
    };
  },
  methods:{
    //登录后跳转主页
    ...mapMutations(['changeLogin']),
    login(){
      this.none = true
      this.$axios.get("http://localhost:8888/login",{
        params:{
          username:this.user.username,
          password:this.user.password,
        }
      }).then((resp) => {
          console.log(resp)
          if(resp.data.statusCode == 2000){
            //登录成功，保存token
           this.token = resp.data.data
           this.changeLogin({Authorization:this.token})
            //登录成功,进入管理系统
            this.$router.push("/index")
          }else {
            //否则弹出错误信息
            this.$message.error(resp.data.message)
          }
      })
    }
  },

}
</script>

<style scoped>
  .login{
    margin-top: 200px;
    margin-left: 40%;
    height: 360px;
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
