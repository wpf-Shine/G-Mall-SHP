const getters = {
  goodList: state => state.search.searchList.goodsList,
  trademarkList: state => state.search.searchList.trademarkList,
  attrsList: state => state.search.searchList.attrsList,
  categoryView: state => state.detail.goodsInfo.categoryView || {},
  skuInfo: state => state.detail.goodsInfo.skuInfo || {},
  spuSaleAttrList: state => state.detail.goodsInfo.spuSaleAttrList || [],
  cartList: state => state.shopcart.cartList[0] || [],
  code: state => state.user.code,
  token: state => state.user.token,
  userInfo: state => state.user.userInfo,
  addressInfo: state => state.trade.addressInfo,
  orderInfo: state => state.trade.orderInfo,
  payInfo: state => state.pay.payInfo,
  myOrderList: state => state.center.myOrderList
}

export default getters