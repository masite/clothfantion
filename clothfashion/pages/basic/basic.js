// pages/basic/basic.js
Page({


  /**
   * 页面的初始数据
   */
  data: {
    motto: 'open basic',
    txt: '内容',
    imageurl: ''
  },

  read: function() {
    // wx.downloadFile({
    //   url: '',
    //   success: res => {
    //     console.log('pic ',res.tempFilePath);  // 返回本地临时文件bdfile://tmp/1542099788398.png
    //   },
    //   fail: err => {
    //     console.log(err);
    //   }
    // })


    // var fileSystemManager = wx.getFileSystemManager()
    // fileSystemManager.writeFileSync(
    //   `${wx.env.USER_DATA_PATH}/demo.txt`,
    //   '一身诗意千寻瀑，万古人间四月天',
    //   'utf8'
    // );

    var fileSystemManager = wx.getFileSystemManager()
    let data = fileSystemManager.readFileSync(
      `${wx.env.USER_DATA_PATH}/demo.txt`,
      'utf8'
    );
    console.log("read", data)
    this.setData({
      txt: data,
      imageurl: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2195115049,1742121468&fm=26&gp=0.jpg'
    })
  },

  //yhb.seejoke.com
  upload: function(path) {
    wx.uploadFile({
      url: "http://yhb.seejoke.com/upload",
      filePath: path,
      name: 'file',
      header: {
        "Content-Type": "multipart/form-data"
      },
      // formData: {
      //   //和服务器约定的token, 一般也可以放在header中
      //   'session_token': wx.getStorageSync('session_token')
      // },
      success: function (res) {
        console.log(res);
        if (res.statusCode != 200) {
          wx.showModal({
            title: '提示',
            content: '上传失败',
            showCancel: false
          })
          return;
        }
        var data = res.data
        //上传成功
        console.log("上传成功", data)
      },
      fail: function (e) {
        console.log(e);
        wx.showModal({
          title: '提示',
          content: '上传失败',
          showCancel: false
        })
      },
      complete: function () {
        wx.hideToast(); //隐藏Toast
      }
    })
  },

  up: function() {
    var that = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        console.log("chooseClick", tempFilePaths)

        that.upload(tempFilePaths[0])
        wx.showToast({
            icon: "loading",
            title: "正在上传"
          })
          
      }
    })
  },

  down: function() {
    var mythis = this;
    wx.downloadFile({
      url: 'http://yhb.seejoke.com/download/shanshan.jpg',
      data: {
        filename: 'shanshan.jpg',
      },
      success: function(res) {
        if (res.statusCode === 200) {
          console.log('request ==== :  ', res)
          mythis.setData({
            imageurl: res.tempFilePath,
          })
        } else {
          console.log('false ==== :  ', res)
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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

  },
  
})