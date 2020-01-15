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
document.writeln('<h2>标题</h2>')

// 使用vue进行开发
import Vue from 'vue'

const App = {
  template: `
  <div>
    <h2>{{msg}}</h2>
    <button @click="btnclick">按钮</button>
    <h2>{{name}}</h2>
  </div>
  `,
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
  }
}

new Vue({
  el: '#app',
  template: '<App></App>',
  components: {
    App
  }
})