<template>
    <div class=''>
        <h3>{{chuanzhi}}</h3>
    </div>
</template>

<script>
export default {
  name: 'zizujian',
  data () {
    return {

    }
  },
  // 把父组件传过来的   属性，现在 props 数组中，定义一下，这样，才能使用这个数据
  // props 中的数据，都是只读的，无法重新赋值
  props: [ 'chuanzhi' ], 
  methods: {}
}
</script>
<style scoped>

</style>
