import { logout, getInfo } from '../../api/user'
import { getToken, removeToken } from '../../utils/auth'


const state = {
  token: getToken(),
  yb_userid: '',  //用户ID
  yb_username: '',  //用户名
  yb_usernick: '',  //用户昵称
  yb_sex: '',  //用户性别
  yb_money: '',  //用户网薪
  yb_exp: '', //经验
  yb_userhead: '', //头像
  yb_schoolname: ''  //学校名
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USER_HEAD: (state, yb_userhead) => {
    state.yb_userhead = yb_userhead
  },
  SET_USER_ID: (state,user_id) => {
    state.yb_userid = user_id
  },
  SET_USER_NAME: (state,user_name) => {
    state.yb_username = user_name
  },
  SET_USER_NICK: (state, user_nice) => {
    state.yb_usernick = user_nice
  },
  SET_USER_SEX: (state, user_sex) => {
    state.yb_sex = user_sex
  },
  SET_USER_MONEY: (state, user_money) => {
    state.yb_money = user_money
  },
  SET_USER_EXP: (state, user_exp) => {
    state.yb_exp = user_exp
  },
  SET_USER_SCHOOL: (state, user_school) => {
    state.yb_schoolname = user_school
}
}

const actions = {

  // get user info
  getInfo({commit, state}) {
    getInfo().then(response => {
      const {data} = response

      const {yb_userhead, yb_userid, yb_username, yb_usernick, yb_sex, yb_money, yb_exp, yb_schoolname} = data.ybUser

      commit('SET_USER_HEAD', yb_userhead)
      commit('SET_USER_ID', yb_userid)
      commit('SET_TOKEN',yb_userid)
      commit('SET_USER_NAME', yb_username)
      commit('SET_USER_NICK', yb_usernick)
      commit('SET_USER_SEX', yb_sex)
      commit('SET_USER_MONEY', yb_money)
      commit('SET_USER_EXP', yb_exp)
      commit('SET_USER_SCHOOL', yb_schoolname)
    }).catch(error => {
      alert(error)
    })
  },

  // user logout
  logout({commit, state}) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        commit('SET_TOKEN', '')
        removeToken()
        //resetRouter()
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({commit}) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      removeToken()
      resolve()
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

