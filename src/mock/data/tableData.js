const Mock = require('mockjs')
const Random = Mock.Random
const tableData = function () {
  let tables = []
  for (let i = 0; i < 10; i++) {
    let table = {
      address: Random.csentence(5, 30),
      name: Random.cname(),
      date: Random.datetime()
    }
    tables.push(table)
  }
  return {
    data: tables
  }
}
export default tableData
