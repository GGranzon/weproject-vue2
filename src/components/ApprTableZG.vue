<template>
  <div style="height: 100%;width: 100%">
    <div>
      <div id="table-head">
        <i class="el-icon-s-grid" />
        <p>数据列表</p>
        <el-button style="float: right;height: 29px;margin-top: 3px;margin-right: 15px;line-height: 0;" type="danger">删除</el-button>
        <el-button style="float: right;height: 29px;margin-top: 3px;margin-right: 15px;line-height: 0;" type="primary">评估</el-button>
        <el-button style="float: right;height: 29px;margin-top: 3px;margin-right: 15px;line-height: 0;" type="primary">鉴定</el-button>
        <el-button style="float: right;height: 29px;margin-top: 3px;margin-right: 15px;line-height: 0;" type="warning" @click="update">修改</el-button>
        <el-button style="float: right;height: 29px;margin-top: 3px;margin-right: 15px;line-height: 0;" type="primary">新商品</el-button>
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
        label="商品名称"
        width="240">
      </el-table-column>
      <el-table-column
        prop="name"
        align="center"
        label="分类"
        width="160">
      </el-table-column>
      <el-table-column
        align="center"
        prop="name"
        label="录入人"
        width="180">
      </el-table-column>
      <el-table-column
        align="center"
        prop="name"
        label="鉴定人"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        align="center"
        label="评估人"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        align="center"
        label="录入时间"
        width="260">
      </el-table-column>
      <el-table-column
        prop="address"
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
      //点击修改，跳转修改界面
      update(){
        this.$router.push("/index/appr/updateAppr")
      },

      findAttrbutes(){
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
    },data(){
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
    },created() {

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
