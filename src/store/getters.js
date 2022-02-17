const getters = {
  goodList: state => state.search.searchList.goodsList,
  trademarkList: state => state.search.searchList.trademarkList,
  attrsList: state => state.search.searchList.attrsList,
  categoryView: state => state.detail.goodsInfo.categoryView || {},
  skuInfo: state => state.detail.goodsInfo.skuInfo || {},
  spuSaleAttrList: state => state.detail.goodsInfo.spuSaleAttrList || []
}

export default getters