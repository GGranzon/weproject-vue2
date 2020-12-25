<template>
  <div>
    <div id="updataAttr-head">
      <i class="el-icon-menu" />
      <p>新增属性</p>
      <i @click="back" class="el-icon-close" />
    </div>
    <div id="updataAttr-from">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="类型名称">
          <el-input v-model="form.groupName"></el-input>
        </el-form-item>
        <el-form-item label="排序">
          <el-input v-model="form.sort"></el-input>
        </el-form-item>
        <el-form-item label="是否启用">
          <el-radio-group v-model="form.status">
            <el-radio label="启用"></el-radio>
            <el-radio label="停用"></el-radio>
          </el-radio-group>
        </el-form-item>
        适用商品大类：
        <template v-for="category in categorys">
          <input type="radio" id="jack" :value="category.id" v-model="form.categoryid">
          <label for="jack">{{category.categoryName}}</label>
        </template>
        <el-form-item>
          <el-button style="margin-top: 20px" type="primary" @click="onSubmit">保存</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AddAttrZG",
    methods:{
      back(){
        this.$router.push("/index/attr/attrTable")
      },
      onSubmit() {
        console.log(this.form)
        this.$axios.get("http://localhost:8888/product-attr-group/addAttrGroup",{
          params:{
            groupName:this.form.groupName,
            status:this.form.status,
            sort:this.form.sort,
            categoryId:this.form.categoryid
          }
        }).then((resp)=>{
          if (resp.data.message == "新增成功"){
            this.$router.push("/index/attr/attrTable");
          }else {
            alert("新增失败")
          }
        })
      },
      getCategorys(){
        this.$axios.get("http://localhost:8888/product-attr-group/getCategorys",{

        }).then((resp)=>{
          console.log(resp.data.data);
          this.categorys = resp.data.data;
          console.log(this.categorys);
        })
      }
    },data(){
      return {
        form: {
          groupName: "",
          status: "",
          sort: "",
          categoryid: ""
        },
        categorys:{}
      }
    },created() {
      this.getCategorys()
    }
  }
</script>

<style scoped>
  #updataAttr-head{
    background-color: white;
    font-size: 18px;
    height: 35px;
    width: 96%;
    margin-left: 2%;
    margin-top: 15px;
  }
  #updataAttr-head p{
    float: left;
    margin: 0 0 0 10px;
    line-height: 35px;
  }
  #updataAttr-head .el-icon-menu{
    height: 35px;
    font-size: 22px;
    line-height: 35px;
    width: 35px;

    float: left;
  }

  #updataAttr-head .el-icon-close{
    height: 35px;
    font-size: 30px;
    line-height: 35px;
    width: 35px;
    float: right;
  }
  #updataAttr-from{
    width: 96%;
    margin-left: 2%;
    background-color: white;
  }
  #updataAttr-from .el-form{
    width: 60%;
    margin-left: 20%;
  }
  #updataAttr-from .el-input{
    width: 60%;
  }
  .el-form{
    font-size: 15px;
    font-weight: 100;
  }


</style>
