<template>
  <div id="one">
    <el-container>
      <el-header>
        <el-breadcrumb separator=">" style="line-height: 60px;font-size: 16px;color: #2c3e50">
          <el-breadcrumb-item :to="{ path: '/index' }">主页</el-breadcrumb-item>
          <el-breadcrumb-item>新增门店</el-breadcrumb-item>
          <el-button type="primary" round style="float: right;margin-top: 10px" @click="shutdown">关闭</el-button>
        </el-breadcrumb>
      </el-header>

      <el-main>
        <div id="two">
          <el-form ref="form" :model="form" label-width="80px">

            <el-form-item label="编号">
              <el-input v-model="form.id" :disabled="true" class="inputbox" placeholder="编号将由系统自动生成"></el-input>
            </el-form-item>

            <el-form-item label="门店名称">
              <el-input v-model="form.shopName" class="inputbox" ></el-input>
            </el-form-item>
            <el-form-item label="联系人">
              <el-input v-model="form.contact" class="inputbox"></el-input>
            </el-form-item>
            <el-form-item label="联系电话">
              <el-input v-model="form.tel" class="inputbox"></el-input>
            </el-form-item>
            <el-form-item label="地址" >
              <el-input v-model="form.address" class="inputbox"></el-input>
            </el-form-item>

            <el-form-item label="状态">
              <el-radio-group v-model="form.status">
                <el-radio label="启用"></el-radio>
                <el-radio label="停用"></el-radio>
              </el-radio-group>
            </el-form-item>

            <template>
              <div style="text-align: center">
                <el-transfer
                  style="text-align: left; display: inline-block"
                  v-model="value"
                  filterable
                  :left-default-checked="[2, 3]"
                  :right-default-checked="[1]"
                  :render-content="renderFunc"
                  :titles="['待选仓库', '已选仓库']"
                  :button-texts="['', '']"
                  :format="{
                   noChecked: '${total}',
                   hasChecked: '${checked}/${total}'
                   }"
                  @change="handleChange"
                  :data="data">
                  <el-button class="transfer-footer" slot="left-footer" size="small">操作</el-button>
                  <el-button class="transfer-footer" slot="right-footer" size="small">操作</el-button>
                </el-transfer>
              </div>
            </template>
<!--            <template>-->
<!--              <el-transfer v-model="value" :data="data"></el-transfer>-->
<!--            </template>-->


            <el-form-item style="margin-top: 30px">
              <el-button type="primary" @click="addShop">立即新增</el-button>
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
  name: "AddShop-ll",
  data() {
    const generateData = _ => {
      const data = [];
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `备选项 ${ i }`
        });
      }
      return data;
    };
    return {
      input: '',
      form: {
        id:'',
        shopName: '',
        contact: '',
        tel: '',
        address: '',
        status: ''
      },
      data: generateData(),
      value: [1],
    };
  },
  methods: {
    //点击关闭，跳转回门店页面
    shutdown(){
      this.$router.push("/index/shop")
    },
    handleChange(value, direction, movedKeys) {
      console.log(value, direction, movedKeys);
    },
    //执行新增门店的逻辑
    addShop(){
      var _this = this;
      this.$http.post("http://localhost:8888/shop/addshop",this.form).then((resp)=>{
        console.log(this.form)
        if (resp.data.statusCode==2000){
          this.$message.success('insert success')
          //新增成功的时候 跳转到门店管理展示页面
          _this.$router.push("shop")
        }else {
        //  新增不成功的时候 就打印展示一下错误信息
          console.log(resp.data.message)
        }
      })
    }
  }
}
</script>

<style scoped>
#one{
  height: 100%;
  width: 100%;
}
#two{
  width: 50%;
  margin-left: 25%;
}
.transfer-footer {
  margin-left: 20px;
  margin-bottom: 10px;
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
