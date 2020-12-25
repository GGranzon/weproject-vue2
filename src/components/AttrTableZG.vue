<template>
    <div>
      <div>
        <div id="table-head">
          <i class="el-icon-s-grid" />
          <p>数据列表</p>
          <el-button style="float: right;height: 29px;margin-top: 3px;margin-right: 15px;line-height: 0;" @click="deleteGroup" type="danger">删除</el-button>
          <el-button style="float: right;height: 29px;margin-top: 3px;margin-right: 15px;line-height: 0;" @click="updateGroup" type="warning">修改</el-button>
          <el-button style="float: right;height: 29px;margin-top: 3px;margin-right: 15px;line-height: 0;" @click="addGroup" type="primary">新增</el-button>
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
          prop="id"
          width="220">
        </el-table-column>
        <el-table-column
          align="center"
          prop="groupName"
          label="类型名称"
          width="300">
        </el-table-column>
        <el-table-column
          prop="sort"
          align="center"
          label="排序"
          width="220">
        </el-table-column>
        <el-table-column
          align="center"
          prop="groupAndCategory.productCategory.categoryName"
          label="适用商品大类"
          width="220">
        </el-table-column>
        <el-table-column
          align="center"
          prop="countConf"
          label="属性数量"
          width="120">
        </el-table-column>
        <el-table-column
          prop="status"
          align="center"
          label="状态"
          width="180"
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
        name: "AttrTableZG",
        methods:{
          findAttrbutes(){
            this.$axios.get("http://localhost:8888/product-attr-group/getAttrGroupInfo",{
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
          },fuzzyAttrbutes(){
            this.$axios.get("http://localhost:8888/product-attr-group/fuzzyQueryGroup",{
              params:{
                current: this.page.current,
                size: this.page.size,
                pages: this.page.pages,
                total: this.page.pages,
                fuzzy: sessionStorage.getItem("fuzzyString")
              }
            }).then((resp)=>{
              console.log(resp);
              if (resp.data.data !=null){
                this.page.current = resp.data.data.current;
                this.page.pages = resp.data.data.pages;
                this.page.size = resp.data.data.size;
                this.page.total = resp.data.data.total;
                this.page.records = resp.data.data.records;
              }
              console.log(this.page)
            })
            sessionStorage.setItem("fuzzyString",null)
          },
          addGroup(){
            console.log("新增按钮");
            this.$router.push("/index/attr/addAttr")
          },
          deleteGroup(){
            var ids = [];
            for(var i=0;i<this.multipleSelection.length;i++){
              ids.push(this.multipleSelection[i].id)
            }
            console.log(ids)
            console.log("删除按钮");
            this.$axios.post("http://localhost:8888/product-attr-group/deleteAttrGroup", ids,{ emulateJSON: true }).then((resp)=>{
              console.log(resp.data.message);
              alert(resp.data.message)
              location.reload();
            })
          },
          updateGroup(){
            console.log("修改按钮");
            console.log(this.multipleSelection);
            var count = 0;
            for(var i=0;i<this.multipleSelection.length;i++){
               count = i+1;
            }
            if (count > 1){
              alert("请选择一条数据")
            }
            if (count == 0){
              alert("请选择数据")
            }
            if (count == 1){
              sessionStorage.setItem("groupId",this.multipleSelection[0].id)
              this.$router.push("/index/attr/updateAttr")
            }
            //this.$router.push("/index/attr/updateAttr")
          },
          handleSelectionChange(val) {
            console.log(val)
            this.multipleSelection = val;
          },
          handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
          },
          handleCurrentChange(val) {
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
        console.log(sessionStorage.getItem("fuzzyString"))
          if (sessionStorage.getItem("fuzzyString") == "null" || sessionStorage.getItem("fuzzyString") == null){
            console.log("进入查询")
            this.findAttrbutes();
          }
          if (sessionStorage.getItem("fuzzyString") != "null"){
            console.log("进入模糊查询")
            this.fuzzyAttrbutes();
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
  }.el-pagination{
     width: 28%;
     margin: 0 auto;
   }
</style>
