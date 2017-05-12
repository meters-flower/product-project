<template>
  <div>
    <mu-appbar title="收银台">
		  <mu-icon-button icon="keyboard_arrow_left" slot="left" @click="open"/>
		</mu-appbar>

		<div class="radio-group">
		  <mu-radio label="微信" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
		  <mu-radio label="支付宝" name="group" nativeValue="simple2" v-model="value" class="demo-radio"/>
		  <mu-radio label="银行卡" name="group" nativeValue="simple3" v-model="value" uncheckIcon="favorite_border" checkedIcon="favorite" class="demo-radio"/>
		</div>

		<div class="fixed-bottom count">
			还需支付：<span class="color-red">$20.00　</span>
			<mu-raised-button label="支付" class="demo-raised-button" secondary/>
		</div>

		<mu-dialog :open="dialog" @close="close">
	    确认要取消付款吗？
	    <mu-flat-button slot="actions" @click="close" primary label="取消"/>
	    <mu-flat-button slot="actions" primary @click="comeBack" label="确定"/>
	  </mu-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
			dialog: false,
			value: 'simple1'
    }
  },
   methods: {
  	comeBack() {
  		this.$router.go(-1);
  	},
		open () {
      this.dialog = true
    },
    close () {
      this.dialog = false
    }
  }
}
</script>
<style scoped>
	.radio-group {
		padding: 10px 0 0 10px;
	}
	.demo-radio {
		display: block;
		margin-bottom: 16px;
	}
	.count {
		padding: 10px 0;
		background-color: #eee;
		text-align: center;
	}
</style>

