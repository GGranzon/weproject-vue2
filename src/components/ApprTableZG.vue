<template>
  <div style="height: 100%;width: 100%">
    <div>
      <div id="table-head">
        <i class="el-icon-s-grid" />
        <p>数据列表</p>
        <el-button style="float: right;height: 29px;margin-top: 3px;margin-right: 15px;line-height: 0;" @click="deleteProduct" type="danger">删除</el-button>
<!--        <el-button style="float: right;height: 29px;margin-top: 3px;margin-right: 15px;line-height: 0;" type="primary">评估</el-button>-->
<!--        <el-button style="float: right;height: 29px;margin-top: 3px;margin-right: 15px;line-height: 0;" type="primary">鉴定</el-button>-->
<!--        <el-button style="float: right;height: 29px;margin-top: 3px;margin-right: 15px;line-height: 0;" type="warning">修改</el-button>-->
        <el-button style="float: right;height: 29px;margin-top: 3px;margin-right: 15px;line-height: 0;" @click="newProduct" type="primary">新商品</el-button>
      </div>
    </div>
    <el-table
      ref="multipleTable"
      :data="page.records"
      tooltip-effect="dark"
      style="width: 96%"
      @selection-change="handleSelectionChange" class="attr-table">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        align="center"
        label="编号"
        prop="productId"
        width="120">
      </el-table-column>
      <el-table-column
        align="center"
        prop="productName"
        label="商品名称"
        width="240">
      </el-table-column>
      <el-table-column
        prop="secondProductCategory.categoryName"
        align="center"
        label="二级分类"
        width="160">
      </el-table-column>
      <el-table-column
        prop="firstProductCategory.categoryName"
        align="center"
        label="一级分类"
        width="160">
      </el-table-column>
      <el-table-column
        align="center"
        prop="inUser.username"
        label="录入人"
        width="180">
      </el-table-column>
      <el-table-column
        align="center"
        prop="suUser.username"
        label="鉴定人"
        width="180">
      </el-table-column>
      <el-table-column
        prop="asUser.username"
        align="center"
        label="评估人"
        width="180">
      </el-table-column>
      <el-table-column
        prop="gmtCreate"
        align="center"
        label="录入时间"
        width="260">
      </el-table-column>
      <el-table-column
        prop="productStatus"
        align="center"
        label="状态"
        show-overflow-tooltip>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="page.current"
                     :page-sizes="[5, 10, 15, 20]" :page-size="page.size" layout="total, sizes, prev, pager, next, jumper" :total="page.total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ApprTableZG",
    methods:{
      deleteProduct(){
        var ids = [];
        for(var i=0;i<this.multipleSelection.length;i++){
          ids.push(this.multipleSelection[i].productId)
        }
        console.log(ids)
        console.log("删除按钮");
        this.$axios.post("http://localhost:8888/product/deleteProduct", ids,{ emulateJSON: true }).then((resp)=>{
          console.log(resp.data.message);
          alert(resp.data.message)
          location.reload();
        })
      },
      newProduct(){
        this.$router.push("/index/appr/addAppr")
      },
      findApprbutes(){
        this.$axios.get("http://localhost:8888/product/getProductInfo",{
          params:{
            current: this.page.current,
            size: this.page.size,
            pages: this.page.pages,
            total: this.page.pages
          }
        }).then((resp)=>{
          console.log(resp);
          this.page.current = resp.data.data.current;
          this.page.pages = resp.data.data.pages;
          this.page.size = resp.data.data.size;
          this.page.total = resp.data.data.total;
          this.page.records = resp.data.data.records;
          console.log(this.page)
        })
      },
      fuzzyApprbutes(){
        //console.log(sessionStorage.getItem("fuzzyProduct").username)
        var fuzzy = JSON.parse(sessionStorage.getItem("fuzzyProduct"))
        console.log(fuzzy)
        this.$axios.get("http://localhost:8888/product/fuzzyProductInfo",{
          params:{
            current: this.page.current,
            size: this.page.size,
            pages: this.page.pages,
            total: this.page.pages,
            productName:fuzzy.inputBox,
            username: fuzzy.username,
            productStatus: fuzzy.productStatus

          }
        }).then((resp)=>{
          console.log(resp);
          this.page.current = resp.data.data.current;
          this.page.pages = resp.data.data.pages;
          this.page.size = resp.data.data.size;
          this.page.total = resp.data.data.total;
          this.page.records = resp.data.data.records;
          console.log(this.page)
        })
        sessionStorage.setItem("fuzzyProduct",null)
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleSizeChange(val) {
        this.findApprbutes()
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.findApprbutes()
        console.log(`当前页: ${val}`);
      }
    },data(){
      return {
        multipleSelection: [],
        page: {
          current: 1,
          size: 10,
          pages: 0,
          total: 0,
          records: []
        }
      }
    },created() {
      if (sessionStorage.getItem("fuzzyProduct") == "null" || sessionStorage.getItem("fuzzyProduct") == null){
        console.log("进入查询");
        this.findApprbutes()
      }
      if (sessionStorage.getItem("fuzzyProduct") != "null"){
        console.log("进入模糊查询")
        this.fuzzyApprbutes();
      }

    }
  }
</script>

<style scoped>
  #table-head{
    background-color: white;
    font-size: 18px;
    height: 35px;
    width: 96%;
    border-bottom: #1989fa 0.5px solid;
    margin-left: 2%;
    margin-top: 15px;
  }
  #table-head .el-input__inner{
    height: 29px;
    margin-top: 3px;
    float: right;
    width: 20%;
    margin-right: 15px;
  }
  #table-head p{
    float: left;
    margin: 0 0 0 10px;
    line-height: 35px;
  }
  #table-head .el-icon-s-grid{
    height: 35px;
    font-size: 22px;
    line-height: 35px;
    width: 35px;

    float: left;
  }
  .attr-table{
    margin-left: 2%;
    height: 80%;
  }
  .el-pagination{
    width: 28%;
    margin: 0 auto;
   }
</style>
