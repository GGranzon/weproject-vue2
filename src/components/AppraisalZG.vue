<template>
  <div style="width: 100%;height: 100%">
    <div id="appr-head">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }"><i class="el-icon-s-home"></i>主页</el-breadcrumb-item>
        <el-breadcrumb-item>评估鉴定</el-breadcrumb-item>
        <el-button>刷新</el-button>
      </el-breadcrumb>
    </div>
    <div id="appr-content">
      <div id="appr-search">
        <i class="el-icon-search" />
        <p>筛选查询</p>
        <el-col id="down-menu" :span="2">
          状态：
          <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            全部<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item >已评估</el-dropdown-item>
              <el-dropdown-item >待评估</el-dropdown-item>
              <el-dropdown-item >待鉴定</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>
        </el-col>
        <div id="operator">
          <p style="float: left;font-size: 18px;">操作人：</p>
          <input class="el-input__inner" />
        </div>
        <div id="search">
          <p style="float: left;font-size: 18px;">模糊查询：</p>
          <input class="el-input__inner" placeholder="请输入内容"/>
        </div>
        <div id="date">
          <p style="float: left;font-size: 18px;">录入日期：</p>
          <input class="el-input__inner" type="date" />
          <input class="el-input__inner" type="date" />
        </div>
        <el-button style="float: right;height: 29px;margin-top: 3px;margin-right: 15px;line-height: 0;" type="primary">查询</el-button>
      </div>
      <div id="appr-table" >
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "AppraisalZG",
      methods: {
        toAttrTable(){
          //this.$router.push("/attr/paramTable");
        }
      },data(){
        return {
          search: ""
        }
      },created() {
        this.toAttrTable();
        //this.$router.push("/appr/apprTable")
      }
    }
</script>

<style scoped>
  #appr-head .el-button{
    font-size: 11px;
    height: 30px;
    line-height: 0;
    float: right;
  }
  .el-breadcrumb__item{
    line-height: 30px;
  }
  .el-breadcrumb{
    padding: 2px;
  }
  #appr-search{
    background-color: white;
    font-size: 18px;
    height: 35px;
    width: 96%;
    border: #1989fa 1px solid;
    margin-left: 2%;
  }
  #appr-search p{
    float: left;
    margin: 0 0 0 10px;
    line-height: 35px;
  }
  #appr-search .el-icon-search{
    height: 35px;
    font-size: 22px;
    line-height: 35px;
    width: 35px;
    margin-left: 10px;
    float: left;
  }
  #appr-content{
    height: 94%;
    padding-top: 15px;
    background-color: rgba(0, 0, 0, 0.06);
  }
  #down-menu{
    margin-left: 280px;
  }
  #down-menu span{
    border: aquamarine 1px solid;
    font-size: 17px;
    line-height: 35px;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
  #operator{
    float: left;
    width: 220px;
  }
  #operator .el-input__inner{
    height: 29px;
    margin-top: 3px;
    font-size: 14px;
    width: 50%;
  }
  #search{
    float: left;
    width: 240px;
  }
  #search .el-input__inner{
    height: 29px;
    margin-top: 3px;
    font-size: 14px;
    width: 50%;
  }
  #date{
     float: left;
     width: 500px;
   }
  #date .el-input__inner{
    height: 29px;
    margin-top: 3px;
    font-size: 14px;
    width: 32%;
  }
</style>
