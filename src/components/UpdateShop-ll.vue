<template>
  <div id="one">
    <el-container>
      <el-header>
        <el-breadcrumb separator=">" style="line-height: 60px;font-size: 16px;color: #2c3e50">
          <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
          <el-breadcrumb-item>修改门店信息</el-breadcrumb-item>
          <el-button type="primary" round style="float: right;margin-top: 10px" @click="shutdown">关闭</el-button>
        </el-breadcrumb>
      </el-header>

      <el-main>

        <div id="two">
          <el-form ref="form" :model="form" label-width="80px">

            <el-form-item label="编号">
              <el-input v-model="form.id" :disabled="true" class="inputbox"></el-input>
            </el-form-item>

            <el-form-item label="门店名称">
              <el-input v-model="form.name" class="inputbox" ></el-input>
            </el-form-item>
            <el-form-item label="联系人">
              <el-input v-model="form.username" class="inputbox"></el-input>
            </el-form-item>
            <el-form-item label="联系电话">
              <el-input v-model="form.phone" class="inputbox"></el-input>
            </el-form-item>
            <el-form-item label="地址" >
              <el-input v-model="form.address" class="inputbox"></el-input>
            </el-form-item>

            <el-form-item label="状态">
              <el-radio-group v-model="form.resource">
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
  name: "UpdateShop-ll",
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
        id:'1',
        name: '',
        username: '',
        phone: '',
        address: '',
        resource: ''
      },
      data: generateData(),
      value: [1],
    };
  },
  methods: {
    //点击关闭按钮，跳转回门店页面
    shutdown(){
      this.$router.push("/index/shop")
    },
    handleChange(value, direction, movedKeys) {
      console.log(value, direction, movedKeys);
    }
  }
}
</script>

<style scoped>
#one{
  width: 100%;
  height: 100%;
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
