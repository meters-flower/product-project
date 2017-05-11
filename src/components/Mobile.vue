<template>
	<div>
		<mu-flexbox orient="vertical" class="mobile-wrap">
			<!-- 个人信息 -->
	    <mu-flexbox-item class="user-wrap">
	    	<mu-raised-button @click="openBottomSheet" class="user-bg" />
	      <router-link to="/userSetting"><img src="../assets/images/mobile/user-img.jpg" alt="头像" class="use-setting"></router-link>
	    </mu-flexbox-item>

	    <mu-flexbox-item grow="0" shrink="0">
	    	<!-- 界面功能菜单 -->
	    	<mu-flexbox>
	    		<mu-flexbox-item>	
	    			<mu-paper class="paper-circle circle-1" circle :zDepth="2" />
	    		</mu-flexbox-item>	    		
	    		<mu-flexbox-item>	
	    			<router-link to="/productList"><mu-paper class="paper-circle circle-2" circle :zDepth="2" /></router-link>
	    		</mu-flexbox-item>	    		
	    		<mu-flexbox-item>	
	    			<mu-paper class="paper-circle circle-3" circle :zDepth="2" />
	    		</mu-flexbox-item>	    		
	    		<mu-flexbox-item>	
	    			<mu-paper class="paper-circle circle-4" circle :zDepth="2" />
	    		</mu-flexbox-item>
	    	</mu-flexbox>

	    	<!-- 导航链接 -->
			  <mu-paper>
				  <mu-bottom-nav :value="bottomNav" @change="handleChange">
				    <mu-bottom-nav-item value="financing" title="惠民理财" icon="account_balance" />
				    <mu-bottom-nav-item value="bus" title="公交" icon="directions_bus" />
				    <mu-bottom-nav-item value="insurance" title="保险" icon="import_contacts"/>
				    <mu-bottom-nav-item value="safety" title="平安" icon="people outline"/>
				  </mu-bottom-nav>
				</mu-paper>		
	    </mu-flexbox-item>

	    <!-- 图片轮播 -->
	    <mu-flexbox-item grow="0" shrink="0">
	      <div class="swiper-container">
			    <div class="swiper-wrapper">
			        <div class="swiper-slide">Slide 1</div>
			        <div class="swiper-slide">Slide 2</div>
			        <div class="swiper-slide">Slide 3</div>
			    </div>
			    <div class="swiper-pagination"></div>
			    
			    <div class="swiper-button-prev"></div>
			    <div class="swiper-button-next"></div>
			</div>
	    </mu-flexbox-item>
	  </mu-flexbox>		

		<!-- 底部滑出面板 -->
	  <mu-bottom-sheet :open="bottomSheet" @close="closeBottomSheet">
	    <mu-list @itemClick="closeBottomSheet" class="center">
	      <mu-sub-header>
	        图片
	      </mu-sub-header>
	      <mu-list-item title="选择图片"/>
	      <mu-list-item title="拍照"/>
	      <mu-list-item title="取消" @click="closeBottomSheet"/>
	    </mu-list>
	  </mu-bottom-sheet>
	</div>

</template>

<script>
export default {
  data () {
    return {
      bottomNav: 'financing',
      bottomSheet: false
    }
  },
  mounted() {
	  var mySwiper = new Swiper ('.swiper-container', {
	    loop: true,
	    pagination: '.swiper-pagination',
	    nextButton: '.swiper-button-next',
	    prevButton: '.swiper-button-prev',

	  }) 
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    },
    openBottomSheet () {
      this.bottomSheet = true
    },
		closeBottomSheet () {
      this.bottomSheet = false
    }
  }
}
</script>
<style scoped>
	.mobile-wrap {
		height: 100vh;
	}
	.user-wrap {
		position: relative;
		margin-bottom: 10px;
	}
	.user-bg {
		position: absolute;
		width: 100%;
		height: 100%;
		background-position:center;
		background-repeat: no-repeat;
		background-image: url(../assets/images/mobile/user-bg.jpg);
		background-size: cover;
	}
	.use-setting {
		position: absolute;
		left: 50%;		
		bottom: -20px;
		margin-left: -30px;
		border: 3px solid #fff;
		border-radius: 50%;
		width: 60px;
		height: 60px;
	}
	.paper-circle {
		margin: 10px auto;
    width: 60px;		
    height: 60px;
    background-color: #eee;
	}
	.swiper-container {
		margin: 0 10px 10px;
	}
	.swiper-slide {
		height: 30vh;
		background-color: #eee;
	}
</style>

