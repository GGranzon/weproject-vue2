<template>
  <div>
    <div id="title">
      <div class="image">
        <img src="../assets/pwanlogo.jpg" style="width: 100%;height: 100%"/>
      </div>
      <div class="title-text">广沣典当管理系统</div>
      <div class="login-text">
        <el-button type="primary" icon="el-icon-chat-dot-square" @click="logout">点击注销</el-button>
      </div>
      <div class="login-text">
        <el-button type="primary" icon="el-icon-chat-dot-square">日志信息</el-button>
      </div>
    </div>

  <el-container style="height: 800px; border: 1px solid #eee">
    <el-aside width="200px">
      <el-menu :default-openeds="['0']">
        <el-submenu v-for="menu,index in menus" :index="index+''" >
          <template slot="title">
            <span v-text="menu.permissionName" :class="menu.icon"></span>
          </template>
          <el-menu-item  :index="childIndex+''" v-for="child,childIndex in menu.children">
            <h1  target="main" v-text="child.permissionName" @click="handleRoute(child)" style="color: #8492a6"></h1>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>

<!-- 中间的主体内容 -->
    <el-container >
      <router-view/>
    </el-container>

  </el-container>
</div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      menus:[],
    }
  },
  methods:{
    handleRoute(child){
      //通过菜单URL跳转至指定路由
      this.$router.push(child.url)
    },

    //登出操作
    logout(){
      this.$router.push()
    },

    //获取当前登录用户的操作权限（加载相应的菜单）
    getMenu() {
      this.$axios.get("http://localhost:8888/menu").then((resp) => {
        this.menus = resp.data.data
        console.log(resp)
      })
    },



  },
  created() {
    this.$message({
      message: '欢迎进入系统！😘😘',
      type: 'success'
    });
    this.getMenu()
  }
}
</script>

<style scoped>
  #title{
    width: 100%;
    height: 60px;
    border: 1px lavender solid;
    border-radius: 2px;
    background-color: azure;
  }
  .image{
    border: 0px red solid;
    width: 60px;
    height: 60px;
    float: left;
    margin-left: 20px;
    margin-left: 220px;
  }
  .title-text{
    border: 0px red solid;
    width: 480px;
    height: 60px;
    float: left;
    text-align: center;
    line-height: 60px;
    font-size: 48px;
    color: #1989fA;
  }
  .login-text{
    border: 0px red solid;
    width: 180px;
    height: 60px;
    float: right;
    text-align: center;
    line-height: 60px;
  }

  .el-dropdown {
    vertical-align: top;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }



</style>
