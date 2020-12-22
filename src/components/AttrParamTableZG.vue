<template>
  <div>
    <div>
      <div id="param-head">
        <i class="el-icon-s-grid" />
        <p>数据列表</p>
        <el-button style="float: right;height: 29px;margin-top: 3px;margin-right: 15px;line-height: 0;" type="danger">删除</el-button>
        <el-button style="float: right;height: 29px;margin-top: 3px;margin-right: 15px;line-height: 0;" type="warning" @click="update">修改</el-button>
        <el-button style="float: right;height: 29px;margin-top: 3px;margin-right: 15px;line-height: 0;" type="primary" >新增</el-button>
      </div>
    </div>
    <el-table
      ref="multipleTable"
      :data="tableData"
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
        width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="name"
        label="属性名称"
        width="220">
      </el-table-column>
      <el-table-column
        prop="name"
        align="center"
        label="属性是否可选"
        width="120">
      </el-table-column>
      <el-table-column
        align="center"
        prop="name"
        label="录入方式"
        width="220">
      </el-table-column>
      <el-table-column
        align="center"
        prop="name"
        label="可选值列表"
        width="250">
      </el-table-column>
      <el-table-column
        prop="address"
        align="center"
        label="排序"
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
        name: "AttrParamTable",
        methods:{
          //点击修改，跳转修改商品属性界面
          update(){
            alert("点击")
            this.$router.push("/index/attr/updateAttr")
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
            console.log(`每页 ${val} 条`);
          },
          handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
          }
        },
      data(){
          return {
            tableData: [{
              date: '2016-05-03',
              name: '王小虎',
              address: '参数列表'
            }, {
              date: '2016-05-02',
              name: '王小虎',
              address: '参数列表'
            }, {
              date: '2016-05-04',
              name: '王小虎',
              address: '参数列表'
            }],
            page: {
              current: 1,
              size: 10,
              pages: 0,
              total: 0,
              records: []
            }
          }
      }
    }
</script>

<style scoped>
  #param-head{
    background-color: white;
    font-size: 18px;
    height: 35px;
    width: 96%;
    border-bottom: #1989fa 0.5px solid;
    margin-left: 2%;
    margin-top: 15px;
  }
  #param-head .el-input__inner{
    height: 29px;
    margin-top: 3px;
    float: right;
    width: 20%;
    margin-right: 15px;
  }
  #param-head p{
    float: left;
    margin: 0 0 0 10px;
    line-height: 35px;
  }
  #param-head .el-icon-s-grid{
    height: 35px;
    font-size: 22px;
    line-height: 35px;
    width: 35px;

    float: left;
  }
  .attr-table{
    margin-left: 2%;
  }
  .el-pagination{
    width: 20%;
    margin-left: 40%;
  }
</style>
