<template>
  <div class="container">
	  <mu-appbar title="详情" class="fixed-top-1">
		  <mu-icon-button icon="keyboard_arrow_left" slot="left" @click="comeBack"/>
		  <mu-icon-button icon="shopping_basket" slot="right"/>
		</mu-appbar>

    <div class="detail-wrap">
      <div class="base">
        <img src="/static/images/detail-bg.jpg" alt="宣传广告" class="img-responsive">
        <mu-flexbox class="text">
          <mu-flexbox-item>
            <mu-icon value="attach_money" color="orange"/><span>20.00</span>
          </mu-flexbox-item>
          <mu-flexbox-item>
            <mu-icon value="mail_outline" color="#8fc324"/><span>同城包邮</span>
          </mu-flexbox-item>
        </mu-flexbox>
      </div> 

      <mu-list>
        <mu-list-item title="更多说明" class="bg-while" to="/moreDetail">
          <mu-icon slot="left" value="inbox"/>
          <mu-icon slot="right" value="keyboard_arrow_right"/>
        </mu-list-item>
      </mu-list>

      <div class="intro">
        <mu-sub-header>阳光</mu-sub-header>
        <mu-content-block>
          散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
        </mu-content-block>
      </div>

    </div>

    <mu-flexbox  class="fixed-bottom center">
      <mu-flexbox-item>
        <mu-icon value="share" color="#ff4081"/>
        <div>分享</div>
      </mu-flexbox-item>
      <mu-flexbox-item>
        <mu-icon value="stars" color="#ff4081"/>
        <div>收藏</div>
      </mu-flexbox-item>      
      <mu-flexbox-item>
        <mu-icon value="shopping_cart" color="#ff4081"/>
        <div>购物车</div>
      </mu-flexbox-item>
      <mu-flexbox-item  basis="40px">
        <mu-raised-button label="购买" secondary/>
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
  .container {
    margin-top: 56px;    
    margin-bottom: 51px;
  }
  .detail-wrap {
    height: calc(100vh - 107px);
    overflow-y: auto; 
    background-color: #eee;
  }
  .base .text {
    position: relative;
    background-color: #fff;
  }
  .base span {
    position: absolute;
    margin-left: 6px;
    line-height: 26px;
  }
  .intro {
    margin-bottom: 10px;
    background-color: #fff;
  }
</style>

