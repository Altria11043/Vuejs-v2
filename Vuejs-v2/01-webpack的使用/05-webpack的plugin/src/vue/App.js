export default {
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