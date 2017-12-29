import Vue from 'vue/dist/vue.esm.js'
import Test from './Test.vue'

new Vue({
  el: '#app',
  data: {
    test: Test.empty()
  },
  template: `
  <div>
    <Test v-model="test"></Test>
  </div>
  `,
  components: {Test},
  methods:{
  },
  create () {
  }
})

