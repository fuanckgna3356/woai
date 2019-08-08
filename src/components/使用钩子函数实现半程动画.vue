<template>
    <div class='xiaqiu'>
        <input type="button" value="加入购物车" @click="flge=!flge">
          <transition
          @before-enter='beforeEnter'
          @enter='enter'
          @after-enter='afterEnter'>
              <div class="one" v-show="flge"></div>
          </transition>
    </div>
</template>

<script>
export default {
  name: 'xiaoqiu',
  data () {
    return {
      flge: false
    }
  },
  methods: {
    // 注意：动画钩子函数的第一个参数：el，表示 要执行动画的那个DOM元素，是个源生的JS DOM对象
    // 可以认为，el 是通过 document.getElementById('') 方式获取到的源生JS DOM对象
    beforeEnter (el) {
      // beforeEnter 表示动画入场之前，此时，动画还没有开始，可以在 beforeEnter 中，设置动画开始之前的样式。
      // 设置小球开始之前起始位置
      el.style.transform = 'translate(0 ,0)'
    },
    enter (el, done) {
      el.offsetWidth
      // enter 表示动画开始之后的样式，这里，可以设置小球完成动画之后的样式，结束状态
      el.style.transform = 'translate(150px,450px)'
      el.style.transition = 'all 1s ease'
      done()
    },
    afterEnter (el) {
      // 这句话，第一个功能，是控制小球的显示与隐藏
      // 第二个功能：直接跳过后半场动画，让flag 标识符 直接变为 false
      // 当第二次点击 按钮的时候，flag false -> true
      this.flge = !this.flge
      // vue 吧一个完整的动画，使用钩子函数，拆分为了两部分
      // 我们使用 flag 标识符，来表示动画的切换
      // 刚一开始，flage = false -> true -> false
    }
  }
}
</script>
<style scoped>
   .one{
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background: #f00
   }
</style>
