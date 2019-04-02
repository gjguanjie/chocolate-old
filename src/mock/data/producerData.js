const Mock = require('mockjs')
const Random = Mock.Random
const produceData = function () {
  let articles = []
  for (let i = 0; i < 100; i++) {
    let newArticle = {
      title: Random.csentence(5, 30),
      author_name: Random.cname(),
      date: Random.date
    }
    articles.push(newArticle)
  }
  return {
    articles: articles
  }
}

Mock.mock('/query/producerData', 'post', produceData)
