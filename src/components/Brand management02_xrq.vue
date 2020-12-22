<template>
  <div style="width: 100%;height: 100% ; margin: 0 auto">
    <el-header style="height: 40px">
      <span style="float: left">
        修改分类
      </span>
    </el-header>
    <div style="margin-left:18%;margin-top: 20px">
      <div style="width: 60%">
        <el-form :label-position="labelPosition" label-width="85px" :model="formLabelAlign" style="width: 80%">

          <el-form-item label="分类编号">
            <el-input v-model="formLabelAlign.name"></el-input>
          </el-form-item>

          <el-form-item label="分类名称">
            <el-input v-model="formLabelAlign.region"></el-input>
          </el-form-item>

          <el-form-item label="上级分类">
            <el-input v-model="formLabelAlign.type"></el-input>
          </el-form-item>

          <el-form-item label="排序">
            <el-input v-model="formLabelAlign.type"></el-input>
          </el-form-item>

          <span style="font-size: 14px;float: left;padding-left: 15px">是否显示</span>
          <el-radio v-model="radio" label="1">是</el-radio>
          <el-radio v-model="radio" label="2" style="margin-bottom: 20px">否</el-radio><br />

        </el-form>
      </div>

      <div style="width: 40% ; float: left ; " >
        <span style="float: left; font-size: 14px">待选商品大类</span>
        <el-input placeholder="请输入内容" >
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <div style="width: 40% ; float: left;margin-left: 20px" >
        <span style="float: left; font-size: 14px">适合商品大类</span>
        <el-input placeholder="请选择内容" >
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <el-transfer
        v-model="value"
        :props="{
      key: 'value',
      label: 'desc'
    }" style="float: left"
        :data="data">
      </el-transfer>
    </div>
    <el-footer style="height: 50px; width:100%;float: left">
      <el-button type="success" style="margin-top: 5px" @click="returnBrand">返 回</el-button>
      <el-button type="success" style="margin-top: 5px">保 存</el-button>
    </el-footer>
  </div>
</template>

<script>
export default {
  data() {
    const generateData = _ => {
      const data = [];
      for (let i = 1; i <= 15; i++) {
        data.push({
          value: i,
          desc: `备选项 ${ i }`,
        });
      }
      return data;
    };

    return {
      data: generateData(),
      value: [],
      labelPosition: 'right',
      radio: '1',
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      },
      fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
    };
  },
  methods: {
    //点击返回按钮，返回品牌界面
    returnBrand(){
      this.$router.push("/index/brandManage")
    },

    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    }
  }
}
</script>

<style scoped>
.el-header, .el-footer {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 40px;
}

</style>
