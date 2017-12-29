<template>
  <select @change="assoc($event.target.value)">
    <option v-for="item in value.list"> {{ item }} </option>
  </select>
</template>

<script>
import * as  R from 'ramda'

/*
value: String
list: [String]
*/
function empty() {
  return {
    value: '',
    list: []
  }
}

// 这里也可以换成接口，外层调用的时候采用异步的方式就可以了
function getProvice(){
  return {
    value: '河南',
    list: ['河南','河北']
  }
}
function getCityByProvice(name){
  return {
    '河南': {
      value: '开封',
      list: ['开封','郑州','鹤壁','新乡','周口']
    },
    '河北': {
      value: '燕郊',
      list: ['燕郊', '廊坊','石家庄','张家口']
    }
  }[name]
}
// ====== vue logic
function data (){
  return {
  }
}


let methods = {
  assoc(val){
    this.$emit('input',R.merge(this.value,{value:val}))
  }
}

let filters = {
}

export default {
  data ,
  methods,
  filters,
  props:['value'],
  components:{},
  watch:{},
  created(){},
  empty,
  getProvice,
  getCityByProvice
}
</script>
