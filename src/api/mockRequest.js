import axios from 'axios'
import nprogress from 'nprogress'
import "nprogress/nprogress.css"
// 利用axios对象的方法create，去创建一个axios实例
const service = axios.create({
  baseURL: "/mock/",
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use((config) => {
  // config:配置对象，对象里面有一个属性很重要，header请求头
  nprogress.start()
  return config
})

// 响应拦截器
service.interceptors.response.use((res) => {
  nprogress.done()
  return res.data
}, () => {
  return Promise.reject(new Error('faile'))
})

export default service