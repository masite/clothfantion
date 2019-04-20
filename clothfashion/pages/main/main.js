// pages/main/main.js
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

    //clothType:1,2,3 上、下、配饰  season 1、2、3、4：春、夏、秋、冬
    filter: {
      clothType: 1,
      season: 1
    },

    // 轮播图
    bannerdata: {
      name: '',
      urls: []
    },

    // 列表数据
    mydata: [

    ]
  },

  upClick: function(e) {
    var filter2 = this.data.filter
    console.log('====', filter2);
    if (filter2.clothType !== 1) {
      filter2.clothType = 1
    }
    this.setData({
      filter: filter2
    })
  },
  downClick: function(e) {
    var filter2 = this.data.filter
    console.log('====', filter2);
    if (filter2.clothType !== 2) {
      filter2.clothType = 2
    }

    this.setData({
      filter: filter2
    })
  },
  outherClick: function(e) {
    var filter2 = this.data.filter
    console.log('====', filter2);
    if (filter2.clothType !== 3) {
      filter2.clothType = 3
    }
    this.setData({
      filter: filter2
    })
  },
  springClick: function(e) {
    var filter2 = this.data.filter
    console.log('====', filter2);
    if (filter2.season !== 1) {
      filter2.season = 1
    }

    var source = datasource.getUpSpringData()
    // 配置banner数据
    var ban = this.data.bannerdata
    ban.urls = source[0].url
    console.log('==== source', ban);
    this.setData({
      filter: filter2,
      bannerdata: ban,
      mydata: source
    })

  },
  summerClick: function(e) {
    var filter2 = this.data.filter
    console.log('====', filter2);
    if (filter2.season !== 2) {
      filter2.season = 2
    }

    var source = datasource.getUpSummerData()
    // 配置banner数据
    var ban = this.data.bannerdata
    ban.urls = source[0].url
    console.log('==== source', ban);
    this.setData({
      filter: filter2,
      bannerdata: ban,
      mydata: source
    })
  },
  autumnClick: function(e) {
    var filter2 = this.data.filter
    console.log('====', filter2);
    if (filter2.season !== 3) {
      filter2.season = 3
    }
    this.setData({
      filter: filter2
    })
  },
  winterClick: function(e) {
    var filter2 = this.data.filter
    console.log('====', filter2);
    if (filter2.season !== 4) {
      filter2.season = 4
    }
    this.setData({
      filter: filter2
    })
  },

  itemClick: function(e) {
    var item = e.currentTarget.dataset.id;
    var ban = this.data.bannerdata
    ban.name = item.name
    ban.urls = []
    for (let i = 0; i < item.url.length; i++) {
      ban.urls.push(item.url[i])
    }
    this.setData({
      bannerdata: ban
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var urls = datasource.getBannerData()
    var source = datasource.getUpSpringData()
    // 配置banner数据
    var ban = this.data.bannerdata

    // var temp = ban.urls.concat(urls)

    ban.urls = urls

    // for(let i=0;i<urls.length;i++){
    //   ban.urls.push(urls[i])
    // }

    console.log('==== source', source);
    this.setData({
      bannerdata: ban,
      mydata: source
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})