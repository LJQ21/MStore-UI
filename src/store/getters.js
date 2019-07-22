const getters = {
  token: state => state.user.token,
  user_id: state => state.user.yb_userid,
  user_name: state => state.user.yb_username,
  user_nick: state =>state.user.yb_usernick,
  user_sex: state => state.user.yb_sex,
  user_money: state => state.user.yb_money
}
export default getters
