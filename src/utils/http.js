/**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 */

import axios from 'axios'
import {Toast, MessageBox} from 'mint-ui'
import store from '../store'
import {getToken} from "./auth";

//创建axios实例
const service = axios.create({
  timeout: 1000*5,
  baseURL: 'http://101.132.69.69:8088/v1'
});
//设置post请求头
service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

/**
 * 请求拦截
 * 每次请求前，如果存在token则在请求头中 携带token
 */
service.interceptors.request.use(
  config => {
    if(getToken()){
      console.log(store.getters.token)
      config.headers['X-Token'] = getToken()
    }
    return config;
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data

    // if the custom code is not 0, it is judged as an error.
    if (res.code !== 0) {
      Toast({
        message: res.msg || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === -1) {
        // to re-login
        MessageBox.confirm('您已经注销，您可以取消以停留在此页面，或再次登录', '确认注销', {
          confirmButtonText: 'Re-Login',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.msg || 'Error'))
    } else {
      // return res
      return Promise.resolve(response)
    }
  },
  error => {
    console.log('err' + error) // for debug
    Toast({
      message: error.msg || 'error',
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service;
