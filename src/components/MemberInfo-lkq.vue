<template>
  <div id="big">
    <el-container>
      <el-header>会员详情

        <el-button type="success" icon="el-icon-circle-close"  circle @click="closePage"></el-button>

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
          </el-table-column><el-table-column
            prop="accountName"
            label="账户名"
          >
          </el-table-column>
          <el-table-column
            prop="birthday"
            label="生日"
          >
          </el-table-column>
          <el-table-column
            prop="tel"
            label="手机">
          </el-table-column>
          <el-table-column
            prop="cardNum"
            label="证件号码">
          </el-table-column>
          <el-table-column
            prop="level"
            label="等级">
          </el-table-column>
          <el-table-column
            prop="openingBank"
            label="开户行">
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
            prop="joinDate"
            label="入会日期"
          >
          </el-table-column>
          <el-table-column
            prop="distributorId"
            label="所属渠道"
          >
          </el-table-column>
          <el-table-column
            prop="status"
            label="状态"
          >
          </el-table-column>
        </el-table>
      </div>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "AddMember",
  data() {
    return {
      tableData:[],

    }
  },
  methods:{
    show(){
      var _this=this
      this.tableData.memberId= sessionStorage.getItem("memberid")
      console.log("更新的id"+this.tableData.memberId);
      this.$axios.get("http://localhost:8888/member/memberInfo",{
        params:{
          id:this.tableData.memberId
        }
      }).then(function (res){
        console.log(res.data.data)
          _this.tableData=res.data.data


      })
    },
    closePage(){
      this.$router.push("/index/member")
    }
  },
  created() {
    this.show()
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


