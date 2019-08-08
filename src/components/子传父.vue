<template>
    <div class=''>
        <h1>这是子组件</h1>
        <input type="button" value="点击触发父组件传递过来的方法"  @click="myclick">
    </div>
</template>

<script>
export default {
  name: 'zichuanfu',
  data () {
    return {
      msg:'爱我阳'
    }
  },
  methods: {
    myclick () {
      this.$emit('fun',this.msg)
    }
  }
}
</script>
<style scoped>

</style>
