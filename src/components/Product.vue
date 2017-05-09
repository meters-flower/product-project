<template>
	<mobile-tear-sheet>
	  <mu-list>
	    <mu-sub-header>嵌入式物联网</mu-sub-header>
	    <mu-list-item title="物联网感知实验平台" to="/productDetail">
	      <mu-avatar src="/static/images/img2.jpg" slot="leftAvatar"/>
	      <span slot="describe">
	         物联网感知实验平台是一套针对物联网相关专业展开基于Zigbee的网络教学研究而而开发的系统，及行业应用推出的模块化实验平台
	      </span>
	    </mu-list-item>
	    <mu-divider inset/>
	    <mu-list-item title="全功能物联网实验平台">
	      <mu-avatar src="/static/images/img3.jpg" slot="leftAvatar"/>
	      <span slot="describe">
	        全功能物联网实验平台(WS-IOTBP-002)是一款互联网及下一代互联网教学科研产品。
	      </span>
	    </mu-list-item>
	    <mu-divider inset/>
	    <mu-list-item title="3G移动互联实验平台">
	      <mu-avatar src="/static/images/img4.jpg" slot="leftAvatar"/>
	      <span slot="describe">
	        <span style="color: rgba(0, 0, 0, .87)">移动互联</span><br/>
	         综合实验平台(WS-SX--003)是铂士莱最新推出的，为了满足当前高校主流移到互联网教学相关实验室建设的综合实验平台。
	      </span>
	    </mu-list-item>
	    <mu-divider inset/>
	    <mu-list-item title="BoxDuino智能系列">
	      <mu-avatar src="/static/images/img5.jpg" slot="leftAvatar"/>
	      <span slot="describe">
	        <span style="color: rgba(0, 0, 0, .87)">哇去</span><br/> 实在编不下去，这就是个demo
	      </span>
	    </mu-list-item>
	  </mu-list>
	</mobile-tear-sheet>
</template>

<script>
import mobileTearSheet  from './mobileTearSheet'
export default {
  data () {
    return {
    }
  },
  components: {
   	mobileTearSheet
  }
}
</script>


