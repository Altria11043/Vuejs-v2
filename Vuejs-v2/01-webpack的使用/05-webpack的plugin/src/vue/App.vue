<template>
  <div>
    <h2 class="title">{{msg}}</h2>
    <button @click="btnclick">按钮</button>
    <h2>{{name}}</h2>
    <Cpn></Cpn>
  </div>
</template>

<script>
  // 引入子组件
  import Cpn from './Cpn.vue'
  export default {
    name: "App",
    data() {
      return{
        msg: '你好',
        name: 'Zhou'
      }
    },
    methods: {
      btnclick() {
        console.log('btnclick');
      }
    },
    components: {
      Cpn
    }
  }
</script>

<style scoped>
  .title{
    color: green;
  }
</style>