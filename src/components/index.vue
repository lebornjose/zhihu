<template>
  <div class="zh-index-main">
  	<div class="index-slider">
  		<slider
		    :pagination-visible="true"
		    :slides="slides"
		    :repeating="true"
		    :auto="5000"   
		    @slide-change-start="onSlideChangeStart"
		    @slide-change-end="onSlideChangeEnd"
		    @slide-revert-start="onSlideRevertStart"
		    @slide-revert-end="onSlideRevertEnd"
		    @slider-move="onSliderMove">

		    <div v-for="(slide,index) in slides" :key="index">
		      <a :href="slide.value">
		        <img width="1140" height="400" :src="slide.image" />
		      </a>
		    </div>
		  </slider>
  	</div>
  </div>
</template>
<script>
import slider from './mods/slider'
export default {
  data () {
    return {
      //图片列表[arr]
      slides: [{
        "title": "鬼畜频道精选",
        "value": "http://www.bilibili.com/topic/v2/phone1513.html",
        "image": "http://i0.hdslb.com/bfs/archive/98548a7be48ab9929f02d2c51c2ab801841e5108.jpg",
        "type": 2,
        "weight": 1,
        "remark": "",
        "hash": "148861b9b07d47a5e9e8f8fa961f6596"
      },
      {
        "title": "逗趣问答一战成神",
        "value": "http://acg.tv/u1ue",
        "image": "http://i0.hdslb.com/bfs/archive/056f5ad71f17a9fbb9581f16735768e3d9c54008.png",
        "type": 2,
        "weight": 2,
        "remark": "",
        "hash": "3e054fa6f2fb4632eb8c7a6203e5201c"
      },
      {
        "title": "阴阳师",
        "value": "#",
        "image": "http://i0.hdslb.com/bfs/archive/cf6153a50cb0f3eb27a5836d90be16d4bce8c6f7.jpg",
        "type": 1,
        "weight": 3,
        "remark": "",
        "hash": "204cc23aa90fbeff5cc98932f4249ab4"
      }]
    }
  },
  components: {
    slider:slider
  },
  methods: {
    onSlideChangeStart: function (currentPage) {
      console.log('onSlideChangeStart', currentPage);
    },
    onSlideChangeEnd: function (currentPage) {
      console.log('onSlideChangeEnd', currentPage);
    },
    onSlideRevertStart: function (currentPage) {
      console.log('onSlideRevertStart', currentPage);
    },
    onSlideRevertEnd: function (currentPage) {
      console.log('onSlideRevertEnd', currentPage);
    },
    onSliderMove: function (offset) {
      console.log('onSliderMove', offset);
    },
    prependSlide: function (slideText) {
      this.slides.unshift({
        "title": "bajian prepend",
        "value": "#",
        "image": "http://i0.hdslb.com/bfs/archive/cf6153a50cb0f3eb27a5836d90be16d4bce8c6f7.jpg",
      });
    },
    appendSlide: function (slideText) {
      this.slides.push({
        "title": "bajian append",
        "value": "#",
        "image": "http://i0.hdslb.com/bfs/archive/cf6153a50cb0f3eb27a5836d90be16d4bce8c6f7.jpg",
      });
    },
    removeSlide: function () {

    }
  }
} 
</script>
<style lang="scss">
  .index-slider{
 	  background: #000;
    height: 400px;
  }
	.title-mask{
	  opacity: 0.8;
	  background-color: black;
	  position: absolute;
	  bottom: 0px;
	  left: 0px;
	  height: 1.25rem;/* 50px */
	  line-height: 1.25rem;/* 50px */
	  text-overflow: ellipsis;
	  width: 100%;
	  color: #fff
	}
  .swiper {
    margin-bottom: 80px;
    width: 1140px;
    margin: 0 auto
  }

/*change the pagination u like */
.swiper-pagination-bullet.active {
  background: #20a0ff !important;
}
.swiper-pagination-bullet {
  background: #fff !important;
  opacity: 1 !important;
  margin: 0 6px !important;
  z-index: 9;
}

.horizontal .swiper-pagination {
  margin-right: 10px !important;
  width: 50% !important;
  text-align: right !important;
}

</style>