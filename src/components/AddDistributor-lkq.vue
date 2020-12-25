<template>
  <div id="big">
    <el-container>
      <el-header>新增渠道

        <el-button type="success" icon="el-icon-circle-close"  circle @click="closePage"></el-button>

      </el-header>
      <el-main>
        <div id="formtable">
          <el-form ref="form" :model="form" label-width="90px" >

            <el-form-item label="渠道名">
              <el-input v-model="form.name" @blur="findByName" style="width: 350px"></el-input>
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
            <el-form-item label="开户行">
              <el-input v-model="form.openingBank" style="width: 350px"></el-input>
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
        name: '',
        tel:'',
        cardCode:'',
        accountName:'',
        openingBank:'',
        accountCode:'',
        status:''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
      console.log(this.form.status)
      this.$axios.post("http://localhost:8888/distributor/save",this.form).then(function (res){
        console.log(res);
        if(res.data.statusCode==2000){
          alert("新增会员成功");
        }else if (res.data.statusCode==2001){
          alert("新增会员失败");

        }
      })
    },
    //根据渠道商名查找
    findByName(){
      this.$axios.get("http://localhost:8888/distributor/isEmptyDis",{
        params:{
          name:this.form.name
        }
      }).then(function (res){
        console.log(res)
        if(res.data.statusCode==2003){
          alert("该渠道商已存在");
        }else if (res.data.statusCode==2000){
          alert("还未注册，可以注册")
        }
      })
    },
    closePage(){
      this.$router.push("/index/distri")
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

