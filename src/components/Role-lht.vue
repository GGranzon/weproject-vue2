<template>
  <div>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="username"
        label="用户名"
        width="200">
      </el-table-column>
      <el-table-column
        prop="roleName"
        label="角色名"
        width="200">
      </el-table-column>

      <el-table-column
        fixed="right"
        label="操作"
        width="200">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="updateRole">修改角色</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Role-lht",
  methods: {
    updateRole(){

    }
  },

  data() {
    return {
      theRole:{
        username:"",
        roleName:"",
      }
    }
  }
}
</script>

<style scoped>
</style>
