<template>
  <div class="m-top-56">
  	<mu-appbar title="注册" class="fixed-top-1">
		  <mu-icon-button icon="keyboard_arrow_left" slot="left" @click="comeBack"/>
		</mu-appbar> 
		<div class="center p-top-20 wrapper-default">
		  <mu-text-field hintText="请输入手机号码" type="tel" icon="phone"/><br/>
		  <mu-text-field hintText="密码" type="password"  icon="vpn_key"/><br/>
		  <mu-text-field hintText="确认密码" type="password"  icon="lock"/><br/>
		  <mu-text-field hintText="简介" multiLine :rows="3" :rowsMax="6" icon="comment"/><br/>
		 	<p><mu-raised-button label="注册" secondary/></p>
		</div>		
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
  	}
  }  
}
</script>
<style scoped>

</style>

