<template>
  <div>
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column prop="date" label="日期">
      </el-table-column>
      <el-table-column prop="name" label="姓名">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
    </el-table>
    <div style="text-align: right;margin-top: 10px;">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="10"
        layout="total, sizes, prev, pager, next"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [],
      currentRow: null,
      offset: 0,
      limit: 20,
      total: 0,
      currentPage: 1,
      pageSize: 10
    }
  },
  mounted () {
    this.getTableData()
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      this.currentPage = val
      this.offset = (val - 1) * this.limit
      this.getTableData()
    },
    async getTableData () {
      let config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
      const query = { offset: this.offset, limit: this.limit }
      const tables = await this.$http.post('/query/queryTableDates', query, config).then(function (res) {
        if (res.data.code === '200') {
          return res.data
        }
      })
      this.tableData = tables.data.data
      this.total = tables.total
    }
  }
}
</script>
