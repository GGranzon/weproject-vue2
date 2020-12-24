<template>
  <div id="big">
    <el-container>
      <el-header>
        <i class="el-icon-s-home"></i>
        <span>主页</span>
        <i class="el-icon-d-arrow-right"></i>
        <span>渠道商档案</span>
        <el-button type="primary" >刷新</el-button>
      </el-header>
      <el-main>
        <span>状态</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <span id="sreach1">查询条件</span>
        <el-input v-model="input" placeholder="请输入会员名、手机查询"></el-input>
        <el-button id="sreach"  type="success" plain>查询</el-button>

        <el-popconfirm
          title="确定删除这条信息吗？"
        ><el-button slot="reference" type="danger" icon="el-icon-delete" circle style="margin-top: 50px"></el-button>
        </el-popconfirm>
        <el-button type="primary" icon="el-icon-edit" circle @click="update" style="margin-top: 50px"></el-button>
        <el-button type="success" icon="el-icon-circle-plus-outline" circle @click="add" style="margin-top: 50px"></el-button>
        <!--表格-->
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="id"
            label="序号"
            >
          </el-table-column>
          <el-table-column
            prop="name"
            label="渠道名"
            >
          </el-table-column>
          <el-table-column
            prop="tel"
            label="手机">
          </el-table-column>
          <el-table-column
            prop="cardCode"
            label="证件号">
          </el-table-column>
          <el-table-column
            prop="allCharge"
            label="累计充值">
          </el-table-column>
          <el-table-column
            prop="allPay"
            label="累计消费">
          </el-table-column>
          <el-table-column
            prop="memberNum"
            label="会员数量">
          </el-table-column>
          <el-table-column
            prop="status"
            label="状态">
          </el-table-column>

        </el-table>

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
      </el-main>
    </el-container>
  </div>
</template>

<script>

export default {
  name: "Distributor" +
    "-lkq",

  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,

      options: [{
        value: '选项1',
        label: '全部'
      }, {
        value: '选项2',
        label: '已启用'
      }, {
        value: '选项3',
        label: '已禁用'
      }],

      value: '',
      input: '',

      tableData: [{
        id:0,
        name: '王小虎',
        tel:'4545',
        allCharge: 1000.0,
        allPay:5454.0,
        memberNum:45152,
        cardCode:'2020.08.12',
        status:'已启用'
      }],
      multipleSelection: []
    }
  },
  methods: {
    //点击新增按钮，跳转新增界面
    add(){
      this.$router.push("/index/addDistri")
    },
    //点击修改按钮，跳转修改界面
    update(){
      this.$router.push("/index/updateDistri")
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
  }
}
</script>

<style>
#big{
  width: 100%;
  height: 100%;
}
.el-header, .el-footer {
  background-color: #E4E7ED;
  color: #333;
  text-align: left;
  line-height: 60px;
  width: 100%;
}
.el-button{
  float: right;
  height: 40px;
  /*padding-top: 10px;*/
  margin-top: 10px;
  margin-left: 10px;
}

.el-input{
  width: 300px;
}
#sreach{

  margin-left: 5px;
  margin-top: 1px;
}
#sreach1{
  margin-left: 50px;
}
.el-main {
  background-color:  	#F5F5F5;
  color: #333;
  float: left;
  width: 100%;
}
.el-table{
  margin-top: 60px;
}
</style>
