<template>
  <div id="one">
    <el-container>
      <el-header>
        <el-breadcrumb separator=">" style="line-height: 60px;font-size: 16px;color: #2c3e50">
          <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
          <el-breadcrumb-item>修改仓库配置</el-breadcrumb-item>
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
              <el-input v-model="form.name" class="inputbox" ></el-input>
            </el-form-item>
            <el-form-item label="联系人">
              <el-input v-model="form.username" class="inputbox"></el-input>
            </el-form-item>
            <el-form-item label="联系方式">
              <el-input v-model="form.phone" class="inputbox"></el-input>
            </el-form-item>
            <el-form-item label="地址" >
              <el-input v-model="form.address" class="inputbox"></el-input>
            </el-form-item>

            <el-form-item label="关联门店">
              <el-input v-model="form.forshop" :disabled="true" class="inputbox"></el-input>
            </el-form-item>

            <el-form-item label="状态">
              <el-radio-group v-model="form.resource">
                <el-radio label="启用"></el-radio>
                <el-radio label="停用"></el-radio>
              </el-radio-group>
            </el-form-item>

            <el-form-item style="margin-top: 30px">
              <el-button type="primary" @click="onSubmit">立即修改</el-button>
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
        id:'1',
        name: '',
        username: '',
        phone: '',
        address: '',
        forshop: '',
        resource: ''
      }
    }
  },
  methods:{
    //点击关闭，跳转回仓库页面
    shutdown(){
      this.$router.push("/index/wareHouse")
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
