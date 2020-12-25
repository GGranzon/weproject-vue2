<template>
  <div id="one">
    <el-container>
      <el-header>
        <el-breadcrumb separator=">" style="line-height: 60px;font-size: 16px;color: #2c3e50">
          <el-breadcrumb-item :to="{ path: '/index' }">主页</el-breadcrumb-item>
          <el-breadcrumb-item>添加仓库</el-breadcrumb-item>
          <el-button type="primary" round style="float: right;margin-top: 10px" @click="shutdown">关闭</el-button>
        </el-breadcrumb>
      </el-header>

      <el-main>

        <div id="two">
          <el-form ref="form" :model="form" label-width="80px">

            <el-form-item label="仓库编号">
              <el-input v-model="form.id" :disabled="true" class="inputbox"></el-input>
            </el-form-item>

            <el-form-item label="仓库名称">
              <el-input v-model="form.warehouseName" class="inputbox" ></el-input>
            </el-form-item>
            <el-form-item label="联系人">
              <el-input v-model="form.contact" class="inputbox"></el-input>
            </el-form-item>
            <el-form-item label="联系方式">
              <el-input v-model="form.contactWay" class="inputbox"></el-input>
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
              <el-button type="primary" @click="addWarehouse">立即添加</el-button>
              <el-button>取消</el-button>
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
        warehouseName: '',
        contact: '',
        contactWay: '',
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
    //执行新增仓库的逻辑
    addWarehouse(){
      // alert(1111111111111111);
      var _this = this;
      this.$http.post("http://localhost:8888/warehouse/addwarehouse",this.form).then((resp)=>{
        console.log(this.form)
        if (resp.data.statusCode==2000){
          this.$message.success('insert success')
          //新增成功的时候 跳转到仓库管理展示页面
          _this.$router.push("wareHouse")
        }else {
          //  新增不成功的时候 就打印展示一下错误信息
          console.log(resp.data.message)
        }
      })
    }
  }
}
</script>

<style>
#one{
  width: 100%;
  height: 100%;
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
