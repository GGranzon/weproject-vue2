<template>
  <div style="height: 100%;width: 100%;">
    <el-container>
      <el-header>
        <el-breadcrumb separator=">" style="line-height: 60px;font-size: 16px;color: #2c3e50">
          <el-breadcrumb-item :to="{ path: '/index' }">主页</el-breadcrumb-item>
          <el-breadcrumb-item>仓库配置</el-breadcrumb-item>
          <el-button type="primary" round @click="show">刷新</el-button>
        </el-breadcrumb>
      </el-header>

      <el-main>
        <el-footer>
          <span style="color: gray;float: left;margin-right: 9px">状态 </span>
          <el-select v-model="value" placeholder="请选择" @change="getSelect('')" style="width: 20%;float: left">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <span style="color: gray;margin-left: 20%">条件查询</span>
          <el-input v-model="likePage.shopName" placeholder="仓库名称/联系人名称/联系人手机号" style="width: 40%" ></el-input>
          <el-button type="primary" icon="el-icon-search" @click="likeshow(likePage,page.current,page.size)">搜索</el-button>
        </el-footer>
        <el-footer style="margin-top: 10px">
          <i class="el-icon-menu" style="float: left;line-height: 60px">数据列表</i>
          <el-button-group style="float: right">
            <el-button type="warning" plain icon="el-icon-edit" @click="updatebutton">修改</el-button>
            <el-button type="success" plain icon="el-icon-circle-plus-outline" @click="add">新增</el-button>
            <el-button type="danger" plain icon="el-icon-delete" @click="deleteAll">删除</el-button>
          </el-button-group>
        </el-footer>

      </el-main>
      <div id="two">
        <el-table
          ref="multipleTable"
          :data="this.page.records"
          tooltip-effect="dark"
          @selection-change="handleSelectionChange">
          <!-- 复选框-->
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            prop="id"
            label="仓库编号"
            width="120">
          </el-table-column>
          <el-table-column
            prop="warehouseName"
            label="仓库名称"
            width="190">
          </el-table-column>
          <el-table-column
            prop="contact"
            label="负责人"
            width="190">
          </el-table-column>
          <el-table-column
            prop="contactWay"
            label="联系方式"
            width="200">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            width="270">
          </el-table-column>
          <el-table-column
            prop="forshop"
            label="关联门店"
            width="270">
          </el-table-column>
          <el-table-column
            prop="status"
            label="状态"
            width="100">
          </el-table-column>
        </el-table>
        <!--        删除提示框 用于确认是否删除-->
        <el-dialog title="提示" :visible.sync="delVisible" width="300px" center>
          <div class="del-dialog-cnt">是否确认删除</div>
          <span slot="footer" class="dialog-footer">
            <el-button @click="delVisible = false"  >取消</el-button>
            <el-button type="primary" @click="deleteRow">确定</el-button>
          </span>
        </el-dialog>
        <!--    修改提示框 用于确认是否修改-->
        <el-dialog title="提示" :visible.sync="updatevisible" width="300px" center>
          <div class="del-dialog-cnt">是否确认修改</div>
          <span slot="footer" class="dialog-footer">
            <el-button @click="updatevisible = false"  >取消</el-button>
            <el-button type="primary" @click="updateWarehouse">确定</el-button>
          </span>
        </el-dialog>
      </div>


      <div style="margin-left: 25%" class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="this.page.current"
          :page-sizes="[5, 10, 15, 20]"
          :page-size="this.page.size"
          layout="total, sizes, prev, pager, next, jumper"
          :total="this.page.total">
        </el-pagination>
      </div>

    </el-container>

  </div>

</template>

<script>
export default {
  name: "WearHouse",
  data() {
    return {
      currentPage4: 4,

      input: '',

      options: [{
        value: '选项1',
        label: '全部'
      }, {
        value: '选项2',
        label: '停用'
      }, {
        value: '选项3',
        label: '使用'
      }],
      //分页的数据和后端传过来的数据
      page:{
        current:1,
        total:1,
        size:5,
        pages:0,
        records:[]
      },
    //  模糊查询的page对象存放位置
      likePage:{
        shopName:''
      },
      //用于存放需要修改仓库的id信息
      shopid:'',
      //删除提示框的状态 默认为false
      delVisible: false,
      //修改提示框状态 默认为false
      updatevisible:false,
      //存放删除的数据
      deleteArr:[],
      //多选的数据
      multipleSelection:[],
    }
  },
  methods: {
    //下拉框值的获取方法
    getSelect(value){
      var _this = this;
      // alert("进入了下拉框取值的方法");
      value = this.value;
      var val;
      // alert("下拉框值："+value);
      //  判断value的值 给val赋值
      if (value=='选项1'){
        //  展示全部
        this.show();
      }else if (value=='选项2'){
        val = '停用';
        this.likePage.shopName=val
        // alert(val)
        this.$axios.get("http://localhost:8888/warehouse/likewarehouse",{
          params:{
            shopName: val,
            // contact: this.likePage.contact,
            // tel: this.likePage.tel,
            // status: this.likePage.status,
            current:this.page.current,
            size:this.page.size
          }
        }).then(function (res){
          console.log(res);
          _this.page=res.data.data
        })
      }else if (value=='选项3'){
        val = '启用';
        this.likePage.shopName=val
        this.$axios.get("http://localhost:8888/warehouse/likewarehouse",{
          params:{
            shopName: val,
            // contact: this.likePage.contact,
            // tel: this.likePage.tel,
            // status: this.likePage.status,
            current:this.page.current,
            size:this.page.size
          }
        }).then(function (res){
          console.log(res);
          _this.page=res.data.data
        })
      }
    },
    //点击修改，跳转修改界面
    update(){
      this.$router.push("/index/updateWareHouse")
    },
    //点击修改按钮 修改提示框展示 但是要判断是否是多选 多选无法修改 单选可修改
    updatebutton(){
      var _this = this;
      //  判断勾选的值
      const len = this.multipleSelection.length;
      // alert(len)
      if (len == 1){
        //  当勾选的长度等于1 说明只有单条的数据 这个时候就可以显示修改提示框
        this.updatevisible=true;
      }else {
        //  如果勾选的长度大于1 则表示多选 无法进行修改操作
        this.$message.error("update failed,it's too long")
      }
    },
    //点击新增，跳转新增界面
    add(){
      this.$router.push("/index/addWareHouse")
    },
    //点击修改提示框的确定按钮，跳转修改界面 并且将勾选中的值传入
    updateWarehouse(){
      var _this = this;
      //需要将勾选中的数据一并传给修改页面 将数据存到session中
      sessionStorage.setItem("updateitem",this.shopid);
      console.log("存session的时候拿到的勾选框数据："+this.shopid)
      this.$router.push("/index/updateWarehouse")
    },
    //每页数量条数的改变
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.likeshow(this.likePage,this.page.current,val)
      // this.show(this.page.current,val)
    },
    //当前页码的改变
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.likeshow(this.likePage,val,this.page.size)
      // this.show(val,this.page.size)
    },
  //  分页查询所有的仓库信息
  //   show(current,size){
  //     var _this = this;
  //     this.$axios.get("http://localhost:8888/warehouse/allwarehouse",{
  //       params:{
  //         current:current,
  //         size:size
  //       }
  //     }).then(function (res){
  //       // console.log(res)
  //       _this.page = res.data.data
  //     })
  //   },
  //  模糊查询的方法
  //   likepage(likePage,current,size){
  //     alert(likePage.shopName);
  //     alert(current);
  //     alert(size);
  //     var _this = this;
  //     this.$axios.get("http://localhost:8888/warehouse/likewarehouse",{
  //       params:{
  //         shopName: likePage.shopName,
  //         current: current,
  //         size: size
  //       }
  //     }).then(function (resp){
  //       _this.page=resp.data.data
  //     })
  //   },
    //复选框勾选方法
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      console.log(val);
      this.multipleSelection = val;
    },
    //批量删除方法
    deleteAll(){
      //选择了批量删除 就显示提示框
      this.delVisible = true;
      const length = this.multipleSelection.length;
      // alert(length)
      for (let i = 0;i < length; i++){
        var bb = this.deleteArr.push(this.multipleSelection[i].address)
      alert(bb)
      }
    },
    //获取数据
    getPageRecords(){
      this.$axios.post('http://localhost:8888/warehouse/deletewarehouse').then((res)=>{
        this.page= res.data.data
      }).catch(function (error){
        console.log(error)
      })
    },
    //确定删除
    deleteRow(){
      // alert(1111111111111111)
      this.$axios.post("http://localhost:8888/warehouse/deletewarehouse",this.multipleSelection
      ).then(res=>{

        if (res.data.statusCode==2000){
          this.getPageRecords();
          this.$message.success('delete success')
        }
      }).catch(error=>{
        console.log(error);
        this.$message.error('delete failed')
      })
      //关闭删除提示框
      this.delVisible = false;
    },
    // 刷新数据
    show(){
      var _this = this;
      this.page.current=1,
        this.likeshow('',this.page.current,this.page.size);
      this.likePage.shopName='';
    },
    //  模糊查询的方法 可以直接将展示全部的方法添加到模糊分页查询里面
    likeshow(likePage,current,size) {
      // alert(22222222222);
      var _this = this;
      console.log(this.likePage.shopName);
      console.log("current的值" + current);
      console.log("size的值" + size);
      //判断likePage里面是否为空 如果为空 则直接查询全部数据
      if (likePage!= '') {
        this.$axios.get("http://localhost:8888/warehouse/likewarehouse", {
          params: {
            shopName: likePage.shopName,
            // contact: this.likePage.contact,
            // tel: this.likePage.tel,
            // status: this.likePage.status,
            current: current,
            size: size
          }
        }).then(function (res) {
          console.log(res);
          _this.page = res.data.data
        })
      } else {
        this.$axios.get("http://localhost:8888/warehouse/allwarehouse", {
          params: {
            current: current,
            size: size
          }
        }).then(function (res) {
          // console.log(res)
          _this.page = res.data.data
        })
      }
    }
  },
//  钩子函数 一进仓库配置的页面就直接展示所有的仓库信息
  created() {
    this.likeshow(this.likePage,this.page.current,this.page.size);
  },
}
</script>

<style scoped>

#two{
  width: 90%;
  margin-left: 5%;
  /*height: 440px;*/
  height: 100%;
}
.el-header {
  background-color: whitesmoke;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-footer {
  background-color: whitesmoke;
  color: #333;
  line-height: 60px;
}
.el-button{
  float: right;
  height: 40px;
  /*padding-top: 10px;*/
  margin-top: 10px;
}
.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
  height: 180px;
}
</style>
