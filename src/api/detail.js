import request from '@/utils/request'

export function reqGoodsInfo (skuId) {
  return request({
    url: `/item/${skuId}`,
    method: 'get'
  })
}

export function reqAddOrUpdateShopCart (skuID, skuNum) {
  return request({
    url: `/cart/addToCart/${skuID}/${skuNum}`,
    method: 'post'
  })
}