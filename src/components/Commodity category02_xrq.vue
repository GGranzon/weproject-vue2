<template>
  <div style="width: 100%;height: 100% ; ">
    <el-header style="height: 40px">
      <span style="float: left">
        新增商品大类
      </span>
    </el-header>
    <div style="margin-left:18%;margin-top: 20px">
      <el-form :label-position="labelPosition" label-width="85px" :model="productCategory" style="width: 400px ">

        <el-form-item label="分类编号">
          <el-input v-model="productCategory.id" disabled></el-input>
        </el-form-item>

        <el-form-item label="分类名称">
          <el-input v-model="productCategory.categoryName"></el-input>
        </el-form-item>

        <el-form-item label="排序">
          <el-input v-model="productCategory.sort"></el-input>
        </el-form-item>

        <el-form-item label="分类图标">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="fileList">
          <el-button size="small" type="primary">点击上传文件</el-button>
          <div slot="tip" class="el-upload__tip" style="width: 700px ;">图标尺寸为36*36比例，大小不能超过200KB，图片只能为JPG、PNG、GIF格式</div>
        </el-upload>
        </el-form-item>

        <el-form-item label="备注" >
          <el-input style="width: 600px;" v-model="productCategory.description"></el-input>
        </el-form-item>
        <el-form-item label="鉴定图定义">
          <el-input style="width: 180px;float:left; margin-bottom:10px" v-model="productCategory.defin"></el-input>
          <el-select placeholder="必选" style="width: 80px ;margin-bottom:10px" value="">
            <el-option label="可选" value="shanghai" ></el-option>
          </el-select>
          <input type="button" value="删除"></input>

        </el-form-item>
      </el-form>
    </div>
    <el-footer style="height: 50px">
      <el-button type="info" style="margin-top: 5px;float: right;margin-right: 350px" @click="returnBigType">返回</el-button>
      <el-button type="success" style="margin-top: 5px;float: right;margin-right: 10px" @click="insertType">新增</el-button>
    </el-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: 'right',
      productCategory: {
         id:'',
         categoryName:'',
         sort:'',
         description:'',
         defin:'',

      },
      fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
    };
  },
  methods: {
    //点击返回，回到商品大类页面
    returnBigType(){
      this.$router.push("/index/commodity")
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
    insertType(){
      var _this=this
      console.log(this.productCategory)
      this.$axios.post("http://localhost:8888/product-category/add",this.productCategory).then(function (resp){
        alert(resp.data.message)
        _this.$router.push("/index/smallCommodity")
      })
    },

    insertTest(){
      this.$axios.get("http://localhost:8888/product-category/add")
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
