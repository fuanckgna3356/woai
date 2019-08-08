<template>
  <div id="app">
  	<!--<hello msg-father="nihao"></hello>-->
  	<!-- <woai></woai> -->
    <router-view></router-view>
    <router-link to="/zoumadeng">nihao</router-link>
  	<!-- <guodu></guodu> -->
  	<!--<axios></axios>-->
    <!-- <shengmingzhouqi></shengmingzhouqi> -->
    <!-- <xiaoqiu></xiaoqiu> -->
    <!-- <liebiao></liebiao> -->
    <!-- <chanpin></chanpin> -->
    <!-- <a href="" @click.prevent="comName='liebiao'">liebiao</a>
    <a href="" @click.prevent="comName='chuanzhi'">chuanzhi</a>
    <component :is="comName"></component> -->
    <!-- <zizujian :chuanzhi="msg"></zizujian> -->
    <!-- 父组件向子组件 传递 方法，使用的是 时间绑定机制，v-on 当我们自定义了一个事件属性之后，那么子组件能够通过$emit，来调用这个方法 -->
    <!-- <zichuanfu @fun="show"></zichuanfu> -->
  </div>
</template>

<script>
import hello from  './components/hello'
import woai from './components/zoumadeng'
import chanpin from './components/chanpin'
import guodu from './components/guodu'
import axios from './components/axios'
import HelloWorld from './components/HelloWorld'
import shengmingzhouqi from './components/shengmingzhouqi'
import xiaoqiu from './components/使用钩子函数实现半程动画'
import liebiao from './components/列表动画'
import zizujian from './components/父传子'
import zichuanfu from './components/子传父'
  export default {
    name: 'app',
    data () {
      return {
        comName: 'liebiao',
        msg:'我是父组件的值',
        chuan:''
      }
    },
    methods: {
      show (ab) {
        this.chuan = ab
      }
    },
    components:{
      hello,
      woai,
      chanpin,
      guodu,
      axios,
      HelloWorld,
      shengmingzhouqi,
      xiaoqiu,
      liebiao,
      zizujian,
      zichuanfu
    }
  }
</script>

<style>

</style>
