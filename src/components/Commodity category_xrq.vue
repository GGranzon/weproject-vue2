<template >
  <div style="width: 100%;height: 100%;">
    <div>
      <el-container>
        <!--头部信息展示-->
        <el-header>
          <span>主页</span>
          <span>></span>
          <span>商品大类</span>
        </el-header>

        <div style="background-color:#E9EEF3;height: 50px;padding-top: 8px">
          <span style="line-height: 40px;float:left ; padding-left: 20px">筛选查询</span>
          <el-input placeholder="请输入内容" style="width: 50%" v-model="input" class="input-with-select">
            <el-select v-model="select" slot="prepend" placeholder="请选择">
              <el-option label="大类编号" value="1"></el-option>
              <el-option label="大类名称" value="2"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
          <el-button type="primary" @click="add">新增</el-button>
          <el-button type="warning" >修改</el-button>
          <el-button type="danger" >删除</el-button>
        </div>


      </el-container>
    </div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="num"
        label="大类编号"
        width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="大类名称"
        width="120">
      </el-table-column>
      <el-table-column
        prop="sort"
        label="排序"
        width="120"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="remarks"
        label="备注"
        show-overflow-tooltip>
      </el-table-column>
    </el-table>
    <div style="background-color: #E9EEF3">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {

    return {

      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        remarks: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        remarks: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        remarks: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        remarks: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        remarks: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        remarks: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        remarks: '上海市普陀区金沙江路 1518 弄'
      }],
      multipleSelection: []
    }
  },

  methods: {
    //点击新增按钮，进入新增界面
    add(){
      this.$router.push("/index/commodity2")
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
    }
  }
}
</script>

<style scoped>

.el-header, .el-footer {
  background-color: black;
  color: white;
  text-align:left;
  line-height: 60px;
}


</style>
