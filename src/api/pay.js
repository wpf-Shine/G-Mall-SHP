import request from '@/utils/request'

export function reqPayInfo (orderId) {
  return request({
    url: `/payment/weixin/createNative/${orderId}`,
    method: 'get'
  })
}

export function reqGetPayStatus (orderId) {
  return request({
    url: `/payment/weixin/queryPayStatus/${orderId}`,
    method: 'get'
  })
}
