<template >
  <div style="width: 100%;height: 100% ; margin: 0 auto">
    <div>
      <el-container>
        <!--头部信息展示-->
        <el-header>
          <span>主页</span>
          <span>></span>
          <span>品牌管理</span>
          <el-button type="info" style="float: right;margin-top: 10px">刷新</el-button>
        </el-header>

        <div style="background-color:#E9EEF3;height: 50px;padding-top: 5px">
          <span style="line-height: 40px;float:left ; padding-left: 20px">筛选查询</span>
          模糊条件：<el-input placeholder="请输入品牌名称或品牌首字母缩写" style="width: 30%;margin-left: 36%" v-model=finds>
            <el-button slot="append" icon="el-icon-search" @click="find2Page(page.current,page.size)"></el-button>
          </el-input>
          <el-button type="primary" @click="add">新增</el-button>
          <el-button type="warning" @click="isShows">修改</el-button>
          <el-button type="danger" @click="deleteType" >删除</el-button>
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
          width="150">
        </el-table-column>
        <el-table-column
          prop="brandName"
          label="品牌名称"
          width="400">
        </el-table-column>
        <el-table-column
          prop="brandInitial"
          label="品牌首字母"

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

      </el-table>
    </div>
    <div class="block" style="float: right;">
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
    <div id="update" v-show=this.isNo>
      <div style="height: 15%;background-color:beige;text-align: center; line-height: 60px;border-top-left-radius: 10px;border-top-right-radius: 10px">
        <span style="color: #333333;font-size: 18px; ">商品大类修改</span>
      </div>
      <div style="margin-top: 5px">
        <span style="margin-left: 30px">品牌名称：</span><el-input  style="width: 300px; margin-top: 30px;margin-left: 20px" v-model="updateType.brandName"></el-input>
        <br />
        <span style="margin-left: 30px">品牌首字母：</span><el-input  style="width: 300px; margin-top: 30px;margin-left: 5px" v-model="updateType.brandInitial"></el-input>
        <br />
        <span style="margin-left: 30px">排序：</span><el-input  style="width: 300px; margin-top: 30px;margin-left: 52px" v-model="updateType.sort"></el-input>
        <br />
        <span style="margin-left: 30px">是否显示：</span><el-input  style="width: 300px; margin-top: 30px;margin-left: 20px" v-model="updateType.isShow"></el-input>
      </div>

      <div style="margin-top: 20px">
        <el-button type="info" style="float: right;margin-right: 50px" @click="isShows">返回</el-button>
        <el-button type="success" style="float: right;margin-right: 10px" @click="update">修改</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      multipleSelection: [],
      page:{
        current:1,
        total:0,
        size:5,
        pages:0,
        records:[],
      },
      finds:"",
      isNo: false,
      updateType: {
        id:'',
        brandName:'',
        brandInitial:'',
        isShow:'',
        sort:'',
      },
    }
  },

  methods: {
    //点击新增，跳转品牌新增界面
    add(){
      this.$router.push("/index/brandManage2")
    },

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
      sessionStorage.setItem("id",this.multipleSelection[0].id)
      console.log(this.multipleSelection)
      if(this.multipleSelection.length>1){
        alert("一次只能够修改一条数据哦")
      }
    },

    /*分页查询的方法*/
    find2Page(current,size){
      var _this=this
      console.log(_this.finds+11111)
      this.$http.get("http://localhost:8888/brandinfo/page",{
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

    /*控制修改框是否显示*/
    isShows(){
      this.isNo = !this.isNo;
      console.log(this.isNo)
    },

    /*执行修改的方法*/
    update(){
      var _this=this
      this.updateType.id=_this.multipleSelection[0].id

      this.$axios.post("http://localhost:8888/brandinfo/update",this.updateType).then(function (resp){
        console.log(resp.data.message)

      })
      this.$router.go(0)
    },

    /*删除商品大类*/
    deleteType(){
      this.$axios.post("http://localhost:8888/brandinfo/byebye",this.multipleSelection).then(function (resp){
        alert(resp.data.message)
      })
      this.$router.go(0)
    },
  },

  created() {
    this.find2Page(this.page.current,this.page.size)
  }
}
</script>

<style scoped>

.el-header{
  background-color: white;
  color: #333333;
  text-align:left;
  line-height: 60px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
}
#update{
  width: 450px;
  height: 420px;
  border: 1px darkgray solid;
  position:fixed;
  top:30%;
  left: 35%;
  background-color: beige;
  border-radius: 10px;
}
</style>
