<template>
	<div id="woai">
		<button @click="lang">开始</button>
		<button @click="stop">停止</button>
		<h4>{{msg}}</h4>
        <!-- <router-link to="/zoumadeng/chanpin">ni</router-link> -->
        <!-- <router-view></router-view> -->
   </div>
</template>

<script>
export default {
  name: 'woai',
  data () {
    return {
      msg: '好好学习,天天向上',
      intervalId:null
    }
  },
  methods: {
  	lang(){
  	  if(this.intervalId !=null) return;
  	  this.intervalId = setInterval( () => {
  	    var start = this.msg.substring(0, 1)
  	    var end = this.msg.substring(1)
  	    this.msg = end + start
  	  }, 400)
  	},
  	stop(){
  		clearInterval(this.intervalId)
  		this.intervalId=null
  	}
  }
}
	
</script>

<style>
</style>