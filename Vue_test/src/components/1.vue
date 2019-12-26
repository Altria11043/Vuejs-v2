<template>
  <div id="app">
    <div v-html="message"></div>
  </div>
</template>

<script>
  new Vue({
    el: '#app',
    data: {
      message: '<h1>Vue测试</h1>'
    }
  })
</script>

<style>
</style>
