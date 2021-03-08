// index.js
// 获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    startTime:'',
    endTime:'',
    imgsrc : './image/1.png'
  },
  press(e){
    this.setData({
      startTime:e.timeStamp
    })
  },
  pressend(e){
    this.setData({
      endTime:e.timeStamp
    })
    let time = this.data.endTime - this.data.startTime
    this.boxImg(time)
  },
  boxImg(time){
    let times = Math.ceil(time/1000)
    let imgsrc = ''
    if(times >= 2 && times <= 4){
        imgsrc = './image/3.png'
    }else if(times >= 5 && times <= 6){
        imgsrc = './image/4.png'
    }else if(times >= 7 && times <= 9){
        imgsrc = './image/5.png'
    }else if(times >= 10 && times <= 12){
        imgsrc = './image/2.png'
    }else{
        imgsrc = './image/1.png'
    }
    this.setData({
      imgsrc:imgsrc
    })
  }
})
