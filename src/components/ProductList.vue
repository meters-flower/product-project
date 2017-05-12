<template>
  <div class="container">
  	<!-- 标题栏 -->
	  <mu-appbar title="商品列表" class="fixed-top-1">
		  <mu-icon-button icon="keyboard_arrow_left" slot="left" @click="comeBack"/>
		  <mu-icon-button icon="shopping_basket" slot="right"/>
		</mu-appbar>
		
		<!-- 商品列表 -->
		<mu-flexbox  class="fixed-top-2">
	    <mu-flexbox-item>
	      全部
	    </mu-flexbox-item>
	    <mu-flexbox-item>
		    <mu-dropDown-menu :value="menuValue" @change="menuChange">
			    <mu-menu-item value="1" title="日期从早到晚"/>
			    <mu-menu-item value="2" title="日期从晚到早"/>
			    <mu-menu-item value="3" title="价格从高到低"/>
			    <mu-menu-item value="4" title="价格从低到高"/>
			  </mu-dropDown-menu>
	    </mu-flexbox-item>
	  </mu-flexbox>
		<div class="gridlist-demo-container">
		  <mu-grid-list class="gridlist-demo">
		    <mu-grid-tile v-for="tile, index in list" :key="index">
			      <img :src="tile.image"/>
			      <span slot="title">{{tile.title}}</span>
			      <span slot="subTitle">by <b>{{tile.author}}</b></span>
			      <mu-icon-button icon="star_border" slot="action" to="/readMore"/>
		    </mu-grid-tile>
		  </mu-grid-list>
		</div>	

		<!-- 底部导航栏 -->
	  <mu-paper class="fixed-bottom">
	    <mu-bottom-nav :value="bottomNav" @change="handleNavChange">
	      <mu-bottom-nav-item value="shopping" title="购卡商城" icon="store"/>
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
    	menuValue: '1',
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
  	handleNavChange (val) {
      this.bottomNav = val
    },
    menuChange(val) {
    	this.menuValue = val;
    }
  }
}
</script>
<style scoped>
	.container {
		margin-bottom: 56px;
		margin-top: 112px;
	}

	.fixed-top-2 {
		position: fixed;
    top: 64px;
    text-align: center;
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

