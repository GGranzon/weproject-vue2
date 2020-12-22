<template>
    <div>
      <div id="updataAttr-head">
        <i class="el-icon-menu" />
        <p>修改属性</p>
        <i class="el-icon-close" />
       </div>
      <div id="updataAttr-from">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="编号">
            <el-input :disabled="true" v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="类型名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="排序">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="是否启用">
            <el-radio-group v-model="form.resource">
              <el-radio label="启用"></el-radio>
              <el-radio label="停用"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="适用商品大类">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="钟表" name="type"></el-checkbox>
              <el-checkbox label="珠宝首饰" name="type"></el-checkbox>
              <el-checkbox label="箱包" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">保存</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>

<script>
    export default {
        name: "UpdateAttrZG",
        methods:{
          onSubmit() {
            console.log('submit!');
          }
        },data(){
          return {
            form: {
              name: '',
              region: '',
              date1: '',
              date2: '',
              delivery: false,
              type: [],
              resource: '',
              desc: ''
            }
          }
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


</style>
