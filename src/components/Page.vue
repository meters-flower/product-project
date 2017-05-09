<template>
	<div class="container">
	  <mu-paper class="fixed-top">
		  <mu-bottom-nav :value="bottomNav" @change="handleChange">
		    <mu-bottom-nav-item value="home" title="首页" icon="home" to="/home" />
		    <mu-bottom-nav-item value="solution" title="解决方案" icon="favorite" to="/solution" />
		    <mu-bottom-nav-item value="product" title="产品中心" icon="book_open_page_variant" to="/product"/>
		  </mu-bottom-nav>
		</mu-paper>		
		<router-view></router-view>
	</div>

</template>


<script>

export default {
  data () {
    return {
      bottomNav: 'home'
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fixed-top {
	position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 100;
}
</style>
