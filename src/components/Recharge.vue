<template>
  <div>
  	<mu-appbar title="充值" class="fixed-top-1">
		  <mu-icon-button icon="keyboard_arrow_left" slot="left" @click="comeBack"/>
		</mu-appbar>

		<img src="/static/images/recharge-bg.jpg" alt="宣传广告" class="img-responsive">

	  <mu-flexbox orient="vertical" class="recharge-wrap">
	    <mu-flexbox-item grow="0" shrink="0" class="center">
	    	<mu-text-field hintText="请输入卡号"/>
	    </mu-flexbox-item>

	    <mu-flexbox-item grow="0" shrink="0">
				<mu-stepper>
			    <mu-step>
			      <mu-step-label>
			        选择卡号
			      </mu-step-label>
			    </mu-step>
			    <mu-step>
			      <mu-step-label>
			        充值
			      </mu-step-label>
			    </mu-step>
			    <mu-step>
			      <mu-step-label>
			        完成
			      </mu-step-label>
			    </mu-step>
			  </mu-stepper>
	    </mu-flexbox-item>

		  <mu-flexbox-item class="btn-list">
		  	<mu-raised-button label="20元" class="demo-btn"/>
		  	<mu-raised-button label="30元" class="demo-btn"/>
		  	<mu-raised-button label="50元" class="demo-btn"/>
		  	<mu-raised-button label="100元" class="demo-btn"/>
		  	<mu-raised-button label="200元" class="demo-btn"/>
	    </mu-flexbox-item>

			<mu-flexbox-item grow="0" shrink="0" class="other-btn">	    
			  	<mu-raised-button label="充值网点" icon="speaker_notes" iconClass="icon"/>
			  	<mu-raised-button label="充值记录" icon="contact_mail" iconClass="icon"/>		
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
  .recharge-wrap {
  	height: calc(100vh - 150px);
    background-color: #eee;  	
  }
	.btn-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: flex-start;
  }
  .btn-list .demo-btn {
    margin: 6px 20px;
  }
  .other-btn {
  	margin-bottom: 10px;
  	text-align: center;
  }
  .other-btn .icon {
  	color: orange;
  }

</style>
