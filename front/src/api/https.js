import axios from 'axios'

import { Message } from 'element-ui'

// 创建axios实例
let service
if (process.env.NODE_ENV === 'development') {
  service = axios.create({
    baseURL: '/api',
    timeout: 20000
  })
} else {
  service = axios.create({
    baseURL: '/api',
    timeout: 20000
  })
}

// request 请求拦截器
service.interceptors.request.use((config) => {
  return config
}, (error) => {
  console.log('error', error)
  return Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(
  (res) => {
    if (res.status === 200) {
      const data = res.data
      if (data.code === 0) {
        return data.data
      } else {
        Message({
          message: data.message,
          type: 'error'
        })
      }
    } else {
      Message({
        message: '网络错误',
        type: 'error'
      })
      return Promise.reject(new Error(res.data.message || 'Error'))
    }
  }, (error) => {
    return Promise.reject(error)
  }
)

export default service
