<template>
<div id="big">
  <el-container>
    <el-header>新增用户

      <el-button type="success" icon="el-icon-circle-close"  circle @click="closePage"></el-button>

    </el-header>
    <el-main>
      <div id="formtable">
        <el-form ref="form" :model="form" label-width="90px" >

          <el-form-item label="姓名">
            <el-input v-model="form.name" @blur="findByName"   style="width: 350px"></el-input>
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
          <el-form-item label="开户行">
            <el-input v-model="form.openingBank" style="width: 350px"></el-input>
          </el-form-item>
          <el-form-item label="账号">
            <el-input v-model="form.accountNum" style="width: 350px"></el-input>
          </el-form-item>
          <el-form-item label="生日">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.birthday" style="width: 100%;margin-left: 9px"></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="会员等级" >
            <el-select v-model="form.level" style="margin-right: 158px" >
              <el-option label="黄金VIP" value="黄金VIP"></el-option>
              <el-option label="钻石VIP" value="钻石VIP"></el-option>
              <el-option label="超级VIP" value="超级VIP"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="可用余额/元">
            <el-input v-model="form.balance" style="width: 350px"></el-input>
          </el-form-item>
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
            <el-input v-model="form.allCount" style="width: 350px"></el-input>
          </el-form-item>
          <el-form-item label="入会日期">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.joinDate" style="width: 100%;margin-left: 9px"></el-date-picker>
            </el-col>
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
            <el-button type="primary" @click="onSubmit" style="float: left;margin-left: 70px">立即创建</el-button>
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
        memberId:15,
        name: '',
        tel:'',
        cardNum:'',
        accountName:'',
        openingBank:'',
        accountNum:'',
        birthday:'',
        level:'黄金VIP',
        balance:0,
        frozenMoney:0,
        overdraft:0,
        ableCount:0,
        allCount:0,
        joinDate:'',
        distributorId:'',
        status:''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
      console.log(this.form);
      this.$axios.post("http://localhost:8888/member/save",this.form).then(function (res){
        console.log(res);
        if(res.data.statusCode==2000){
          alert("新增会员成功");
        }else if (res.data.statusCode==2001){
          alert("新增会员失败");

        }
      })
    },
    //根据姓名查询会员
    findByName(){
      this.$axios.get("http://localhost:8888/member/isEmptyMem",{
        params:{
          name:this.form.name
        }
      }).then(function (res){
        console.log(res)
        if(res.data.statusCode==2003){
          alert("该会员已存在");
        }else if (res.data.statusCode==2000){
          alert("还未注册，可以注册")
        }
      })
    },


    closePage(){
      this.$router.push("/index/member")
    }
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
