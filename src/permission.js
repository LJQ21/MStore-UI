import router from './router'
import store from './store'
import { getToken, getUrl, setToken } from './utils/auth'
import { toLogin } from "./api/user"; // get token from cookie

router.beforeEach(async(to, from, next) => {

  // 确认用户是否已登录
  const hasToken =getToken()
  if (hasToken) {
      const hasGetUserInfo = store.getters.user_id
      if (hasGetUserInfo) {
        next()
      } else {
        try {
          // 获取用户信息
          await store.dispatch('user/getInfo')

          next()
        } catch (error) {

          // 删除令牌并转到登录页面重新登录
          await store.dispatch('user/resetToken')

          toLogin()
        }
      }
  } else {
    /* has no token*/
    const code = getUrl(window.location.href).code
    console.log(code)
    setToken(code)
    if(code){
      try {
        // 获取用户信息
        await store.dispatch('user/getInfo')

        next()
      } catch (error) {
        // 删除令牌并转到登录页面重新登录
        await store.dispatch('user/resetToken')

        toLogin()
      }
      next()
    }else {
      toLogin()
    }
  }
})
