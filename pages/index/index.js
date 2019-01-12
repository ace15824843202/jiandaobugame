//index.js
//获取应用实例
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count:0,//获胜次数
    imgArr: ["bu.png", "jiandao.png","shitou.png"],
    flag:true, //结果是否显示
    onePic:'bu.png', 
    twoPic:'wenhao.png',
    timer:null, //定时器,
    tip:'', // 结果提示
    btnText:'开始',
    displayTxt:false  //当pc在出拳时，不能在点击开始按钮
  },
  clickFn(){
    
    this.data.timer=setInterval(()=>{
      let num = Math.round(Math.random() * 2);
      this.setData({
        onePic: this.data.imgArr[num],
        twoPic:'wenhao.png',
        flag:true,
        btnText:"再来一次",
        disabledTxt: true
        
      })
    },50)
  },
  
  stop(e){
    clearInterval(this.data.timer);
    if(this.data.twoPic!="wenhao.png"){
        return
    };
    this.setData({
      twoPic: e.target.dataset.index,
      disabledTxt: false
    });
    let one=this.data.onePic;
    let two = this.data.twoPic;
    // 判断结果
    if ((one === "bu.png" && two === "shitou.png") || (one === "shitou.png" && two === "jiandao.png") || (one === "jiandao.png" && two === "bu.png")){
    
      this.setData({
        tip: "你输了",
        flag: false
      });
    };
    if(one===two){
      this.setData({
        tip: "平局",
        flag: false  
      });
    };
    if ((one === "jiandao.png" && two === "shitou.png") || (one === "bu.png" && two === "jiandao.png") || (one === "shitou.png" && two === "bu.png")){
      let count=this.data.count+1;
      this.setData({
        tip: "你赢了",
        flag: false,
        count
      });
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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