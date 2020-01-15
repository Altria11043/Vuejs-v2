<template>
  <div>
    <h2>子组件标题</h2>
    <p>子组件内容</p>
    <p>{{name}}</p>
  </div>
</template>

<script>
  export default {
    name: "Cpn",
    data() {
      return {
        name: 'Altria'
      }
    }
  }
</script>

<style scoped>

</style>