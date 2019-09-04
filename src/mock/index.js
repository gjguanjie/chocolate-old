import tableData from './data/tableData'
import lineData from './data/lineData'
import menuData from './data/menuData'
const Mock = require('mockjs')
Mock.mock('/query/queryTableDates', 'post', () => {
  const result = {
    'code': '200',
    'message': '成功',
    'data': tableData(),
    'total': 100
  }
  return result
})

Mock.mock('/query/lineData', 'post', () => {
  const result = {
    'code': '200',
    'message': '成功',
    'data': lineData(),
    'total': 100
  }
  return result
})
Mock.mock('/query/findMenu', 'post', () => {
  const result = {
    'code': '200',
    'message': '成功',
    'list': menuData(),
    'total': 100
  }
  return result
})

Mock.setup({
  timeout: '0 - 300'
})
