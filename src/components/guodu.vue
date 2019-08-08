<template>
	<div id="woai">
     <button @click="show = !show">改变</button>
     <transition enter-active-class="animated bounceIn" leave-active-class="animated bounceOut" :duration="{enter: 200 , leave: 400}">
     <p class="aa" v-if="show">abcd</p>	
     	</transition>
    </div>
</template>
<script>
  import $ from 'jquery'
export default {
  name: 'guodu',
  data () {
    return {
    	show:false
    }
  },
  methods: {
  	}
 }	
</script>
<style scoped>
</style>