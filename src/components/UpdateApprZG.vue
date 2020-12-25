<template>
  <div>
    <div id="updataAttr-head">
      <i class="el-icon-menu" />
      <p>修改商品</p>
      <i class="el-icon-close" />
    </div>
    <div id="updataAttr-from">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="编号">
          <el-input :disabled="true" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="来源门店">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="提交人">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="提交时间">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="商品分类">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="商品名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="商品品牌">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="商品货号">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="客户买价">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="商品描述">
          <el-input type="textarea" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="属性类型">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="材质">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="颜色">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="上市时间">
          <el-input type="date" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="适用对象">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="少女" name="type"></el-checkbox>
            <el-checkbox label="职业女性" name="type"></el-checkbox>
            <el-checkbox label="时尚女性" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="配件">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <div id="product-imgs">
          <div class="image"><img src=""></div>
          <div class="image"><img src=""></div>
          <div class="image"><img src=""></div>
          <div class="image"><img src=""></div>
        </div>
        <el-form-item label="新旧程度">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input type="textarea" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="官方价">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="评估价">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="典当价">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="收购价">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="售卖价">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="租价">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input type="textarea" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">评估确认</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "UpdateApprZG",
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
