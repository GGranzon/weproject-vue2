<template>
  <div id="big">
    <el-container>
      <el-header>修改会员信息

        <el-button type="success" icon="el-icon-circle-close"  circle></el-button>

      </el-header>
      <el-main>
        <div id="formtable">
          <el-form ref="form" :model="form" label-width="90px" >
            <el-form-item label="会员编号" >
              <el-input v-model="form.member_id" style="width: 350px" readonly=“readonly”></el-input>
            </el-form-item>
            <el-form-item label="姓名">
              <el-input v-model="form.name" style="width: 350px"></el-input>
            </el-form-item>
            <el-form-item label="手机">
              <el-input v-model="form.tel" style="width: 350px"></el-input>
            </el-form-item>
            <el-form-item label="证件号码">
              <el-input v-model="form.card_num" style="width: 350px"></el-input>
            </el-form-item>
            <el-form-item label="账户名称">
              <el-input v-model="form.account_name" style="width: 350px"></el-input>
            </el-form-item>
            <el-form-item label="开户行">
              <el-input v-model="form.opening_bank" style="width: 350px"></el-input>
            </el-form-item>
            <el-form-item label="账号">
              <el-input v-model="form.account_num" style="width: 350px"></el-input>
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
              <el-input v-model="form.frozen_money" style="width: 350px"></el-input>
            </el-form-item>
            <el-form-item label="透支额度/元">
              <el-input v-model="form.overdraft" style="width: 350px"></el-input>
            </el-form-item>
            <el-form-item label="可用积分">
              <el-input v-model="form.able_count" style="width: 350px"></el-input>
            </el-form-item>
            <el-form-item label="累计积分">
              <el-input v-model="form.all_count" style="width: 350px"></el-input>
            </el-form-item>
            <el-form-item label="入会日期">
              <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.join_date" style="width: 100%;margin-left: 9px"></el-date-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="所属渠道">
              <el-input v-model="form.distributor_id" style="width: 350px"></el-input>
            </el-form-item>
            <el-form-item label="状态">
              <el-radio-group v-model="form.status">
                <el-radio label="启用"></el-radio>
                <el-radio label="停用"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit" style="float: left;margin-left: 70px">保存</el-button>
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
        member_id:15,
        name: '',
        tel:'',
        card_num:'',
        account_name:'',
        opening_bank:'',
        account_num:'',
        birthday:'',
        level:'黄金VIP',
        balance:0,
        frozen_money:0,
        overdraft:0,
        able_count:0,
        all_count:0,
        join_date:'',
        distributor_id:'',
        status:''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
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
