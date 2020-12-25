<template>
  <div style="width: 100%;height: 100%">
    <div id="attr-head">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }"><i class="el-icon-s-home"></i>主页</el-breadcrumb-item>
        <el-breadcrumb-item>商品属性</el-breadcrumb-item>
        <el-button>刷新</el-button>
      </el-breadcrumb>
    </div>
    <div id="attr-content">
      <div id="attr-search">
        <i class="el-icon-search" />
        <p>筛选查询</p>
        <el-button style="float: right;height: 29px;margin-top: 3px;margin-right: 15px;line-height: 0;" @click="searchEnter" type="primary">查询</el-button>
        <input v-model="search" class="el-input__inner" placeholder="请输入搜索内容" />
        <p style="float: right;margin-right: 15px">模糊条件</p>
      </div>
      <div id="attr-table" style="height: 100%;width: 100%">
        <router-view />
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "AttributesZG",
        methods: {
          toAttrTable(){
            //this.$router.push("/attr/paramTable");
          },
          searchEnter(){
            if (this.search != null && this.serch != ""){
              console.log("进入查询");
              sessionStorage.setItem("fuzzyString",this.search);
              // this.$router.push("/index/attr/attrTable")
              location.reload()
            }
          }
        },data(){
          return {
            search: ""
          }
        },created() {
          this.toAttrTable()
        }
    }
</script>

<style scoped>
  #attr-head .el-button{
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
  #attr-search{
    background-color: white;
    font-size: 18px;
    height: 35px;
    width: 96%;
    border: #1989fa 1px solid;
    margin-left: 2%;
  }
  #attr-search .el-input__inner{
    height: 29px;
    margin-top: 3px;
    float: right;
    width: 20%;
    margin-right: 15px;
  }
  #attr-search p{
    float: left;
    margin: 0 0 0 10px;
    line-height: 35px;
  }
  #attr-search .el-icon-search{
    height: 35px;
    font-size: 22px;
    line-height: 35px;
    margin-left: 10px;
    width: 35px;

    float: left;
  }
  #attr-content{
    height: 94%;
    padding-top: 15px;
    background-color: rgba(0, 0, 0, 0.06);
  }
  #attr-table{
    width: 100%;
    height: 100%;
  }

</style>
