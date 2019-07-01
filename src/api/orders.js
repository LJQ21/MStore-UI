import axios from './http'
import qs from 'qs'

const orders = {
  getOrders (id) {
    return axios.get('/orders/'+id)
  },

  addOrder(id){
    return axios.put("/order",qs.stringify({
      id: id
    }))
  }
}

export default orders
