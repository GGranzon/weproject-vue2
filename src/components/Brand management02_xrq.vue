<template>
  <div style="width: 100%;height: 100% ; margin: 0 auto">
    <el-header style="height: 40px">
      <span style="float: left">
        修改分类
      </span>
    </el-header>
    <div style="margin-left:18%;margin-top: 20px">
      <div style="width: 60%">
        <el-form :label-position="labelPosition" label-width="85px" :model="brandData" style="width: 80%">

          <el-form-item label="品牌id">
            <el-input v-model="brandData.id" disabled></el-input>
          </el-form-item>

          <el-form-item label="品牌名称">
            <el-input v-model="brandData.brandName"></el-input>
          </el-form-item>

          <el-form-item label="品牌首字母">
            <el-input v-model="brandData.brandInitial"></el-input>
          </el-form-item>

          <el-form-item label="品牌信息">
            <el-input v-model="brandData.brandInfo"></el-input>
          </el-form-item>

          <el-form-item label="排序">
            <el-input v-model="brandData.sort"></el-input>
          </el-form-item>

          <span style="font-size: 14px;float: left;padding-left: 15px">是否显示</span>
          <el-radio v-model="brandData.isShow" label="是" property="是">是</el-radio>
          <el-radio v-model="radio" label="2" style="margin-bottom: 20px">否</el-radio><br />

        </el-form>
      </div>
    </div>
    <el-footer style="height: 50px; width:100%;float: left">
      <el-button type="info" style="margin-top: 5px;float: right;margin-right: 530px" @click="returnBrand">返 回</el-button>
      <el-button type="success" style="margin-top: 5px;float: right;margin-right: 10px" @click="insertBrand">保 存</el-button>
    </el-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: [],
      labelPosition: 'right',
      radio: '否',
      brandData: {
        id:'',
        brandName: '',
        brandNnitial: '',
        brandInfo: '',
        isShow:'',
        sort:'',
      },
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
    },
    /*新增商品大类*/
    insertBrand(){
      var _this=this
      console.log(this.brandData)
      this.$axios.post("http://localhost:8888/brandinfo/add",this.brandData).then(function (resp){
        alert(resp.data.message)
        _this.$router.push("/index/brandManage")
      })
    },
  }
}
</script>

<style scoped>
.el-header{
  background-color:white;
  color: #333333;
  text-align:left;
  line-height: 60px;
}

</style>
