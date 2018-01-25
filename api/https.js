/*
* @Date  : 2018-01-22
* @Author: mengtan2012@163.com
*/

// https://github.com/mzabriskie/axios
import axios from 'axios'

export default {
  install (Vue) {
    Vue.prototype.$http = axios
    Vue.$http = axios
  },
  http: axios
}

export const http = axios

