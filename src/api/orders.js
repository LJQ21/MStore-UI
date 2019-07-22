import request from '../utils/http'
import qs from 'qs'
import store from '../store/getters'

const orders = {
  getOrders () {
    return request({
      url: '/orders/selectOrderByUserId',
      method: 'get'
    })
  },
  tradeOrder(id,value) {
    return request({
      url: '/user/trade',
      method: 'get',
      params: {
        order_id: id,
        conversion_code: value
      }
    })
  }
};

export default orders
