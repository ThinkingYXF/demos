import api from './api'

let http = {
  getNews(params){
    return api.post('/news', params)
  },
  getTableList(params){
    return api.post('/tableList', params)
  },
  getFoods(params){
    return api.get('/getFoods', params)
  },
  getCategory(params){
    return api.post('/getCategory', params)
  },
  getCategoryDetail(params){
    return api.post('/getCategoryDetail', params)
  }
}

export default http