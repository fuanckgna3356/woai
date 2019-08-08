<template>
	<div id="woai">
        <button @click="change"></button>
        <ul>
        	<li v-for="(item,index) in data" :key="index" v-show="index<num?true:false">姓名:{{item.name}},
        		性别:{{item.sex}},年龄:{{item.age}}
        	</li>
        	
        </ul>
        <button @click="more"></button>
    </div>
</template>
    
<script>
export default {
  name: 'axios',
  data () {
    return {
      data: [],
      num: 10
    }
  },
  methods: {
  	change(){
  		this.$axios.get("https://5b5e71c98e9f160014b88cc9.mockapi.io/api/v1/lists")
  		.then(res => {
  			console.log(res)
  			this.data=res.data
  		})
  	},
  	more (){
  		this.num+=10
  	}
  	}
 }	
</script>
<style>
</style>