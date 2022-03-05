import request from '@/utils/request'

export function reqMyOrderList (page, limit) {
  return request({
    url: `/order/auth/${page}/${limit}`,
    method: 'get'
  })
}