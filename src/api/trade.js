import request from '@/utils/request'

export function reqGetAddressInfo () {
  return request({
    url: '/user/userAddress/auth/findUserAddressList',
    method: 'get'
  })
}

export function reqGetOrderInfo () {
  return request({
    url: '/order/auth/trade',
    method: 'get'
  })
}

export function reqSubmitOrder (tradeNo, data) {
  return request({
    url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,
    method: 'post',
    data
  })
}