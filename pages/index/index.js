//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imageUrls:[
      'http://cdnimg103.lizhi.fm/topic_cover/2018/01/12/42618931878338701_660x252.jpg',
      'http://cdnimg103.lizhi.fm/topic_cover/2018/01/11/42595669798574221_660x252.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    list:[
      {},
      {},
      {},
      {},
      {}
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onPullDownRefresh:function(){
    console.log(1132);
    wx.stopPullDownRefresh()
  }
})
