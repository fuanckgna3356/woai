<template>
    <div class=''>
        <div>
            <label for="">
                Id:
                <input type="text" v-model="id">
            </label>
             <label for="">
                 Name:
                <input type="text" v-model="name">
            </label>
            <input type="button" value="添加" @click="add">
        </div>
        <!-- <ul> -->
            <!-- 给 transition-group 添加 appear 属性，实现页面刚展示出来的时候，入场的效果 -->
            <!-- 通过 为 transition-group 袁术，设置 teg 属性 ，指定 transition-group 渲染为指定元素，如果不指定 tag 属性 默认渲染为 span 标签 -->
           <transition-group appear tag="ul">
                <li v-for="(item, i) in list" :key="item.id" @click="spli(i)">
                {{item.id}} --- {{item.name}}
            </li>
           </transition-group>
        <!-- </ul> -->
    </div>
</template>

<script>
export default {
  name: 'liebiao',
  data () {
    return {
      id:'',
      name:'',
      list: [
        { id: 1, name: '赵高' },
        { id: 2, name: '魏忠贤' }
      ]
    }
  },
  methods: {
    add () {
      this.list.push({id: this.id, name: this.name })
    },
    spli (i) {
      this.list.splice(i,1)
    }
  }
}
</script>
<style scoped>
  li{
      border: 1px dashed #999;
      margin: 5px;
      line-height: 35px;
      font-size: 12px;
      padding-left: 5px;
      width: 100%;
  }
  .v-enter,
  .v-leave-to{
      opacity: 0;
      transform: translateY(80px);
  }
  .v-enter-active,
  .v-leave-active{
   transition: all 0.6s ease;
  }
  li:hover{
      background: hotpink;
      transition: all 0.8s ease;
  }
  /* 下面的 .v-move 和 .v-leave-active 配合使用，能够实现列表后续的元素，渐渐地飘上来的效果 */
  .v-move{
    transition: all 0.8s ease;
  }
  .v-leave-active{
      position: absolute
  }
</style>
