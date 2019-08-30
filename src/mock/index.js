import tableData from './data/tableData'

const Mock = require('mockjs')
Mock.mock('/query/queryTableDates', 'post', () => {
  const result = {
    'code': '200',
    'message': '成功',
    'data': tableData(),
    'total': 100
  }
  console.log('mock table data')
  return result
})

Mock.setup({
  timeout: '0 - 300'
})
