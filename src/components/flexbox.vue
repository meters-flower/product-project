<template>
	<div class="wrapper flexbox-column">
    <!-- 头部 -->
    <div class="flexbox-row valign-center">
      <div>logo</div>
      <div class="flex-1">标题</div>
      <div>搜索框</div>
      <div>其他</div>
    </div>

    <!-- 主体内容 -->
    <div class="flexbox-row flex-1">
      <div class="flexbox-column">
        <div>标题栏</div>
        <div class="flexbox-row p-relative">
          <div>导航</div>
          <div class="p-absolute">content</div>          
        </div>
      </div>
      <div class="flexbox-column flex-1 p-relative">
        <div>导航标题</div> 
        <div class="p-absolute">主要内容</div> 
      </div>
    </div>

    <!-- 底部 -->
    <div class="flexbox-row valign-center">
      <div class="flex-1-1-auto">1/2</div>
      <div class="flex-1-1-auto">1/2</div>
    </div>
	</div>
</template>


<script>
export default {
  data () {
    return {
      msg: '伸缩盒模型测试'
    }
  }
}
</script>
<style scoped>
  .flexbox-row {
    display: flex;
    flex-direction: row;    
  }
  .flexbox-column {
    display: flex;
    flex-direction: column;    
  }
  .valign-center {
    align-items: center;    
  }
  .flex-1 {
    flex: 1; /* 填充剩余空间 */
  }
  .flex-1-1-auto {
    flex: 1 1 auto;  /* 等分  */
  }

  .p-relative {
    position: relative;
  }
  .p-absolute {
    /*position: absolute;*/
    overflow: auto;
  }

  .wrapper {
    min-height: 100vh; 
  }  
</style>
