<template>
  <slider :pages="someList" :sliderinit="sliderinit">
</template>
<script>
import slider from './mods/slider'
export default {
  data () {
      return {
        //图片列表[arr]
        pages:[
          {
            title: '',
            style:{
             background:'url(src/img/testimg-1.jpg)'
            }
          },
          {
           title: '',
           style:{
            background:'url(src/img/testimg-2.jpg)'
            }
          },
          {
            title: 'slide3',
            style:{
              background:'#4bbfc3',
            },
          }
        ],
        //滑动配置[obj]
        sliderinit: {
          // 写了一些无需配置的项，下个版本会放到slider设定默认值
          currentPage: 0,//当前页码
          start: {},//默认需要书写,存放点击位置
          end: {},//默认需要书写,存放点击位置
          tracking: false,//swipestart状态判断
          thresholdDistance: 500,//滑动判定距离
          thresholdTime: 100,//滑动判定时间
          autoplay:1000,//自动滚动[ms]
          loop:true,//循环滚动
          direction:'vertical'//方向设置，垂直滚动
        }
      }
    },
    components: {
        slider
    }
} 
</script>
