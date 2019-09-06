const menuData = function () {
  let menuGroup = []
  let data1 = {
    path: 'table3',
    name: '对话列表',
    url: 'table/table3'
  }
  let data2 = {
    path: 'table4',
    name: '动态表头',
    url: 'table/table4'
  }
  menuGroup.push(data1)
  menuGroup.push(data2)
  return menuGroup
}
export default menuData
