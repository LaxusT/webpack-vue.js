const textDict = {
  // 订单状态
  indentStatus: {
    '00': '待审核',
    '01': '审核通过',
    '02': '审核不通过'
  },

  // 订单活动类型
  indentTypes: {
    '01': '活动',
    '02': '商品'
  },

  // 详情报名按钮类型
  detailStatus: {
    '0': '您已报名',
    '1': '活动已结束',
    '2': '活动未开始',
    '3': '报名'
  },

  // 首页会员精选部分
  careActStatus: {
    '00': '报名未开始',
    '01': '报名中',
    '02': '报名已结束'
  }
}

const textHelper = {
    // dict
  textDict (status, type) {
    return textDict[type][status]
  }
}

export default textHelper
