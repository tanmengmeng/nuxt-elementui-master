/**
 * Created by mengtan2012@163.com on 2018-01-22.
 */

import axios from "axios"
import { Message, Loading } from 'element-ui'

const configPath ="";
const printErrorInfo = info => {
  return Message({
    type: "error",
    message: info || "请求出错,请稍后再试!"
  })
}

// https://github.com/mzabriskie/axios
const http = axios.create({
  timeout: 1000 * 40 ,
  headers: { 'X-Requested-With': 'XMLHttpRequest' },
})
function _h(verb) {
  return function(restPath, params, loading, last) {
    // setting loading
    if (loading !== false) {
      loading = Loading.service({
        target: document.querySelector("#page-router-view"),
        text: "加载中..."
      })
    }

    // error 如果不为空(null) 表示网络出错 data表示服务端返回的数据
    let result = {
      error: null,
      data: {}
    }
    let _restPath = configPath + restPath
    let _params   = params || {}

    return http[verb](_restPath, _params)
    .then(response => {
      // close loading
      loading && loading.close()

      // api拦截 401表示用户sessionid失效 这里不拦截菜单请求
      if (restPath != "account/user/getMenus" && response.data && response.data.msgCode == 401) {
        if (Vue.$router && Vue.$router.push) {
          Vue.$router.push({ name: "login", params: { redirectRouter: window.location.hash.replace("#/", "/") } })
        } else {
          window.location.href = "/#/login"
        }
        return Promise.reject({
          code: 401,
          message: "用户验证失败,请重新登录!"
        })
      }

      // 服务器正常响应 error 为空
      result.error = null
      result.data = response.data
      return Promise.resolve(result)
    })
    .catch(error => {
      // close loading
      loading && loading.close()
      console.log("请求出错: ")
      console.dir(error)
      result.error = error || new Error("请求出错,请检查网络!")
      result.data = {}

      // 网络问题
      if (error && ~error.message.indexOf("Network Error")) { // 没有网络 离线
        // 打印出错信息
        printErrorInfo("请求出错,请检查网络连接!")
        return Promise.resolve(result)
      }

      // 终止请求 请求超时
      if (error && error.code == "ECONNABORTED") {
        if (~error.message.indexOf("timeout")) {
          printErrorInfo("请求超时,请稍后再试!")
          return Promise.resolve(result)
        }
          // 其他原因
          else {
            // 打印出错信息
            printErrorInfo("请求出错,请稍后再试!")
            return Promise.resolve(result)
          }
        }

      // 服务器返回状态码超过2xx
      if (error && error.response) {
        // 打印出错信息
        printErrorInfo(error.response.status + ": " + error.response.statusText || "请求出错,请稍后再试!")
        return Promise.resolve(result)
      }

      // 用户验证失败
      if (error && error.code == 401) {
        // 打印出错信息
        printErrorInfo('401: ' + error.message)
        return Promise.resolve(result)
      }

      // 其他错误
      printErrorInfo("请求出错,请稍后再试!!")
      return Promise.resolve(result)
    })
  }
}

export default {
  get: _h('get'),
  post: _h('post')
}
