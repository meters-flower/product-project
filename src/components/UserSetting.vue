<template>
  <div>
  	<mu-appbar title="个人信息" class="fixed-top-1">
		  <mu-icon-button icon="keyboard_arrow_left" slot="left" @click="comeBack"/>
		</mu-appbar>

		<mu-list>
	    <mu-list-item title="个人头像" @click="openBottomSheet">
	      <mu-icon slot="left" value="face" color="#800000"/>
	      <mu-icon slot="right" value="inbox"/>
	    </mu-list-item>
	    <mu-divider/>
	    <mu-list-item title="收货地址">
	      <mu-icon slot="left" value="location_on" color="orange"/>
	      <mu-icon slot="right" value="keyboard_arrow_right"/>
	    </mu-list-item>
	    <mu-divider/>
	    <mu-list-item title="修改密码" to="/modPwd">
	      <mu-icon slot="left" value="vpn_key" color="#6b8e23"/>
	      <mu-icon slot="right" value="keyboard_arrow_right"/>
	    </mu-list-item>
	  </mu-list>

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
      bottomSheet: false
    }
  },
  methods: {
  	comeBack() {
  		this.$router.go(-1);
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
	.user-img {
		border-radius: 50%;
		width: 60px;
		height: 60px;	
	}
</style>

