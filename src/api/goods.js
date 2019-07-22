import request from '../utils/http'
import qs from "qs";
import store from '../store'

const goods = {
  goodsList(page=1,sizePerPage=5) {
    return request({
      url: '/products/selectProductAll',
      method: 'get',
      params: {
        page: page,
        sizePerPage: sizePerPage
      }
    })
  },
  buyGoods(phone_number,id,price){
    return request({
      url: '/user/pay',
      method: 'post',
      transformRequest: [function(data) {
        return qs.stringify(data)
      }],
      data: {
        phone_number: phone_number,
        product_id: id,
        yb_userid: store.getters.user_id,
        yb_username: store.getters.user_name,
        yb_usernick: store.getters.user_nick,
        yb_sex: store.getters.user_sex,
        yb_money: price
      }
    })
  }
}

export default goods;
