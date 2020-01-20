// 使用commonjs的模块化规范
const {add, mul} = require('./js/mathUtils.js')

console.log(add(20, 30));
console.log(mul(20, 30));

// 使用ES6的模块化的规范
import {name, age, height} from "./js/info";

console.log(name + '--' + age + '--' + height);

// 依赖css文件
require('./css/normal.css')

// 依赖less文件
require('./css/special.less')
document.writeln('<h2>使用document插入内容</h2>')

// 使用vue进行开发
import Vue from 'vue'
// import App from './vue/App.js'
import App from './vue/App.vue'

new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})

document.writeln('<button>点击按钮</button>')