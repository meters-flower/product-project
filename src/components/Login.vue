<template>
  <div>
  	<mu-appbar title="登录">
		  <mu-icon-button icon="keyboard_arrow_left" slot="left" @click="comeBack"/>
		</mu-appbar> 
		<div class="center p-top-20">
		  <mu-text-field hintText="账号" type="text" icon="person_pin"/><br/>
		  <mu-text-field hintText="密码" type="password" icon="lock_outline"/><br/>
		  <p>
		  	<a href="#">忘记密码?</a>
		  	<router-link to="/signup" class="m-left-60">注册</router-link>
		  </p>
		 	<p><mu-raised-button label="登录" secondary/></p>
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
	.m-left-60 {
		margin-left: 60px;
	}
</style>

