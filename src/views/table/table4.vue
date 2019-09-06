<template>
  <div>
    <h3>动态表头</h3>
    <el-table :data="tableData" style="width: 100%" border :header-cell-style="{background:'#394056',align:'center'}">
      <el-table-column type="index" width="80" label="#">
      </el-table-column>
      <el-table-column v-for="(item) in tableHeader" :label='item' :key='item'>
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row[item] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="operation"  align="center">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-search" circle @click="handleView(scope.$index, scope.row)"></el-button>
          <el-button type="primary" icon="el-icon-check" circle @click="handleAdd"></el-button>
          <el-button type="success" icon="el-icon-edit" circle @click="handleEdit(scope.$index, scope.row)"></el-button>
          <el-button type="danger" icon="el-icon-delete" circle @click="handleDelete(scope.$index, tableData)"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="用户信息" :visible.sync="dialogFormVisible">
      <el-form :model="userForm">
        <el-row>
          <el-col :span='12'>
            <el-form-item label="用户名称:" :label-width="formLabelWidth">
              <el-input v-model="userForm.userName" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span='12'>
            <el-form-item label="出生日期:" :label-width="formLabelWidth">
              <el-input v-model="userForm.date" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-form-item label="家庭地址:" :label-width="formLabelWidth">
            <el-input v-model="userForm.address" autocomplete="off"></el-input>
          </el-form-item>
        </el-row>
        <el-row>
          <div>
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
          </div>
          <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
          </el-checkbox-group>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="resetUser" :disabled="isView==false ? true : false">重 置</el-button>
        <el-button type="primary" @click="saveUser" :disabled="isView==false ? true : false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
const cityOptions = ['上海', '北京', '广州', '深圳']
export default {
  data () {
    return {
      tableHeader: ['name', 'date', 'address'],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      dialogFormVisible: false,
      userForm: {
        userName: '',
        date: null,
        address: ''
      },
      formLabelWidth: '80px',
      cities: cityOptions,
      checkAll: false,
      checkedCities: ['上海', '北京'],
      isIndeterminate: true,
      isView: false
    }
  },
  methods: {
    handleEdit (index, row) {
      this.dialogFormVisible = true
      this.userForm = {
        date: row.date,
        userName: row.name,
        address: row.address
      }
    },
    handleDelete (index, row) {
      row.splice(index, 1)
    },
    handleView (index, row) {
      this.dialogFormVisible = true
      this.userForm = {
        date: row.date,
        userName: row.name,
        address: row.address
      }
    },
    handleAdd () {
      this.dialogFormVisible = true
    },
    saveUser () {
      let tmpUser = {
        date: this.userForm.date,
        name: this.userForm.userName,
        address: this.userForm.address
      }
      this.tableData.push(tmpUser)
      this.dialogFormVisible = false
    },
    resetUser () {
      this.userForm = {
        date: null,
        name: '',
        address: ''
      }
    },
    handleCheckAllChange (val) {
      this.checkedCities = val ? cityOptions : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange (value) {
      console.log(value)
      let checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
    }
  }
}
</script>
