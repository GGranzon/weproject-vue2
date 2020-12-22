<template>
  <div style="width: 100%;">
    <el-table
      :data="this.page.records"
      border
      style="width: 100%">
      <el-table-column
        fixed
        prop="id"
        label="用户id"
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="用户名称"
        width="120">
      </el-table-column>
      <el-table-column
        prop="countryCode"
        label="角色名称"
        width="120">
      </el-table-column>
      <el-table-column
        prop="district"
        label="角色权限"
        width="120">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="this.page.current"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="this.page.size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="this.page.pages">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      page:{
        current:1,
        size:10,
        total:0,
        pages:0,
        records:[]
      }
    }
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.find2page(this.page.current,val)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.find2page(val,this.page.size)
    },
    find2page(current,size){
      this.$axios.get("",{
        params:{
          current:current,
          size:size
        }
      }).then((resp)=>{
        this.page = resp.data.data
      })
    },
  },
  created() {
    this.find2page(this.page.current,this.page.size)
  }
}
</script>

<style scoped>

</style>
