import request from '@/utils/request'

export function reqCartList () {
  return request({
    url: '/cart/cartList',
    method: 'get'
  })
}

export function reqDeleteCartById (skuId) {
  return request({
    url: `/cart/deleteCart/${skuId}`,
    method: 'delete'
  })
}

export function reqChangeCheckedById (skuId, isChecked) {
  return request({
    url: `/cart/checkCart/${skuId}/${isChecked}`,
    method: 'get'
  })
}