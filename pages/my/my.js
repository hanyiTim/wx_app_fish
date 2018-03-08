
//my.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '我的',
    })
  },
  onPullDownRefresh: function () {
    console.log(1132);
    wx.stopPullDownRefresh()
  }
})
