// pages/clothdetail/clothdetail.js
var datasource = require('../../utils/data')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 配置banner
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    // 轮播图
    bannerdata: {
      name: '',
      urls: []
    },
    dec:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    console.log('==== onLoad', options.id);

    var urls = datasource.getBannerData()
    // 配置banner数据
    var ban = this.data.bannerdata

    ban.urls = urls
    ban.name = '每日推荐'
    this.setData({
      bannerdata: ban,
      dec: options.dec
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})