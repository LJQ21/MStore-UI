/**
 *axios封装
 *请求拦截、响应拦截、错误统一处理
 */

import axios from 'axios'
import {Toast} from 'mint-ui'
import router from '../router/index'

/**
 * 提示函数
 */
const tip = msg => {
  Toast({
    message: msg,
  })
}

/**
 * 跳转登录
 */
const toLogin = () => {
  router.replace({
    path: '/person',
  })
}

/**
 * 请求失败的错误统一处理
 * @param {Number} status 请求失败的状态码
 * @param {String} message 错误提示
 */
const handlerResult = (status,message) => {
  switch(status){
    case -1:
      toLogin();
      break;
    case 1:
      tip("code："+status+"，msg："+message);
      break;
  }
}

//创建axios实例
const service = axios.create({
  timeout: 1000*5,
  baseURL: 'http://127.0.0.1:8080'
});
//设置post请求头
service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

/**
 * 请求拦截
 * 每次请求钱，如果存在token则在请求头中 携带token
 */
service.interceptors.request.use(
  config => {
    /*if(store.status.token){
      config.headers['X-Tolen'] = getToken()
    }*/
    const token = "ljq";
    token && (config.headers.Authorization = token);
    return config;
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    /**
     * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
     * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
     */
    //  const res = response.data;
    //     if (res.code !== 20000) {
    //       Message({
    //         message: res.message,
    //         type: 'error',
    //         duration: 5 * 1000
    //       });
    //       // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
    //       if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
    //         MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
    //           confirmButtonText: '重新登录',
    //           cancelButtonText: '取消',
    //           type: 'warning'
    //         }).then(() => {
    //           store.dispatch('FedLogOut').then(() => {
    //             location.reload();// 为了重新实例化vue-router对象 避免bug
    //           });
    //         })
    //       }
    //       return Promise.reject('error');
    //     } else {
    //       return response.data;
    //     }
    const result = response.data;
    handlerResult(result.code,result.msg);
    return response;
    //response.status ===200 ? Promise.resolve(response) : Promise.reject(response)
  },
  error => {
      //errorHandle(error.status,"error.data.message");
      console.log('err:' + error) // for debug
      tip(error)
      return Promise.reject(error);
  }
);

export default service;
