
//find.js
//获取应用实例
const app = getApp()

Page({
  data: {
    currentTab:0,
    list: [
      {},
      {},
      {},
      {},
      {}
    ]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (locationSearch) {
    var self = this;
    wx.setNavigationBarTitle({
      title: '发现',
    });
    self.setData({
      currentTab: locationSearch.currentTab || 0
    })
  },
  handleClickTab:function(event){
    var self = this,
        current = event.target.dataset.current;
    self.setData({
      currentTab: current
    });
  },
  handleSwiperChange:function(event){
    var data = event.detail,
        self = this;
    self.setData({
      currentTab:data.current
    });
  }
})
