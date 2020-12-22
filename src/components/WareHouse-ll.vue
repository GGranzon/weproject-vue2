<template>
  <div style="height: 100%;width: 100%;">
    <el-container>
      <el-header>
        <el-breadcrumb separator=">" style="line-height: 60px;font-size: 16px;color: #2c3e50">
          <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
          <el-breadcrumb-item>仓库配置</el-breadcrumb-item>
          <el-button type="primary" round>刷新</el-button>
        </el-breadcrumb>
      </el-header>

      <el-main>
        <el-footer>
          <span style="color: gray;float: left;margin-right: 9px">状态 </span>
          <el-select v-model="value" placeholder="请选择" style="width: 20%;float: left">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <span style="color: gray;margin-left: 20%">条件查询</span>
          <el-input v-model="input" placeholder="仓库名称/联系人名称/联系人手机号" style="width: 40%"></el-input>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </el-footer>
        <el-footer style="margin-top: 10px">
          <i class="el-icon-menu" style="float: left;line-height: 60px">数据列表</i>
          <el-button-group style="float: right">
            <el-button type="warning" plain icon="el-icon-edit" @click="update">修改</el-button>
            <el-button type="success" plain icon="el-icon-circle-plus-outline" @click="add">新增</el-button>
            <el-button type="danger" plain icon="el-icon-delete">删除</el-button>
          </el-button-group>
        </el-footer>

      </el-main>
      <div id="two">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark">
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
            prop="warehousename"
            label="仓库名称"
            width="190">
          </el-table-column>
          <el-table-column
            prop="contact"
            label="负责人"
            width="190">
          </el-table-column>
          <el-table-column
            prop="contactway"
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
      </div>


      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
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
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
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

      tableData: [{
        id: 1,
        warehousename: '王小虎',
        contact: '小李',
        contactway: 1234567,
        address: '重庆渝北红旗河沟',
        forshop: '红旗河沟2仓',
        status: '使用'
      }, {
        id: 1,
        warehousename: '王小虎',
        contact: '小李',
        contactway: 1234567,
        address: '重庆渝北红旗河沟',
        forshop: '红旗河沟2仓',
        status: '使用'
      }, {
        id: 1,
        warehousename: '王小虎',
        contact: '小李',
        contactway: 1234567,
        address: '重庆渝北红旗河沟',
        forshop: '红旗河沟2仓',
        status: '使用'
      },{
        id: 1,
        warehousename: '王小虎',
        contact: '小李',
        contactway: 1234567,
        address: '重庆渝北红旗河沟',
        forshop: '红旗河沟2仓',
        status: '使用'
      }]
    }
  },
  methods: {
    //点击修改，跳转修改界面
    update(){
      this.$router.push("/index/updateWareHouse")
    },
    add(){
      this.$router.push("/index/addWareHouse")
    },
    //点击新增，跳转新增界面
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
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
