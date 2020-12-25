<template>
  <div id="one">
    <el-container>
      <el-header>
        <el-breadcrumb separator=">" style="line-height: 60px;font-size: 16px;color: #2c3e50">
          <el-breadcrumb-item :to="{ path: '/index' }">主页</el-breadcrumb-item>
          <el-breadcrumb-item>修改仓库配置</el-breadcrumb-item>
          <el-button type="primary" round style="float: right;margin-top: 10px" @click="shutdown">关闭</el-button>
        </el-breadcrumb>
      </el-header>

      <el-main>

        <div id="two">
          <el-form ref="form" :model="form" label-width="80px">

            <el-form-item label="仓库编号">
              <el-input v-model="form.id" :disabled="true" placeholder="仓库编号不可修改！" class="inputbox"></el-input>
            </el-form-item>

            <el-form-item label="仓库名称">
              <el-input v-model="form.warehouse_name" class="inputbox" ></el-input>
            </el-form-item>
            <el-form-item label="联系人">
              <el-input v-model="form.contact" class="inputbox"></el-input>
            </el-form-item>
            <el-form-item label="联系方式">
              <el-input v-model="form.contact_way" class="inputbox"></el-input>
            </el-form-item>
            <el-form-item label="地址" >
              <el-input v-model="form.address" class="inputbox"></el-input>
            </el-form-item>

            <el-form-item label="关联门店">
              <el-input v-model="form.forshop" :disabled="true" class="inputbox"></el-input>
            </el-form-item>

            <el-form-item label="状态">
              <el-radio-group v-model="form.status">
                <el-radio label="启用"></el-radio>
                <el-radio label="停用"></el-radio>
              </el-radio-group>
            </el-form-item>

            <el-form-item style="margin-top: 30px">
              <el-button type="primary" @click="updated">立即修改</el-button>
              <el-button @click="shutdown">取消</el-button>
            </el-form-item>

          </el-form>
        </div>

      </el-main>

    </el-container>
  </div>

</template>

<script>
export default {
  name: "UpdateWearHouse-ll",
  data() {
    return {
      input: '',
      form: {
        id:'',
        warehouse_name: '',
        contact: '',
        contact_way: '',
        address: '',
        forshop: '',
        status: ''
      }
    }
  },
  methods:{
    //点击关闭，跳转回仓库页面
    shutdown(){
      this.$router.push("/index/wareHouse")
    },
    //从仓库展示页带过来的数据
    getitem() {
      this.form.id = sessionStorage.getItem("updateitem");
      console.log("从session里面取出来的数据：" + this.form.id)
    },

    //  执行修改逻辑
    updated(){
      alert(111111111111111);
      var _this = this;
      this.$axios.post("http://localhost:8888/warehouse/updatewarehouse",this.form).then((resp)=>{
        console.log("前端的form对象："+this.form);
        if (resp.data.statusCode==2000){
          //  修改成功之后 跳转到门店管理首页 展示
          _this.$router.push("warehouse")
        }else{
          //  修改失败之后 打印错误信息
          console.log((resp.data.message))
        }
      })
    }
  }
}
</script>

<style>
#one{
  height: 100%;
  width: 100%;
}
#two{
  width: 50%;
  margin-left: 25%;
}
.inputbox{
  width: 60%;
}
.el-header, .el-footer {
  background-color: whitesmoke;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 60px;
  height: 740px;
}
</style>
