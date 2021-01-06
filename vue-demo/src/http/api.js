import axios from 'axios'
import { MessageBox } from 'mint-ui';

let api = axios.create({
  //公共url(前置url)
  // baseURL: 'http://192.168.0.103:8088/',
  baseURL: '',
  headers: {

  }
})
//请求拦截
api.interceptors.request.use(function(request){
  // 发送前
  //TODO:
  return request
}, function(error){
  // 请求错误处理
  return Promise.reject(error)
})

//响应拦截
api.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  if(response.status == 200){
    //TODO:
  }else{
    MessageBox.alert('系统错误，请联系管理员')
  }
  return response
}, function (error) {
  // 对响应错误做点什么
  MessageBox.alert('系统错误，请联系管理员')
  return Promise.reject(error)
})


export default api