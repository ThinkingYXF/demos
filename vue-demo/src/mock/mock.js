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
  return {
    data: foods
  }
});

//分类左侧
Mock.mock('/getCategory', /post/, ()=>{
  let list = getList(3, {
    imgUrl: 'dataImage',
    name: 'ctitle'
  });
  return {
    data: list
  }
});
//分类右侧
Mock.mock('/getCategoryDetail', /post/, ()=>{
  let itemList = getList(null, {
    imgUrl: 'dataImage',
    name: 'ctitle',
  });
  let list = getList(null, {
    itemList: itemList,
    title: 'ctitle',
  });
  let detail = {
    id: Random.increment(),
    imgUrl: Random.dataImage('300x150'),
    rightList: list,
  }
  return {
    data: detail
  }
});

function getList(length, attrs){
  if(length == null){
    length = Math.ceil(Math.random()*4);
  }
  let list = [];
  for(let k = 0; k < length; k++){
    let listObject = {
      id: Random.increment()
    }
    for(let attr in attrs){
      if(Random[attrs[attr]]){
        if(attr.indexOf('imgUrl') != -1){
          listObject[attr] = Random[attrs[attr]]('300x150');
        }else{
          listObject[attr] = Random[attrs[attr]](4);
        }
      }else{
        listObject[attr] = attrs[attr];
      }
      
    }
    list.push(listObject)
  }
  return list;
}