<template>
  <div id="app">
		<Top></Top>
		<router-link></router-link>
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
