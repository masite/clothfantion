// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageUrl: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=776257843,1161785733&fm=27&gp=0.jpg',
    weather:'晴空万里，旭旭和风',
    mode: "scaleToFill",
    arr: [],

    // 配置banner
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,

    bannerdata: {
      name: '', 
      urls:[]
    },
    // 列表数据
    mydata: [{
      id: 1,
      name: '1-1-1',
      url: ['https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=776257843,1161785733&fm=27&gp=0.jpg', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2069030465,1234504942&fm=26&gp=0.jpg','https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=776257843,1161785733&fm=27&gp=0.jpg']
    },
    {
      id: 2,
      name: '2-2-2',
      url: ['https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=776257843,1161785733&fm=27&gp=0.jpg', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2069030465,1234504942&fm=26&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=776257843,1161785733&fm=27&gp=0.jpg']
    },
    {
      id: 3,
      name: '3-3-3',
      url: ['https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=776257843,1161785733&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=776257843,1161785733&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=776257843,1161785733&fm=27&gp=0.jpg']
    },
    {
      id: 4,
      name: '4-4-4',
      url: ['https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=776257843,1161785733&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=776257843,1161785733&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=776257843,1161785733&fm=27&gp=0.jpg']
    },
      {
        id: 1,
        name: '1-1-1',
        url: ['https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=776257843,1161785733&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=776257843,1161785733&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=776257843,1161785733&fm=27&gp=0.jpg']
      },
      {
        id: 2,
        name: '2-2-2',
        url: ['https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=776257843,1161785733&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=776257843,1161785733&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=776257843,1161785733&fm=27&gp=0.jpg']
      },
      {
        id: 3,
        name: '3-3-3',
        url: ['https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=776257843,1161785733&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=776257843,1161785733&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=776257843,1161785733&fm=27&gp=0.jpg']
      },
      {
        id: 4,
        name: '4-4-4',
        url: ['https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=776257843,1161785733&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=776257843,1161785733&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=776257843,1161785733&fm=27&gp=0.jpg']
      },
    {
      id: 1,
      name: '1-1-1',
      url: ['https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=776257843,1161785733&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=776257843,1161785733&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=776257843,1161785733&fm=27&gp=0.jpg']
    },
    {
      id: 2,
      name: '2-2-2',
      url: ['https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=776257843,1161785733&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=776257843,1161785733&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=776257843,1161785733&fm=27&gp=0.jpg']
    },
    {
      id: 3,
      name: '3-3-3',
      url: ['https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=776257843,1161785733&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=776257843,1161785733&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=776257843,1161785733&fm=27&gp=0.jpg']
    },
    {
      id: 4,
      name: '4-4-4',
      url: ['https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=776257843,1161785733&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=776257843,1161785733&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=776257843,1161785733&fm=27&gp=0.jpg']
    },
    {
      id: 1,
      name: '1-1-1',
      url: ['https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=776257843,1161785733&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=776257843,1161785733&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=776257843,1161785733&fm=27&gp=0.jpg']
    },
    {
      id: 2,
      name: '2-2-2',
      url: ['https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=776257843,1161785733&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=776257843,1161785733&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=776257843,1161785733&fm=27&gp=0.jpg']
    },
    {
      id: 3,
      name: '3-3-3',
      url: ['https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=776257843,1161785733&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=776257843,1161785733&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=776257843,1161785733&fm=27&gp=0.jpg']
    },
    {
      id: 4,
      name: '4-4-4',
      url: ['https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=776257843,1161785733&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=776257843,1161785733&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=776257843,1161785733&fm=27&gp=0.jpg']
    },
    ]
  },

  itemClick: function(e){
    var item = e.currentTarget.dataset.id;
    var ban = this.data.bannerdata
    ban.name = item.name
    ban.urls = []
    for (let i = 0; i < item.url.length; i++){
      ban.urls.push(item.url[i]) 
    }
    this.setData({ bannerdata: ban})
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var ban = this.data.bannerdata
    ban.name = 'asdfasfdasfasfasfsf'
    
    var array = this.data.arr
    for (let i = 1; i < 4; i++) {
      array.push('https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=776257843,1161785733&fm=27&gp=0.jpg')
      ban.urls.push('https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=776257843,1161785733&fm=27&gp=0.jpg')
    }
    console.log('====',ban);
    this.setData({ bannerdata: ban})
    this.setData({ arr: array })

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