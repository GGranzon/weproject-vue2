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
          <span class="el-dropdown-link" >
            {{productStatus}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="seeStatus(statuies[0])">全部</el-dropdown-item>
              <el-dropdown-item @click.native="seeStatus(statuies[1])">已评估</el-dropdown-item>
              <el-dropdown-item @click.native="seeStatus(statuies[2])">待评估</el-dropdown-item>
              <el-dropdown-item @click.native="seeStatus(statuies[3])">待鉴定</el-dropdown-item>
              <el-dropdown-item @click.native="seeStatus(statuies[4])">已鉴定</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>
        </el-col>
        <div id="operator">
          <p style="float: left;font-size: 18px;">录入人：</p>
          <input class="el-input__inner" v-model="username" />
        </div>
        <div id="search">
          <p style="float: left;font-size: 18px;">模糊查询：</p>
          <input class="el-input__inner" v-model="inputBox" placeholder="请输入内容"/>
        </div>
        <el-button style="float: right;height: 29px;margin-top: 3px;margin-right: 15px;line-height: 0;" @click="searchEnter" type="primary">查询</el-button>

      </div>
      <div id="appr-table">
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
        },seeStatus(statu){
          console.log(statu)
          this.productStatus = statu;
        },searchEnter(){
          console.log(this.$data);
          sessionStorage.setItem("fuzzyProduct",JSON.stringify(this.$data));
          location.reload();
        }
      },data(){
        return {
          inputBox: "",
          productStatus:"全部",
          statuies: ["全部","已评估","待鉴定","待评估","已鉴定"],
          username:""
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
    margin-left: 380px;
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
