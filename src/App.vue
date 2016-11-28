<template>
  <div id="app">
		<Top></Top>
		<router-view transition="fade" transition-mode="out-in"></router-view> 
  </div>
</template>
<script>
import Top from './components/top'
export default {
  name: 'app',
  components: {
		Top
  }
}
</script>
<style lang="scss">
  @import "./assets/css/_base.scss";
</style>
