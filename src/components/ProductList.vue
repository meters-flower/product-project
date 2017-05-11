<template>
  <div class="container">
  	<!-- 标题栏 -->
	  <mu-appbar title="商品列表" class="fixed-top-1">
		  <mu-icon-button icon="keyboard_arrow_left" slot="left" @click="comeBack"/>
		  <mu-icon-button icon="shopping_basket" slot="right"/>
		</mu-appbar>
		
		<!-- 商品选项卡 -->
		<mu-tabs :value="activeTab" @change="handleTabChange" class="fixed-top-2">
	    <mu-tab value="tab1" title="全部" class="color-666"/>
	    <mu-tab value="tab2" title="更新日期从早到晚"  class="color-666"/>
	  </mu-tabs>
		<div  v-if="activeTab === 'tab1'" class="gridlist-demo-container">
		  <mu-grid-list class="gridlist-demo">
		    <mu-grid-tile v-for="tile, index in list" :key="index">
			      <img :src="tile.image"/>
			      <span slot="title">{{tile.title}}</span>
			      <span slot="subTitle">by <b>{{tile.author}}</b></span>
			      <mu-icon-button icon="star_border" slot="action" to="/readMore"/>
		    </mu-grid-tile>
		  </mu-grid-list>
		</div>	  
	  <div v-if="activeTab === 'tab2'">
	    <h2>Tab Two</h2>
	    <p>
	      这是第二个 tab
	    </p>
	  </div>

		<!-- 底部导航栏 -->
	  <mu-paper class="fixed-bottom">
	    <mu-bottom-nav :value="bottomNav" @change="handleNavChange">
	      <mu-bottom-nav-item value="shopping" title="购卡商城" icon="shopping_cart"/>
	      <mu-bottom-nav-item value="DIY" title="DIY" icon="photo"/>
	      <mu-bottom-nav-item value="me" title="我的" icon="person_outline"/>	      
	    </mu-bottom-nav>
	  </mu-paper>
  </div>
</template>

<script>
export default {
  data () {
    return {
    	activeTab: 'tab1',
      bottomNav: 'shopping',
      list: [{
      	id: '0001',
        image: '../static/images/product/img1.jpg',
        title: 'Breakfast',
        author: 'Myron'
      }, {
      	id: '0002',
        image: '../static/images/product/img2.jpg',
        title: 'Burger',
        author: 'Linyu'
      }, {
      	id: '0003',      	
        image: '../static/images/product/img3.jpg',
        title: 'Camera',
        author: 'ruolin'
      }, {
      	id: '0004',
        image: '../static/images/product/img4.jpg',
        title: 'Hats',
        author: 'kakali'
      }, {
      	id: '0005',
        image: '../static/images/product/img5.jpg',
        title: 'Honey',
        author: 'yuyang'
      }]
    }
  },
  methods: {
  	comeBack() {
  		this.$router.go(-1);
  	},
  	handleTabChange (val) {
      this.activeTab = val
    },
  	handleNavChange (val) {
      this.bottomNav = val
    }
  }
}
</script>
<style scoped>
	html {
		overflow-y: hidden;
	}
	.container {
		margin-bottom: 56px;
		margin-top: 112px;
	}
	.fixed-bottom {
		position: fixed;
		bottom: 0;
		width: 100%;
	}
	.fixed-top-1 {
		position: fixed;
		top: 0;
	}
	.fixed-top-2 {
		position: fixed;
		top: 56px;		
		background-color: #fff;
	}
	.color-666 {
		color: #666;
	}

	.gridlist-demo-container{
	  display: flex;
	  flex-wrap: wrap;
	  justify-content: space-around;
	}

	.gridlist-demo{
	  width: 500px;
	  height: calc(100vh - 168px);
	  overflow-y: auto;
	}
</style>

