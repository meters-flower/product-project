<template>
  <div>
  	<mu-appbar title="修改密码">
		  <mu-icon-button icon="keyboard_arrow_left" slot="left" @click="comeBack"/>
		</mu-appbar> 

		<div class="center">
			<mu-text-field label="原始密码" type="password" labelFloat :errorText="oldErr" v-model="oldPwd" @blur="isRequiredOld" /><br>
			<mu-text-field label="新密码" type="password" labelFloat :errorText="newErr" v-model="newPwd" @blur="isRequiredNew" /><br>
		 	<mu-text-field label="确认密码" type="password" labelFloat :errorText="reErr"  v-model="rePwd" @input="isEqual"/>
		 	<p><mu-flat-button label="提交" icon="done" primary/></p>
		</div> 
  </div>
</template>

<script>
export default {
  data () {
    return {
    	oldPwd: '',
    	newPwd: '',
    	rePwd: '',

    	oldErr: '',
    	newErr: '',
      reErr: ''
    }
  },
  methods: {
  	comeBack() {
  		this.$router.go(-1);
  	},
  	isRequiredOld() {
  		console.log('old blur');
  		this.oldErr = this.oldPwd === '' ? '必填项': '';
  	},
  	isRequiredNew() {
  		console.log('new blur');
			this.newErr = this.newPwd === '' ? '必填项': '';
  	}, 
  	isEqual() {
  	 	this.reErr = this.newPwd !== this.rePwd ? '两次输入的密码不一致': '';
  	}
  }
}
</script>

