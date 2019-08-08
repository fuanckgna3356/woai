<template>
    <div class=''>
        <input type="button" value="修改msg" @click="msg=no">
        <h3 id="h3">{{msg}}></h3>
    </div>
</template>

<script>
export default {
    name: 'shengmingzouqi',
    data() {
        return {
          msg: 'ok'
        };
    },
    methods: {
        show(){
            console.log('执行了show方法')
        }
    },
    beforeCreate() { //这是我们遇到的第一个声明周期的函数，表示实例完全被创建出来之前，会执行它
        console.log(this.msg)
        this.show()
        //在beforeCreate 生命周期函数执行的时候，data 和 methods 中的数据还没有初始化
    },
    created() {//这是遇到的第二个生命周期的函数，
        console.log(this.msg)
        this.show()
        //在created中，data 和 methods 都已经被初始化好了
        //如果要调用 methods 中的方法，或者操作 data 中的数据，最早，只能在 created 中操作
    },
    beforeMount() {//这是遇到的第三个生命周期函数，表示 模板已经在内存中编辑完成了，但是尚未吧模板渲染到页面当中
        console.log(document.getElementById('h3').innerText)
        //在beforemount 执行的时候，页面中的元素，还没有真正的替换过来，只是之前写的一些字符串模板
    },
    mounted() {//这是遇到的第四个生命周期函数，表示，内存中的模板，已经真实的挂载到了页面中，用户已经可以看到渲染好的东西
        console.log(document.getElementById('h3').innerText)
        //注意：mounted 是 实例创建期间的最后一个生命周期函数，当执行完 mounted 就表示，整个vue实例已经被完全创建好了，此时，组件已经脱离了创建阶段，进入到了运行阶段
        //如果要用插件操作页面上的DOM节点最早要在 mounted 中进行
    },
    beforeUpdate() {//运行中的事件，这时候表示 我们的界面还没有被更新 数据被更新 因为是数据更新才可以触发 beforeupdate
        console.log('界面上的元素时它' + document.getElementById('h3').innerText)  
        console.log('data 中的 msg 数据是:' + this.msg)
        // 得出的结论：当执行 beforreUpdate 的时候，页面中显示的数据还是旧的，此时 data 数据是最新的，页面尚未和最新的数据保持同步
    },
    updated() {
        console.log('界面上的元素时它' + document.getElementById('h3').innerText)  
        console.log('data 中的 msg 数据是:' + this.msg)
        // updated 事件执行的时候，页面和 data 数据已经保持同步了，都是最新的
    },
}
</script>
<style scoped>

</style>