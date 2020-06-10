import axios from 'axios'
import { MessageBox, Message } from 'element-ui'

// 创建一个axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  withCredentials: false, // 表示跨域请求时是否需要使用凭证，默认为false
  timeout: 10000 // 如果请求超过 `timeout` 的时间，请求将被中断
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    // 请求错误做些什么
    console.log(error) // 为调试
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  /**
   * 如果你想获得http标头或状态等信息
   * Please return  response => response
  */

  /**
   * 确定自定义代码的请求状态
   * 这只是一个例子
   * 你也可以判断状态通过HTTP状态代码
   */
  response => {
    const res = response.data

    // 如果自定义代码不是0,它是判断一个错误。
    if (res.code !== '0') {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // 为调试
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
