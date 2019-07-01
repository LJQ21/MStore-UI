import axios from './http'
import qs from 'qs'

const goods = {
  goodsList(num=1,size=5) {
    return axios.get('/products',{
      params: {
        num: num,
        size: size
      }
    })
  }
}

export default goods;
