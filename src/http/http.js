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
  }
}

export default http