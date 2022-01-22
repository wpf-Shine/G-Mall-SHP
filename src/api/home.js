import request from '@/utils/request'
import mockRequest from './mockRequest'

// 三级联动
export function getBaseCategoryList () {
  return request({
    url: 'product/getBaseCategoryList',
    method: 'get'
  })
}

export function reqgetBanner () {
  return mockRequest({
    url: '/banner',
    method: 'get'
  })
}

export function reqGetFloorList () {
  return mockRequest({
    url: '/floor',
    method: 'get'
  })
}

export function reqGetSearchInfo (data) {
  return request({
    url: '/list',
    method: 'post',
    data
  })
}
