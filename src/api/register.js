import request from '@/utils/request'

export function reqGetCode (phone) {
  return request({
    url: `/user/passport/sendCode/${phone}`,
    method: 'get'
  })
}

export function reqRegister (data) {
  return request({
    url: '/user/passport/register',
    method: 'post',
    data
  })
}

export function reqUserLogin (data) {
  return request({
    url: '/user/passport/login',
    method: 'post',
    data
  })
}

export function reqGetUserInfo () {
  return request({
    url: 'user/passport/auth/getUserInfo',
    method: 'get'
  })
}

export function reqUserLogout () {
  return request({
    url: 'user/passport/logout',
    method: 'get'
  })
}