// pages/newday/newday.js
var datasource = require('../../utils/data')
var bmap = require('../../libs/bmap-wx.js');
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
    weatherData: '' 

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var urls = datasource.getBannerData()
    // 配置banner数据
    var ban = this.data.bannerdata

    // var temp = ban.urls.concat(urls)

    ban.urls = urls
    ban.name = '每日推荐'

    // for(let i=0;i<urls.length;i++){
    //   ban.urls.push(urls[i])
    // }

    this.setData({
      bannerdata: ban
    })

    var that = this;
    // 新建百度地图对象 
    var BMap = new bmap.BMapWX({
      ak: 'Dx5xiEudSw2P1eBaQQtIk1bkSQGshcmk'
    });
    var fail = function (data) {
      console.log(data)
    };
    var success = function (data) {
      console.log(data)
      var weatherData = data.currentWeather[0];
      weatherData = '城市：' + weatherData.currentCity + '\n' + 'PM2.5：' + weatherData.pm25 + '\n' + '日期：' + weatherData.date + '\n' + '温度：' + weatherData.temperature + '\n' + '天气：' + weatherData.weatherDesc + '\n' + '风力：' + weatherData.wind + '\n';
      that.setData({
        weatherData: weatherData
      });
    }
    // 发起weather请求 
    BMap.weather({
      fail: fail,
      success: success
    }); 

  },

  mycloths:function(){
    
  },

  other: function () {

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