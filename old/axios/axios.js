import Axios from "old/axios/axios"
import Store from "../../data/www/realfriend/src/store"
import router from "../../data/www/realfriend/src/router"

const http = Axios.create({
  // withCredentials: true
})

http.interceptors.response.use(function (response) {
  return response
  }, function (error) {
  // 認証エラー時の処理
  console.log(error)
  if (error.status !== 200) {
    Store.dispatch("token/setError", true)
    Store.dispatch("token/setLogin", true)

    router.push('/login')
    // システムエラー時の処理
  }
  return Promise.reject(error)
})


export default http
