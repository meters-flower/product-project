<template>
  <mobile-tear-sheet>
   {{msg}}
  </mobile-tear-sheet>
</template>

<script>
import mobileTearSheet  from './mobileTearSheet'
export default {
  data () {
    return {
      msg: '解决方案'
    }
  },
  components: {
    mobileTearSheet
  }
}
</script>

