<template >
  <div style="width: 100%;height: 100% ; margin: 0 auto">
    <div>
      <el-container>
        <div style="background-color:#E9EEF3;height: 50px;padding-top: 8px;width: 100%">
          <span style="line-height: 40px;float:left ; padding-left: 20px">筛选查询</span>
          <el-input placeholder="请输入内容" style="width: 30%" v-model="input" class="input-with-select">

            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
          <el-button type="primary">新增</el-button>
          <el-button type="warning" >修改</el-button>
          <el-button type="danger" >删除</el-button>
          <el-button type="info" @click="returnSmall">返回</el-button>
        </div>


      </el-container>
    </div>

    <div style="text-align: center">
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
          label="编号"
          width="100">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="分类名称"
          width="150">
        </el-table-column>
        <el-table-column
          prop="type"
          label="上级分类"
          width="150"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="level"
          label="级别"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="unit"
          label="单位"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="sort"
          label="排序"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="display"
          label="显示"
          show-overflow-tooltip>
        </el-table-column>

      </el-table>
    </div>
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
        date: '001',
        name: '王小虎',
        type: '上海市普陀区金沙江路 1518 弄',
        level:'2',
        unit:'个',
        sort:'价格',
        display:'yes',
        operation:'新增上级  /  查看下级'
      }, {
        date: '002',
        name: '王小虎',
        remarks: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '003',
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
    //点击返回，跳转回小类页面
    returnSmall(){
      this.$router.push("/index/smallCommodity")
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

.el-header{
  background-color:white;
  color: #333333;
  text-align:left;
  line-height: 60px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
}

</style>
