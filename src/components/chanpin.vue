<template>
<div id="chanpin">
	<div class="panel panel-primary">
		<div class="panel-heading">
			<h3 class="panel-title">
				添加品牌
			</h3>
		</div>
		<div class="panel-body form-inline">
			<label>
			  Id:
			  <input type="text" name="" id="" value="" v-model="id"/>
			</label>
			<label>
			  Name:
			  <input type="text" name="" id="" value="" v-model="name" @keyup.enter="add" />
			</label>
			<input type="button" name="" id="" value="添加" class="btn btn-primary" @click="add"/>
			<label>
			  搜索:
			  <input type="text" name="" id="" value="" v-model="keywords" v-focus />
			</label>
			<input type="button" name="" id="" value="搜索" class="btn btn-primary" />
		</div>
		</div>
	<table class="table table-bordered table-hover table-striped">
	 <thead>
	  <tr>
	   <th>Id</th>
	   <th>Name</th>
	   <th>Ctime</th>
	   <th>Operation</th>
	  </tr>
	 </thead>
	  	 <tbody> 
      <!-- 之前, v-for 中的数据，都是从 data 上的list中直接渲染过来的 -->
	  <!-- 现在，我们自定义了一个search方法，同时，把所有的关键字，通过传参的形式传递给了search方法 -->
      <!-- 在 search 方法内部，通过执行 for循环，把所有符合搜索关键字的数据，保存到一个新的数组中返回。 -->
	  <tr v-for="item in search(keywords)" :key="item.id">
	 	<td>{{item.id}}</td>
	 	<td>{{item.name}}</td>
	 	<td>{{item.ctime}}</td>
	 	<td>
	 		<a href="" @click.prevent="op(item.id)">删除</a>
	 	</td>
	  </tr>
	 </tbody>
	</table>
</div>
</template>

<script>
	export default {
		name:'chanpin',
		data () {
			return {
				keywords:'',
				id:'',
				name:'',
				list: [
				  { id: 1, name: '奔驰', ctime: new Date() },
				  { id: 2, name: '宝马', ctime: new Date() }
				]
			}
		},
		methods: {
			add(){
				//1. 获取 id和 name ，直接从 data 上获取
				//2. 组织出一个对象
				//3. 把这个对象，调用数组的相关方法，添加到当前的 data 上的 list 中
				var car ={id: this.id, name: this.name, ctime: new Date() }
				this.list.push(car)
				this.id = this.name=''
			},
			op(id){
				//1. 根据 id，找到要删除的索引，
				//2. 找到索引使用数组 splic 删除
				 this.list.some((item,index)=>{
				 	if(item.id == id){
				 		this.list.splice(index,1)
				 		return true
				 	}
				 })
			},
			search(keywords){
				//注意： foreach  some  filter findIndex 都是数组的新方法
				//都会对数组中的每一项，进行遍历，执行相关操作。
				//在es6中，为字符串提供一个新方法，叫做String.prototype.inclus(要包含的字符串)
				//如果包含则返回true，否则返回false。
				return this.list.filter(item => {
					if(item.name.includes(keywords)){
						return item
					}
				})
			}
		}
	}
							//使用 Vue.directive() 定义全局的指令 v-focus
	//其中: 参数1 ：指令的名称，注意，在定义的时候，指令的名称前面，不需要加 v- 前缀
	//参数2：是一个对象，这个对象身上，有一些指令相关的函数，这些函数可以在特定的阶段，执行相关的操作
	// //但是：在调用的时候，必须在指令名称前 加上 v- 前缀来进行调试
	// Vue.directive('focus', { 
	// 	// bind:function(el) { //每当指令绑定到元素上的时候，会立即执行这个 bind 函数，只执行一次
	// 	//注意：在每个函数中，第一个参数，永远是el，表示被绑定了指定的那个元素，这个 el 参数，是一个源生的js对象
	// 	//在元素 刚绑定了指令的时候，还没有插入到DOM中，这时候，调用foucus方法没有作用
    //     //   el.focus()
	// 	//  },
	// 	 inserted:function(el) {  //inserted 表示元素 插入到DOM中的时候，会执行 inserted函数 {触发一次}
	// 	   el.focus()
	// 	 }
	//  })

</script>

<style scoped>
</style>
