

<template>
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
        <el-button type="primary">点击登录</el-button>
      </el-row>
    </el-form>
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
  }
  h1{
    color: #1989fA;
  }
</style>
