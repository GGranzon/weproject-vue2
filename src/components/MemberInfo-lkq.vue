<template>
  <div id="big">
    <el-container>
      <el-header>会员详情

        <el-button type="success" icon="el-icon-circle-close"  circle></el-button>

      </el-header>
      <div id="formtable">
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="memberId"
            label="序号"
          >
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
          >
          </el-table-column>
          <el-table-column
            prop="tel"
            label="手机">
          </el-table-column>
          <el-table-column
            prop="balance"
            label="可用余额"
          >
          </el-table-column>
          <el-table-column
            prop="frozenMoney"
            label="冻结金额"
          >
          </el-table-column>
          <el-table-column
            prop="ableCount"
            label="可用积分"
          >
          </el-table-column>
          <el-table-column
            prop="joinDate"
            label="入会日期"
          >
          </el-table-column>
        </el-table>
      </div>

        <div style="margin-top: 20px">
          <div class="block">
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

    </el-container>
  </div>
</template>

<script>
export default {
  name: "AddMember",
  data() {
    return {
      tableData: [{
        memberId:0,
        name: '王小虎',
        tel:'4545',
        balance: 1000.0,
        frozenMoney:5454.0,
        ableount:45152,
        joinDate:'2020.08.12'
      }]
    }
  }
}
</script>

<style scoped>
#big{
  height: 100%;
  width: 100%;
}

.el-header, .el-footer {
  background-color: #E4E7ED;
  color: #333;
  text-align: center;
  width: 100%;
  line-height: 60px;
}

.el-main {
  background-color: #F5F5F5;
  color: #333;
  text-align: center;
  float: left;
  line-height: 160px;
}
.el-button{
  float: right;
  margin-top: 10px ;
}
</style>


