const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
const produceData = function (opt) {
  console.log('opt', opt);
  let articles = [];
  for (let i = 0; i < 10; i++) {
    let newArticleObject = {
      id: Random.increment(),
      title: Random.csentence(5, 10), // Random.csentence( min, max )
      thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    }
    articles.push(newArticleObject)
  }
  return {
    data: articles
  }
}

//获取随机日期
const getRandomDate = function(){
  return Random.date();
}


Mock.mock('/news', /post|get/i, produceData);//当post或get请求到/news路由时Mock会拦截请求并返回上面的数据

Mock.mock('/tableList', /post/, ()=>{
  let list = [];
  for (let i = 0; i < 3; i++) {
    let listObject = {
      id: Random.increment(),
      name: Random.cname(),
      date: Random.date() 
    }
    list.push(listObject)
  }
  console.log(list);
  return {
    data: list
  }
});

Mock.mock('/getFoods', /get/, ()=>{
  let foods = [];
  for(let i = 0; i < 4; i++){
    let name = Random.csentence(2, 4);
    foods.push({
      id: Random.increment(),
      value: name,
      label: name
    });
  }
  console.log(foods);
  return {
    data: foods
  }
})