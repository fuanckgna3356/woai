<template>
	<div id="hello">
		<h1>{{msgFather}}</h1>
	</div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
    }
  },
  props:['msgFather']
}
</script>

<style>
</style>