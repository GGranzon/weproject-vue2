<template>
  <div id="big">
    <el-container>
      <el-header>
        <i class="el-icon-s-home"></i>
        <span>主页</span>
        <i class="el-icon-d-arrow-right"></i>
        <span>渠道商档案</span>
        <el-button type="primary" @click="refresh">刷新</el-button>
      </el-header>
      <el-main>
        <span>状态</span>
        <el-select v-model="value" @change="findByStatus" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <span id="sreach1">查询条件</span>
        <el-input v-model="input" placeholder="请输入渠道名、手机查询"></el-input>
        <el-button id="sreach"  type="success" plain @click="findByConditions">查询</el-button>

        <el-button type="danger" icon="el-icon-delete" @click="deletee"  circle style="margin-top: 50px"></el-button>

        <el-button type="primary" icon="el-icon-edit" circle @click="update" style="margin-top: 50px"></el-button>
        <el-button type="success" icon="el-icon-circle-plus-outline" circle @click="add" style="margin-top: 50px"></el-button>
        <!--表格-->
        <el-table
          ref="multipleTable"
          :data="this.page.records"
          tooltip-effect="dark"
          style="width: 100%"

          @selection-change="handleSelectionChange"> <!--选择方法-->
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
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
            label="手机"
          >
          </el-table-column>
          <el-table-column
            prop="cardCode"
            label="证件号码"
          >
          </el-table-column>
          <el-table-column
            prop="accountName"
            label="账户名称"
          >
          </el-table-column>
          <el-table-column
            prop="memberNum"
            label="会员数量"
          >
          </el-table-column>
          <el-table-column
            prop="status"
            label="状态"
          >
          </el-table-column>
        </el-table>

        <div style="margin-top: 20px">
          <div class="block">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="this.page.current"
              :page-sizes="[5, 10, 15, 20]"
              :page-size="5"
              layout="total, sizes, prev, pager, next, jumper"
              :total="this.page.total"><!--总页数-->
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
      page:{
        current:1,
        total:0,
        size: 5,
        pages:0,
        records: [],
      },

      options: [{
        value: '选项1',
        label: '全部'
      }, {
        value: '选项2',
        label: '启用'
      }, {
        value: '选项3',
        label: '停用'
      }],

      value: '',
      input: '',
      sessionDis:"",
      deleted:[],

      tableData: [{
        id:0,
        name: '王小虎',
        tel:'4545',
        accountName: "",
        memberNum:45152,
        cardCode:'',
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
      sessionStorage.setItem("id",this.sessionDis)
      console.log("1111"+this.sessionDis)
      this.$router.push("/index/updateDistri")
    },
    //删除
    deletee(){
      console.log(this.deleted)
      this.$axios.post("http://localhost:8888/distributor/del",this.deleted).then(function (res){
        if(res.data.statusCode==2000){
          alert("删除成功，请刷新")
        }
      })
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
    //选择框
    handleSelectionChange(val) {
      alert("只能修改一条会员信息")
      console.log(val)
      for(var i= 0;i<val.length;i++){
        this.sessionDis =val[i].id,
          this.deleted[i]=val[i].id
      }
      this.multipleSelection = val;
    },
    handleSizeChange(val) {
      this.page.size=val;
      this.show();
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.page.current=val;
      this.show()
      console.log(`当前页: ${val}`);
    },
    //展示渠道商信息
    show(){
      var _this =this
      this.$axios.get("http://localhost:8888/distributor/page",{
        params:{
          current:this.page.current,
          size:this.page.size
        }
      }).then(function (res){
        _this.page.total=res.data.data.total;
        _this.page.records=res.data.data.records;
      })
    },
    //根据状态查询/停用和启用
    findByStatus(vid){
      //获取下拉框中的值
      var cond = "";
      if(vid=='选项1'){
        cond = "全部";
      }else if (vid=='选项2'){
        cond = "启用";
      }else if (vid=='选项3'){
        cond = "停用";
      }
      console.log(cond)
      //按状态查询
      var _this =this
      this.$axios.get("http://localhost:8888/distributor/status",{
        params:{
          sta:cond,
          current:this.page.current,
          size:this.page.size
        }
      }).then(function (res){
        _this.page.total=res.data.data.total;
        _this.page.records=res.data.data.records;
      })
    },
    //按查询条件查询
    findByConditions(){
      var _this =this
      console.log(this.input)
      this.$axios.get("http://localhost:8888/distributor/condition",{
        params:{
          condition:this.input,
          current:this.page.current,
          size:this.page.size
        }
      }).then(function (res){
        console.log(res)

        _this.page.total=res.data.data.total;
        _this.page.records=res.data.data.records;
      })
    },
    refresh(){
      this.show();
      this.input=""

    }
  },
  created() {
    this.show();
  },
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
