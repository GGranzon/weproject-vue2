<template>
  <div>
    <div id="updataAttr-head">
      <i class="el-icon-menu" />
      <p>新增商品</p>
      <i @click="backweb" class="el-icon-close" />
    </div>
    <div id="updataAttr-from">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item  style="margin-top: 15px">
        </el-form-item>
        选择门店：
        <template v-for="shop in shops">
          <input type="radio"  id="shop" :value="shop.id" v-model="form.shopId">
          <label for="shop">{{shop.shopName}}</label>
        </template>
        <el-form-item  style="margin-top: 15px">
        </el-form-item>
        商品分类：
        <template v-for="category in categorys">
          <input type="radio"  id="category" :value="category.id" v-model="form.categoryId">
          <label for="category">{{category.categoryName}}</label>
        </template>
        <el-form-item label="商品名称" style="margin-top: 15px">
          <el-input v-model="form.productName"></el-input>
        </el-form-item>
        商品品牌：
        <template v-for="brand in brands">
          <input type="radio" id="brand" :value="brand.id" v-model="form.brandId">
          <label for="brand">{{brand.brandName}}</label>
        </template>
        <el-form-item style="margin-top: 15px" label="客户买价">
          <el-input v-model="form.firstPrice"></el-input>
        </el-form-item>
        <el-form-item label="商品描述">
          <el-input type="textarea" v-model="form.productDesc"></el-input>
        </el-form-item>
        属性类型：
        <template v-for="attrGroup in attrGroups">
          <input type="radio" id="attrGroup" :value="attrGroup.id" v-model="form.attrGroupid">
          <label for="attrGroup">{{attrGroup.groupName}}</label>
        </template>
        <el-row
          v-for="(attrConf,index) in attrConfs" style="margin-top: 15px">
          <el-col :span="20">
            <el-form-item :label="attrConf.attrName">
              <el-input style="width: 580px;" :disabled="true" placeholder="请输入"  v-model="attrConfs[index].opions"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="图片上传">
        </el-form-item>
        <template>
          <div>
            <input v-show="false" type="file" accept="image/*" @change="FrontFile($event)" ref="input" />
            <div style="width:200px;height:200px;border:1px solid;text-align:center;float: left" @click="FrontImg">
              <span v-if="imgFront==''">上传正面</span>
              <img style="max-height:100%;max-width:100%;" v-if="imgFront!=''" :src="imgFront" />
            </div>
            <input v-show="false" type="file" accept="image/*" @change="BackFile($event)" ref="input1" />
            <div style="width:200px;height:200px;border:1px solid;text-align:center;float: left" @click="BackImg">
              <span v-if="imgBack==''">上传背面</span>
              <img style="max-height:100%;max-width:100%;" v-if="imgBack!=''" :src="imgBack" />
            </div>
            <input v-show="false" type="file" accept="image/*" @change="SideFile($event)" ref="input2" />
            <div style="width:200px;height:200px;border:1px solid;text-align:center;float: left" @click="SideImg">
              <span v-if="imgSide==''">上传测面</span>
              <img style="max-height:100%;max-width:100%;" v-if="imgSide!=''" :src="imgSide" />
            </div>
            <input v-show="false" type="file" accept="image/*" @change="TopFile($event)" ref="input3" />
            <div style="width:200px;height:200px;border:1px solid;text-align:center;float: left" @click="TopImg">
              <span v-if="imgTop==''">上传顶部</span>
              <img style="max-height:100%;max-width:100%;" v-if="imgTop!=''" :src="imgTop" />
            </div>
<!--            <input v-show="false" type="file" accept="image/*" @change="FrontFile($event)" ref="input" />-->
<!--            <div style="width:200px;height:200px;border:1px solid;text-align:center;float: left" @click="openImg">-->
<!--              <span v-if="imgUrl==''">上传侧面</span>-->
<!--              <img style="max-height:100%;max-width:100%;" v-if="imgUrl!=''" :src="imgUrl" />-->
<!--            </div>-->
<!--            <input v-show="false" type="file" accept="image/*" @change="FrontFile($event)" ref="input" />-->
<!--            <div style="width:200px;height:200px;border:1px solid;text-align:center;float: left" @click="openImg">-->
<!--              <span v-if="imgUrl==''">上传顶部</span>-->
<!--              <img style="max-height:100%;max-width:100%;" v-if="imgUrl!=''" :src="imgUrl" />-->
<!--            </div>-->
          </div>
        </template>
        <el-form-item style="margin-top: 280px" label="新旧程度">
          <el-radio-group v-model="form.degree">
            <el-radio label="九成新"></el-radio>
            <el-radio label="八成新"></el-radio>
            <el-radio label="七成新"></el-radio>
            <el-radio label="六成新"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="备注">
          <el-input type="textarea" v-model="form.identifyNote"></el-input>
        </el-form-item>
        <el-form-item label="官方价">
          <el-input v-model="form.officaialPrice"></el-input>
        </el-form-item>
        <el-form-item label="评估价">
          <el-input v-model="form.valuationPrice"></el-input>
        </el-form-item>
        <el-form-item label="典当价">
          <el-input v-model="form.pawnPrice"></el-input>
        </el-form-item>
        <el-form-item label="收购价">
          <el-input v-model="form.purchasePrice"></el-input>
        </el-form-item>
        <el-form-item label="售卖价">
          <el-input v-model="form.salePrice"></el-input>
        </el-form-item>
        <el-form-item label="租价">
          <el-input v-model="form.rentPrice"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AddApprZG",
    methods:{
      onSubmit() {
        console.log(this.form)
        if (this.form.categoryId == null && this.form.productName == null){
          alert("请完善信息")
        }else {
          this.addProduct();
        }
      },uploadFile(){
        this.$axios.post("http://localhost:8888/product/uploadFile",this.param,{
          headers:{'Content-Type':'multipart/form-data'}
        }).then((resp)=>{
          console.log(resp.data.data);
        });
      },
      addProduct(){
        this.$axios.post("http://localhost:8888/product/addProduct",this.form).then((resp)=>{
          console.log(resp.data.data);
          for (let x of this.attrConfs){
            console.log(x);
            // this.setAttrConfs(x.id,x.opions);
            this.uploadFile();
          }
          if (resp.data.message == "新增成功"){
            alert("新增成功");
            this.$router.push("/index/appr/apprTable")
          }
        })
      },backweb(){
        this.$router.push("/index/appr/apprTable")
      },
      getCategorys(){
        this.$axios.get("http://localhost:8888/product/getCategorys",{

        }).then((resp)=>{
          console.log(resp.data.data);
          this.categorys = resp.data.data;
          console.log(this.categorys);
        })
      },
      getBrands(){
        this.$axios.get("http://localhost:8888/product/getBrands",{
            params:{
              categoryId:this.form.categoryId
            }
        }).then((resp)=>{
          console.log(resp.data.data);
          this.brands = resp.data.data;
          console.log(this.brands);
        })
      },
      getAttrConfs(){
        this.$axios.get("http://localhost:8888/product/getAttrConfs",{
          params:{
            attrGroupid:this.form.attrGroupid
          }
        }).then((resp)=>{
          console.log(resp.data.data);
          this.form.opions = resp.data.data.opions
          this.attrConfs = resp.data.data;
          console.log(this.attrConfs);
        })
      },
      getAttrGroups(){
        this.$axios.get("http://localhost:8888/product/getAttrGroups",{
          params:{
            categoryId:this.form.categoryId
          }
        }).then((resp)=>{
          console.log(resp.data.data);
          this.attrGroups = resp.data.data;
          console.log(this.attrGroups);
        })
      },setAttrConfs(id,opions){
        console.log(opions);
        this.$axios.get("http://localhost:8888/product-attr-conf/setAttrConfs",{
          params:{
            attrConfId:id,
            opions: opions,
            attrGroupId: this.form.attrGroupid.toString()
          }
        }).then((resp)=>{
          console.log(resp.data.data);
        })
      },
      getShops(){
        this.$axios.get("http://localhost:8888/product/getShops",{

        }).then((resp)=>{
          console.log(resp.data.data);
          this.shops = resp.data.data;
          console.log(this.shops);
        })
      },FrontFile: function(event) {
        let frontFile = event.target.files[0];
        this.$data.param.append('file',frontFile);
        let url = "";
        var reader = new FileReader();
        reader.readAsDataURL(frontFile);
        let that = this;
        reader.onload = function(e) {
          url = this.result.substring(this.result.indexOf(",") + 1);
          that.imgFront = "data:image/png;base64," + url;
          // that.$refs['imgimg'].setAttribute('src','data:image/png;base64,'+url);
        };
      },BackFile: function(event) {
        let backFile = event.target.files[0];
        this.$data.param.append('file',backFile);
        let url = "";
        var reader = new FileReader();
        reader.readAsDataURL(backFile);
        let that = this;
        reader.onload = function(e) {
          url = this.result.substring(this.result.indexOf(",") + 1);
          that.imgBack = "data:image/png;base64," + url;
          // that.$refs['imgimg'].setAttribute('src','data:image/png;base64,'+url);
        };
      },SideFile: function(event) {
        let sideFile = event.target.files[0];
        this.$data.param.append('file',sideFile);
        let url = "";
        var reader = new FileReader();
        reader.readAsDataURL(sideFile);
        let that = this;
        reader.onload = function(e) {
          url = this.result.substring(this.result.indexOf(",") + 1);
          that.imgSide = "data:image/png;base64," + url;
          // that.$refs['imgimg'].setAttribute('src','data:image/png;base64,'+url);
        };
      },TopFile: function(event) {
        let topFile = event.target.files[0];
        this.$data.param.append('file',topFile);
        let url = "";
        var reader = new FileReader();
        reader.readAsDataURL(topFile);
        let that = this;
        reader.onload = function(e) {
          url = this.result.substring(this.result.indexOf(",") + 1);
          that.imgTop = "data:image/png;base64," + url;
          // that.$refs['imgimg'].setAttribute('src','data:image/png;base64,'+url);
        };
      },
      FrontImg() {
        this.$refs.input.click();
      },
      BackImg() {
        this.$refs.input1.click();
      },
      SideImg() {
        this.$refs.input2.click();
      },
      TopImg() {
        this.$refs.input3.click();
      }
    },data(){
      return {
        form: {
          categoryId:null,
          brandId:null,
          attrGroupid:null,
          attrConfid:null,
          shopId: null,
          productName: null,
          firstPrice: 0,
          officaialPrice:0,
          valuationPrice: 0,
          pawnPrice:0,
          purchasePrice:0,
          salePrice:0,
          rentPrice:0,
          productDesc:"",
          degree:"",
          identifyNote:"",

        },
        param : new FormData(),
        categorys:{},
        brands:{},
        attrConfs:{},
        attrGroups:{},
        shops:{},
        isSelectFile: false,
        imgTop: "",
        imgSide: "",
        imgBack: "",
        imgFront:""
      }
    },created() {
      this.getCategorys();
      this.getShops()
    },watch:{
        "form.categoryId":{
          handler(){
            this.getBrands();
            this.getAttrGroups();
          },
          deep:true
        },"form.attrGroupid":{
          handler(){
            this.getAttrConfs();
          },
        deep:true
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
