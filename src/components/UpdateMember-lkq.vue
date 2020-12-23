<template>
  <div id="big">
    <el-container>
      <el-header>修改会员信息

        <el-button type="success" icon="el-icon-circle-close"  circle @click="closePage"></el-button>

      </el-header>
      <el-main>
        <div id="formtable">
          <el-form ref="form" :model="form" label-width="90px" >
            <el-form-item label="会员编号" >
              <el-input v-model="form.memberId" style="width: 350px" readonly=“readonly”></el-input>
            </el-form-item>
            <el-form-item label="姓名">
              <el-input v-model="form.name" style="width: 350px"></el-input>
            </el-form-item>
            <el-form-item label="手机">
              <el-input v-model="form.tel" style="width: 350px"></el-input>
            </el-form-item>
            <el-form-item label="证件号码">
              <el-input v-model="form.cardNum" style="width: 350px"></el-input>
            </el-form-item>
            <el-form-item label="账户名称">
              <el-input v-model="form.accountName" style="width: 350px"></el-input>
            </el-form-item>
<!--            <el-form-item label="开户行">-->
<!--              <el-input v-model="form.openingBank" style="width: 350px"></el-input>-->
<!--            </el-form-item>-->
            <el-form-item label="账号">
              <el-input v-model="form.accountNum" style="width: 350px"></el-input>
            </el-form-item>

            <el-form-item label="会员等级" >
              <el-select v-model="form.level" style="margin-right: 158px" >
                <el-option label="黄金VIP" value="黄金VIP"></el-option>
                <el-option label="钻石VIP" value="钻石VIP"></el-option>
                <el-option label="超级VIP" value="超级VIP"></el-option>
              </el-select>
            </el-form-item>
<!--            <el-form-item label="可用余额/元">-->
<!--              <el-input v-model="form.balance" style="width: 350px" readonly=“readonly”></el-input>-->
<!--            </el-form-item>-->
            <el-form-item label="冻结金额/元">
              <el-input v-model="form.frozenMoney" style="width: 350px"></el-input>
            </el-form-item>
            <el-form-item label="透支额度/元">
              <el-input v-model="form.overdraft" style="width: 350px"></el-input>
            </el-form-item>
            <el-form-item label="可用积分">
              <el-input v-model="form.ableCount" style="width: 350px"></el-input>
            </el-form-item>
            <el-form-item label="累计积分">
              <el-input v-model="form.allCount" style="width: 350px" readonly=“readonly”></el-input>
            </el-form-item>

            <el-form-item label="所属渠道">
              <el-input v-model="form.distributorId" style="width: 350px"></el-input>
            </el-form-item>
            <el-form-item label="状态">
              <el-radio-group v-model="form.status">
                <el-radio label="启用"></el-radio>
                <el-radio label="停用"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item>
              <el-button type="primary"  style="float: left;margin-left: 70px" @click="updateMember">保存</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "AddMember",
  data() {
    return {
      form: {
        memberId:'',
        name: '',
        tel:'',
        cardNum:'',
        accountName:'',
        openingBank:'',
        accountNum:'',
        birthday:'',
        level:'黄金VIP',
        balance:100,
        frozenMoney:1000,
        overdraft:10000,
        ableCount:123,
        allCount:1234,
        joinDate:'',
        distributorId:'',
        status:''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
    findMember(){
      var _this =this
      this.form.memberId= sessionStorage.getItem("memberid")
      console.log("更新的id"+this.form.memberId)
      //查询数据库，返回数据
      this.$axios.get("http://localhost:8888/member/findOne",{
        params:{
          memberId:this.form.memberId
        }
      }).then(function (res){
          console.log(res)
              _this.form.name=res.data.data.name,
              _this.form.tel=res.data.data.tel,
              _this.form.cardNum=res.data.data.cardNum,
              _this.form.accountName=res.data.data.accountName,
              _this.form.accountNum=res.data.data.accountNum,
              _this.form.level=res.data.data.level,
              _this.form.frozenMoney=res.data.data.frozenMoney,
              _this.form.overdraft=res.data.data.overdraft,
              _this.form.ableCount=res.data.data.ableCount,
              _this.form.allCount=res.data.data.allCount,
              _this.form.distributorId=res.data.data.distributorId,
              _this.form.status=res.data.data.status
      })
    },
    updateMember(){
      this.$axios.get("http://localhost:8888/member/update",{
        params:{
          memberId:this.form.memberId,
          name: this.form.name,
          tel:this.form.tel,
          cardum:this.form.cardum,
          accountName:this.form.accountName,
          accountNum:this.form.accountNum,
          level:this.form.level,
          frozenMoney:this.form.frozenMoney,
          overdraft:this.form.overdraft,
          ableCount:this.form.ableCount,
          allCount:this.form.allCount,
          distributorId:this.form.distributorId,
          status:this.form.status
        }
      }).then(function (res){
        if(res.data.statusCode==2000){
          alert("修改会员信息成功");
        }else if (res.data.statusCode==2001){
          alert("修改会员信息失败");

        }
      })
    },
    closePage(){
      this.$router.push("/index/member")
    }
  },
  created() {
    this.findMember()
  }
}
</script>

<style scoped>
#big{
  margin-left: 300px;
  width: 800px;
}
#formtable{
  border: #333333 0px solid;
  margin-left: 20%;
  width: 60%;
  height: 100%;
}
.el-form-item{
  height: 25px;

}
.el-header, .el-footer {
  background-color: #E4E7ED;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-button{
  float: right;
  margin-top: 10px ;
}

.el-main {
  background-color: #F5F5F5;
  color: #333;
  text-align: center;
  float: left;
  line-height: 160px;
}
</style>
