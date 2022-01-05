import request from '@/utils/request'

// 三级联动
export function getBaseCategoryList () {
  return request({
    url: 'product/getBaseCategoryList',
    method: 'get'
  })
}