<template>
  <div style="width: 100%;height: 100% ; margin: 0 auto">
    <el-header style="height: 40px">
      <span style="float: left">
        修改分类
      </span>
    </el-header>
    <div style="margin-left:18%;margin-top: 20px">
      <el-form :label-position="labelPosition" label-width="85px" :model="formLabelAlign" style="width: 400px ">

        <el-form-item label="分类编号">
          <el-input v-model="updateData.id" disabled></el-input>
        </el-form-item>

        <el-form-item label="分类名称">
          <el-input v-model="updateData.categoryName"></el-input>
        </el-form-item>

        <el-form-item label="上级分类">
          <el-input v-model="updateData.categoryParent"></el-input>
        </el-form-item>

        <el-form-item label="数量单位">
          <el-input v-model="updateData.numUnit"></el-input>
        </el-form-item>
        <el-form-item label="排序">
          <el-input v-model="updateData.sort"></el-input>
        </el-form-item>



        <el-form-item label="鉴定图定义">
          <el-input style="width: 180px;float:left; margin-bottom:10px" v-model="updateData.defin"></el-input>
          <el-select placeholder="必选" value="" style="width: 80px ;margin-bottom:10px">
          </el-select>
<!--          <input type="button" value="删除"></input>-->
        </el-form-item>

        <el-form-item label="分类描述" style="width: 600px;">
          <el-input type="textarea" v-model=updateData.description></el-input>
        </el-form-item>
        <span style="font-size: 14px;float: left;padding-left: 15px">是否显示</span>
        <el-radio v-model="updateData.isShow" label="是" style="margin-left: 10px">是</el-radio>
        <el-radio v-model="updateData.isShow" label="否" style="margin-bottom: 20px">否</el-radio>
      </el-form>
    </div>
    <el-footer style="height: 50px">
      <el-button type="info" style="margin-top: 5px;margin-left:10px;margin-right:430px;  float: right" @click="returnSmall">返 回</el-button>
      <el-button type="success" style="margin-top: 5px ;float: right" @click="updatepro">保 存</el-button>
    </el-footer>
  </div>
</template>

<script>
export default {
  data() {

    return {
      labelPosition: 'right',
      radio: '1',

      updateData: {
        id:sessionStorage.getItem("dataId"),
        categoryName: '',
        categoryParent: '',
        numUnit:'',
        defin:'',
        description:'',
        isShow:'',
        sort:'',
      },
      fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
    };
  },
  methods: {
    //点击返回，跳转回商品小类页面
    returnSmall(){
      this.$router.push("/index/smallCommodity")
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

    updatepro(){
      this.$axios.post("http://localhost:8888/product-category/update",this.updateData).then(function (resp){
        console.log(resp.data.message)
      })
      // this.$router.go(0)
    }
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
