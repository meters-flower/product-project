<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide silid-1"></div>
      <div class="swiper-slide silid-2"></div>
      <div class="swiper-slide silid-3"></div>
      <div class="swiper-slide silid-4">
      	<mu-raised-button label="开启旅途" class="pos-center" primary to="/mobile"/>
      </div>
    </div>
		<div class="swiper-pagination"></div>
    <img src="../assets/images/home/web-swipe-tip.png" alt="向下" class="down" @click="next">		
  </div>
</template>

<script>
export default {
  data () {
    return {
      mySwiper: null
    }
  },
  mounted() {
		  this.mySwiper = new Swiper('.swiper-container',{
				speed:400,
				direction : 'vertical', 
				resistance:'100%',
				mousewheelControl : true,
				grabCursor: true,
				pagination: '.swiper-pagination',
			  paginationClickable: true,
			});
  },
  methods: {
  	next() {
  		this.mySwiper.slideNext();
  	}
  }
}
</script>
<style scoped>
	.swiper-container,
	.swiper-slide{
		height: calc(100vh) !important;
	}
	.swiper-slide {
		background-position:center;
		background-size: cover;
		background-repeat: no-repeat;
	}
	.silid-1 {background-image: url(../assets/images/ad/img1.jpg);}
	.silid-2 {background-image: url(../assets/images/ad/img2.jpg);}
	.silid-3 {background-image: url(../assets/images/ad/img3.jpg);}
	.silid-4 {background-image: url(../assets/images/ad/img4.jpg);}

	.down {
		position: absolute;
		bottom: 8px;
    left: 50%;
    margin-left: -12px;
    z-index: 100;		
    cursor: pointer;
		animation: tipmove 1.5s infinite ease-in-out;
  }
  .pos-center {
		position: absolute;
		top: 50%;
		left: 50%;
		margin-left: -44px;
		margin-bottom: -18px;
  }
 @keyframes tipmove {
  	0% {
	    bottom: 10px;
	    opacity: 0;
		}
		50% {
		    bottom: 15px;
		    opacity: 1;
		}
		100% {
		    bottom: 20px;
		    opacity: 0;
		}
  }
</style>

