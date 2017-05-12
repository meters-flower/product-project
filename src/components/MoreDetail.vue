<template>
  <div class="m-top-56">
	  <mu-appbar title="更多详情" class="fixed-top-1">
		  <mu-icon-button icon="keyboard_arrow_left" slot="left" @click="comeBack"/>
		  <mu-icon-button icon="shopping_basket" slot="right"/>
		</mu-appbar>  

	  <mu-flexbox orient="vertical" class="detail-wrap">
	    <mu-flexbox-item class="content">
					散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
	    </mu-flexbox-item>
	    <mu-flexbox-item grow="0" shrink="0">
				<img src="/static/images/detail-bg.jpg" alt="宣传广告" class="img-responsive">
	    </mu-flexbox-item>
	  </mu-flexbox>		

  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'title'
    }
  },
  methods: {
  	comeBack() {
  		this.$router.go(-1);
  	},
  }
}
</script>
<style scoped>
  .detail-wrap {
    height: calc(100vh - 56px);
    overflow-y: auto; 
    background-color: #eee;
  }	
  .detail-wrap .content {
		padding: 30px;
  }
</style>

