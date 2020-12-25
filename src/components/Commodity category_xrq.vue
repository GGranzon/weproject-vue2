<template>
  <div>
    <el-container>
      <el-header>
        <a href="#">主页</a>
        <span>/ 商品大类</span>
      </el-header>
    </el-container>
    <div id="finds">
      <el-button type="danger" style="float: right" @click="deleteType">删除</el-button>
      <el-button type="warning" style="float: right;margin-right: 10px" @click="isShow">修改</el-button>
      <el-button type="primary" style="float: right" @click="addType">新增</el-button>
      <div style="margin-top: 15px;">
        <el-input placeholder="请输入商品大类名称" v-model="finds" style="width: 300px;float: right">
          <el-button slot="append" icon="el-icon-search" @click="find1"></el-button>
        </el-input>
      </div>
    </div>
    <el-table
      ref="multipleTable"
      :data="page.records"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="id"
        label="编号"
        width="150">
      </el-table-column>
      <el-table-column
        prop="categoryName"
        label="大类名称"
        width="300">
      </el-table-column>
      <el-table-column
        prop="sort"
        label="排序"
        width="100"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="description"
        label="备注"
        width="400"
        show-overflow-tooltip>
      </el-table-column>
    </el-table>
    <div class="block" style="float: right;">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page.current"
        :page-sizes="[1, 2, 3, 5]"
        :page-size="page.size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="page.total">
      </el-pagination>
    </div>

    <!--修改的弹出框-->
    <div id="update" v-show=this.isNo>
      <div style="height: 20%;background-color:black;text-align: center; line-height: 60px;border-top-left-radius: 10px;border-top-right-radius: 10px">
        <span style="color: #333333;font-size: 18px;color: #F5F5F5; ">商品大类修改</span>
      </div>
      <div style="margin-top: 5px">
        <span style="margin-left: 30px">排序：</span><el-input  style="width: 300px; margin-top: 30px;margin-left: 20px" v-model="updateType.sort"></el-input>
        <br />
        <span style="margin-left: 30px">备注：</span><el-input  style="width: 300px; margin-top: 30px;margin-left: 20px" v-model="updateType.description"></el-input>
      </div>

      <div style="margin-top: 20px">
        <el-button type="info" style="float: right;margin-right: 50px" @click="isShow">返回</el-button>
        <el-button type="warning" style="float: right;margin-right: 10px" @click="update">修改</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        deleteId:[],
        multipleSelection: [],
        page:{
          current:1,
          total:0,
          size:5,
          pages:0,
          records:[],
        },

        finds:"",
        isNo: false,
        updateType: {
            id:1,
            description:'',
            sort:'',
        },

      }
    },
    methods: {
      find2Page(current,size){
        var _this=this
        console.log(_this.finds)
        this.$http.get("http://localhost:8888/product-category/page",{
          params:{
            current:current,
            size:size,
            like:_this.finds
          }
        }).then(function (resp){
          console.log(resp.data.data)
          _this.page=resp.data.data
        })
      },

      handleSizeChange(val) {
        this.find2Page(this.page.current,val)
      },
      handleCurrentChange(val) {
        this.find2Page(val,this.page.size)
      },

      handleSelectionChange(val) {
        this.multipleSelection = val;
        console.log(this.multipleSelection)
      },
      /*向后台模糊查询*/
      find1(){
        var _this=this
        console.log(this.finds)
        this.$axios.get("http://localhost:8888/product-category/like",{
          params:{
            like:this.finds
          }
        }).then(function (resp){
          console.log(resp)
          _this.page.records=resp.data.data
        })
      },
      /*跳转到新增页面*/
      addType(){
        this.$router.push("/index/Commodity2")
      },

      /*删除商品大类*/
      deleteType(){
        this.$axios.post("http://localhost:8888/product-category/byebye",this.multipleSelection).then(function (resp){
            alert(resp.data.message)
        })
       this.$router.go(0)
      },

      /*控制修改框是否显示*/
      isShow(){
        this.isNo = !this.isNo;
        console.log(this.isNo)

      },

      /*执行修改的方法*/
      update(){
        var _this=this
        this.updateType.id=_this.multipleSelection[0].id

        this.$axios.post("http://localhost:8888/product-category/update",this.updateType).then(function (resp){
          console.log(resp.data.message)

        })
        this.$router.go(0)
      },

    },
    created() {
      this.find2Page(this.page.current,this.page.size)
    }
  }
</script>

<style>
  .el-header{
    height: 50px;
    background-color: black;
    color: #F5F5F5;
    line-height: 60px;
  }

  .el-header a{
    text-decoration-line: none;
    color:#F5F5F5;
  }

  #update{
    width: 450px;
    height: 280px;
    border: 1px darkgray solid;
    position:fixed;
    top:30%;
    left: 35%;
    background-color: beige;
    border-radius: 10px;
  }

</style>
