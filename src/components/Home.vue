<template>
  <mobile-tear-sheet>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
        </div>
        <div class="swiper-slide">2</div>
        <div class="swiper-slide">3</div>
      </div>
      <img src="../assets/images/home/web-swipe-tip.png" alt="向下" class="down ">
			<div class="swiper-pagination"></div>
    </div>
  </mobile-tear-sheet>
</template>

<script>
import mobileTearSheet  from './mobileTearSheet'
export default {
  data () {
    return {
      msg: '首页'
    }
  },
  mounted() {
		  var mySwiper = new Swiper('.swiper-container',{
				speed:400,
				direction : 'vertical', 
				resistance:'100%',
				// loop:true,
				mousewheelControl : true,
				grabCursor: true,

				pagination: '.swiper-pagination',
			  paginationClickable: true,

			  onInit: function(swiper){ 
			    swiperAnimateCache(swiper); //隐藏动画元素 
			    swiperAnimate(swiper); //初始化完成开始动画
			  }, 
			  onSlideChangeEnd: function(swiper){ 
			    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
			  } 				  
			});
  },
  components: {
    mobileTearSheet
  }
}
</script>
<style scoped>
	.swiper-container,
	.swiper-slide{
		height: calc(100vh - 58px) !important;
	}
	.swiper-slide {
		background-position:center;
		background-size: cover;
		background-repeat: no-repeat;
		background-image: url(../assets/images/home/bg.jpg);
	}
	.down {
		animation: tipmove 1.5s infinite ease-in-out;
		position: absolute;
		bottom: 4px;
    left: 50%;
    margin-left: -12px;
    z-index: 999;
  }
 @keyframes tipmove {
  	0% {
	    bottom: 10px;
	    opacity: 0;
		}
		index.html:55
		50% {
		    bottom: 15px;
		    opacity: 1;
		}
		index.html:55
		100% {
		    bottom: 20px;
		    opacity: 0;
		}
  }
</style>

