/**
 * Created by mengtan2012@163.com on 2018-01-22.
 */
import * as test from "../api/test"

const api = {
  test
}

// define install for vue.use()
Object.defineProperty(api, "install", {
  configurable: false,
  enumberable: false,
  writable: false,
  value: function (Vue, options) {
    Vue.$api = api
    Vue.prototype.$api = api
  }
})

export default api
