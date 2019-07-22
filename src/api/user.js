import request from '../utils/http'

export function toLogin() {
  window.location.href = 'http://101.132.69.69:8088/v1/oauth/authorize'
}

export function getInfo() {
  return request({
    url: '/user/me',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
