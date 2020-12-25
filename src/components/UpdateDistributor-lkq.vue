<template>
  <div id="big">
    <el-container>
      <el-header>修改渠道

        <el-button type="success" icon="el-icon-circle-close"  circle @click="closePage"></el-button>

      </el-header>
      <el-main>
        <div id="formtable">
          <el-form ref="form" :model="form" label-width="90px" >
            <el-form-item label="渠道编号" >
              <el-input v-model="form.id" style="width: 350px" readonly=“readonly”></el-input>
            </el-form-item>
            <el-form-item label="渠道名">
              <el-input v-model="form.name" style="width: 350px"></el-input>
            </el-form-item>
            <el-form-item label="手机">
              <el-input v-model="form.tel" style="width: 350px"></el-input>
            </el-form-item>
            <el-form-item label="证件号码">
              <el-input v-model="form.cardCode" style="width: 350px"></el-input>
            </el-form-item>
            <el-form-item label="账户名称">
              <el-input v-model="form.accountName" style="width: 350px"></el-input>
            </el-form-item>

            <el-form-item label="账号">
              <el-input v-model="form.accountCode" style="width: 350px"></el-input>
            </el-form-item>

            <el-form-item label="状态">
              <el-radio-group v-model="form.status">
                <el-radio label="启用"></el-radio>
                <el-radio label="停用"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="updateDis" style="float: left;margin-left: 70px" >保存</el-button>
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
        id:15,
        name: '',
        tel:'',
        cardCode:'',
        accountName:'',
        accountCode:'',
        memberNum:0,

        status:''
      }
    }
  },
  methods: {

    findDis(){
      var _this =this
      this.form.id= sessionStorage.getItem("id")
      console.log("更新的id"+this.form.id)
      //查询数据库，返回数据
      this.$axios.get("http://localhost:8888/distributor/findOne",{
        params:{
          id:this.form.id
        }
      }).then(function (res){
        console.log(res)
        _this.form.name=res.data.data.name,
          _this.form.tel=res.data.data.tel,
          _this.form.cardCode=res.data.data.cardCode,
          _this.form.accountName=res.data.data.accountName,
          _this.form.accountCode=res.data.data.accountCode,
          _this.form.status=res.data.data.status
      })
    },
    updateDis(){
      this.$axios.get("http://localhost:8888/distributor/update",{
        params:{
          id:this.form.id,
          name: this.form.name,
          tel:this.form.tel,
          cardCode:this.form.cardCode,
          accountName:this.form.accountName,
          accountCode:this.form.accountCode,
          status:this.form.status
        }
      }).then(function (res){
        if(res.data.statusCode==2000){
          alert("修改渠道商信息成功");
        }else if (res.data.statusCode==2001){
          alert("修改渠道商信息失败");

        }
      })
    },
    closePage(){
      console.log(11)
      this.$router.push("/index/distri")
    }
  },
  created() {
    this.findDis()
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

