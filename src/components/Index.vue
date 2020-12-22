<template>
  <div>
    <div id="title">
      <div class="image">
        <img src="../assets/pwanlogo.jpg" style="width: 100%;height: 100%"/>
      </div>
      <div class="title-text">广沣典当管理系统</div>
      <div class="login-text">
        <el-dropdown split-button type="primary" @click="handleClick">
          点击登录
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>注销</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="login-text">
        <el-button type="primary" icon="el-icon-chat-dot-square">日志信息</el-button>
      </div>
    </div>
  <el-container style="height: 800px; border: 1px solid #eee">
    <el-aside width="200px" >
      <el-menu :default-openeds="['1', '3']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>系统用户</template>
          <el-menu-item-group>
            <el-menu-item index="1-1">角色管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-house"></i>门店配置</template>
          <el-menu-item-group>
            <el-menu-item index="2-1" @click="shop">门店资料</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-truck"></i>仓库配置</template>
          <el-menu-item-group>
            <el-menu-item index="2-1" @click="wareHouse">仓库配置</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title"><i class="el-icon-setting"></i>商品配置</template>
          <el-menu-item-group>
            <el-menu-item index="3-1" @click="bigType">商品大类</el-menu-item>
            <el-menu-item index="3-2" @click="smallType">商品小类</el-menu-item>
            <el-menu-item index="3-1" @click="brand">品牌管理</el-menu-item>
            <el-menu-item index="3-2" @click="productAttr">商品属性</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title"><i class="el-icon-edit"></i>评估鉴定</template>
          <el-menu-item-group>
            <el-menu-item index="2-1" @click="assess">商品列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title"><i class="el-icon-user"></i>会员管理</template>
          <el-menu-item-group>
            <el-menu-item index="2-1" @click="member">会员档案</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="7">
          <template slot="title"><i class="el-icon-star-off"></i>渠道商管理</template>
          <el-menu-item-group>
            <el-menu-item index="2-1" @click="distri">渠道商</el-menu-item>
          </el-menu-item-group>
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
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    };
    return {
      tableData: Array(20).fill(item)
    }
  },
  methods:{
    shop(){
      this.$router.push("/index/shop")
    },
    wareHouse(){
      this.$router.push("/index/wareHouse")
    },
    bigType(){
      this.$router.push("/index/commodity")
    },
    smallType(){
      this.$router.push("/index/smallCommodity")
    },
    brand(){
      this.$router.push("/index/brandManage")
    },
    productAttr(){
      this.$router.push("/index/attr/attrTable")
    },
    assess(){
      this.$router.push("/index/appr/apprTable")
    },
    member(){
      this.$router.push("/index/member")
    },
    distri(){
      this.$router.push("/index/distri")
    }

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
