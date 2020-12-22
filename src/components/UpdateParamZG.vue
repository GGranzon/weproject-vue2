<template>
  <div>
    <div id="updataParam-head">
      <i class="el-icon-menu" />
      <p>修改属性</p>
      <i class="el-icon-close" />
    </div>
    <div id="updataParam-from">
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
        <el-form-item label="属性是否可选">
          <el-radio-group v-model="form.resource">
            <el-radio label="唯一属性"></el-radio>
            <el-radio label="单选属性"></el-radio>
            <el-radio label="复选属性"></el-radio>
          </el-radio-group>
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
        name: "UpdateParamZG",
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
  #updataParam-head{
    background-color: white;
    font-size: 18px;
    height: 35px;
    width: 96%;
    margin-left: 2%;
    margin-top: 15px;
  }
  #updataParam-head p{
    float: left;
    margin: 0 0 0 10px;
    line-height: 35px;
  }
  #updataParam-head .el-icon-menu{
    height: 35px;
    font-size: 22px;
    line-height: 35px;
    width: 35px;

    float: left;
  }

  #updataParam-head .el-icon-close{
    height: 35px;
    font-size: 30px;
    line-height: 35px;
    width: 35px;
    float: right;
  }
  #updataParam-from{
    width: 96%;
    margin-left: 2%;
    background-color: white;
  }
  #updataParam-from .el-form{
    width: 60%;
    margin-left: 20%;
  }
  #updataParam-from .el-input{
    width: 60%;
  }
  .el-form-item .el-form-item__label{
    width: 150px;
  }
</style>
