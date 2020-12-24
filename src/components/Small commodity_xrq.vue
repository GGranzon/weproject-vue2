<template >
  <div style="width: 100%;height: 100% ; margin: 0 auto">
    <div>
      <el-container>
        <!--头部信息展示-->
        <el-header>
          <span>主页</span>
          <span>></span>
          <span>商品小类</span>
        </el-header>

        <div style="background-color:#E9EEF3;height: 50px;padding-top: 5px">
            <span style="line-height: 40px;float:left ; padding-left: 20px">筛选查询</span>

            <el-input placeholder="请输入内容" style="width: 30%" v-model="finds" >
              <el-button slot="append" icon="el-icon-search" @click="find1"></el-button>
            </el-input>
            <el-button type="primary" @click="isShows">新增</el-button>
            <el-button type="warning" @click="update">修改</el-button>
            <el-button type="danger" @click="deleteType">删除</el-button>
        </div>


      </el-container>
    </div>

    <div style="text-align: center">
      <el-table
        ref="multipleTable"
        :data="page.records"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="id"
          label="编号"
          width="100">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column
          prop="categoryName"
          label="分类名称"
          width="150">
        </el-table-column>
        <el-table-column
          prop="categoryParent"
          label="所属大类"
          width="150"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="categoryLevel"
          label="级别"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="numUnit"
          label="单位"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="sort"
          label="排序"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="isShow"
          label="显示"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="opertion"
          label="操作"
          width="240"
          show-overflow-tooltip>
        </el-table-column>

      </el-table>
    </div>
    <div style="background-color: #E9EEF3">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page.current"
        :page-sizes="[1, 2, 3, 5]"
        :page-size="page.size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="page.total">
      </el-pagination>
    </div>

    <!--修改的弹出框-->
    <div id="add" v-show=this.isNo>
      <div style="height: 10%;background-color:black;text-align: center; line-height: 60px;border-top-left-radius: 10px;border-top-right-radius: 10px">
        <span style="color: #333333;font-size: 18px;color: #F5F5F5; ">商品大类修改</span>
      </div>
      <div style="margin-top: 5px">
        <span style="margin-left: 30px">分类名称：</span><el-input  style="width: 300px; margin-top: 30px;margin-left: 20px" v-model="addData.categoryName"></el-input>
        <br />
        <span style="margin-left: 30px">上级分类：</span><el-input  style="width: 300px; margin-top: 30px;margin-left: 20px" v-model="addData.categoryParent"></el-input>
        <br />
        <span style="margin-left: 30px">数量单位：</span><el-input  style="width: 300px; margin-top: 30px;margin-left: 20px" v-model="addData.numUnit"></el-input>
        <br />
        <span style="margin-left: 30px">鉴品图定义：</span><el-input  style="width: 300px; margin-top: 30px;margin-left: 5px" v-model="addData.defin"></el-input>
        <br />
        <span style="margin-left: 30px">分类描述：</span><el-input  style="width: 300px; margin-top: 30px;margin-left: 20px" v-model="addData.description"></el-input>
        <br />
        <span style="margin-left: 30px">是否显示：</span><el-input  style="width: 300px; margin-top: 30px;margin-left: 20px" v-model="addData.isShow"></el-input>
      </div>

      <div style="margin-top: 20px ;">
        <el-button type="info" style="float: right;margin-right: 50px" @click="isShows">返回</el-button>
        <el-button type="warning" style="float: right;margin-right: 10px" @click="insert">新增</el-button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      /*分页查询*/
      page:{
        current:1,
        total:0,
        size:5,
        pages:0,
        records:[]
      },
      multipleSelection: [],

      /*控制新增框是否显示*/
      isNo: false,
      /*新增框内框数据内容*/
      addData: {
        categoryName: '',
        categoryParent: '',
        numUnit:'',
        defin:'',
        description:'',
        isShow:'',
      },
      /*修改时自动得到选定的那一行的id*/
      dataid:'',
      /*模糊查询输入框的内容*/
      finds:"",
      /*模糊查询网后端传的内容*/
      like:this.finds,

    }
  },

  methods: {
    //点击修改，跳转修改页面
    update(){
      this.$router.push("/index/smallCommodity3")
    },
    //点击新增，跳转新增界面
    // add(){
    //   this.$router.push("/index/smallCommodity2")
    // },

    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },

    handleSizeChange(val) {
      this.find2Page(this.page.current,val)
    },
    handleCurrentChange(val) {
      this.find2Page(val,this.page.size)
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      sessionStorage.setItem("dataId",this.multipleSelection[0].id)
    },

    //分页查询方法
    find2Page(current,size){
      var _this=this
      console.log(_this.finds)
      this.$http.get("http://localhost:8888/product-category/smallPage",{
        params:{
          current:current,
          size:size,
          like:_this.finds
        }
      }).then(function (resp){
        console.log(resp.data.data)
        _this.page=resp.data.data
      })
    },
    /*删除商品小类*/
    deleteType(){
      this.$axios.post("http://localhost:8888/product-category/byebye",this.multipleSelection).then(function (resp){
        alert(resp.data.message)
      })
      this.$router.go(0)
    },

    /*控制修改框是否显示*/
    isShows(){
      this.isNo = !this.isNo;
      console.log(this.isNo)
    },

    /*新增商品小类*/
    insert(){
      var _this=this
      console.log(this.addData)
      this.$axios.post("http://localhost:8888/product-category/add",this.addData).then(function (resp){
        alert(resp.data.message)
        // _this.$router.push("/index/commodity")
      })
    },

    /*向后台模糊查询*/
    find1(){
      var _this=this
      console.log(this.finds)
      this.$axios.get("http://localhost:8888/product-category/like2",{
        params:{
          like:this.finds
        }
      }).then(function (resp){
        console.log(resp)
        _this.page.records=resp.data.data
      })
    },

  },
  created() {
    this.find2Page(this.page.current,this.page.size)
  }
}
</script>

<style scoped>

.el-header, .el-footer {
  background-color: black;
  color: white;
  text-align:left;
  line-height: 60px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
}

#add{
  width: 450px;
  height: 550px;
  border: 1px darkgray solid;
  position:fixed;
  top:10%;
  left: 35%;
  background-color: beige;
  border-radius: 10px;
}

</style>

<!--根据商品大类查询-->
<!--<el-select placeholder="请选择分类" style="width: 120px;margin-left: 30%" value="">-->
<!--<el-option label="箱包" value=""></el-option>-->
<!--<el-option label="珠宝" value=""></el-option>-->
<!--</el-select>-->
