import Vue from 'vue'

import store from '../../store'
import axios from 'axios'
import qs from 'qs'
// axios的一些全局配置
axios.defaults.timeout = 5000 // 响应时间
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded;charset=UTF-8' // 配置请求头
// axios.defaults.baseURL = 'http://192.168.0.130:8081' // 配置接口地址



// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use(
  response => {
    if (response.data.code == '403' || response.data.code == '250') {
      // str.clear()
      store.dispatch('clearState')
    }
    return response
  },
  err => {
    return Promise.reject(err)
  }
)


export function fetchPost(url, params) {
  return new Promise((resolve, reject) => {

    axios.post(url, params ? qs.stringify(params) : '',{
        headers: {
            "A-Token-Header": store.getters.TOKEN,
        }
      }).then((
        res => {
          if (res.data.success) {
            resolve(res.data.result)
          } else reject(res.data)
        },
        err => {
          if (err.data) {
            reject(err.data)
          } else {
            // 请求超时
            Vue.$toast('请求超时')
          }
        }
      )
	);  






  })
}



