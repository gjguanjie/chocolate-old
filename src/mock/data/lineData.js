const lineData = function () {
  var data = []
  var now = +new Date(1997, 9, 3)
  var oneDay = 24 * 3600 * 1000
  var value = Math.random() * 1000
  for (var i = 0; i < 1000; i++) {
    now = new Date(+now + oneDay)
    value = value + Math.random() * 21 - 10
    const newData = {
      name: now.toString(),
      value: [
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
        Math.round(value)
      ]
    }
    data.push(newData)
  }
  return {
    data: data
  }
}
export default lineData
