import axios from '@/utils/axios'

export function login(username, password) {
  const data = {
    username,
    password,
  }
  return axios.post(
    '/auth/login',
    data
  )
}

export function checkToken(token) {
  const data = {
    token
  }
  return axios.post(
    '/auth/check-token',
    data
  )
}

export function logout() {
  return axios.delete(
    '/auth/logout'
  )
}

// export function getUserInfo(token) {
//   return request({
//     url: '/user/info',
//     method: 'get',
//     params: { token },
//   })
// }