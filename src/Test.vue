<template>
  <div>
    <p>为了简单起见，这里只写功能不写样式，假设ZSelect是业务组件，用来选择省市区</p>
    请选择
    <ZSelect :value="value.provice" @input="assoc('provice',$event)"></ZSelect>
    <ZSelect :value="value.city" @input="assoc('city',$event)"></ZSelect>

    <p>您选择的是 {{value.provice.value}} / {{value.city.value}}</p>
  </div>
</template>

<script>
import ZSelect from './ZSelect.vue'
import * as R from 'ramda'

function empty() {
  return {
    provice: ZSelect.empty(),
    city: ZSelect.empty()
  }
}
// ====== vue logic
function data (){
  return {
  }
}


let methods = {
  assoc (name,val) {
    let action
    // 如果省发生变化级联市
    if (name == 'provice') {
      // 这里只会创建新的数据，所以不会改变旧数据
      action = R.pipe(
        R.assoc('provice',val),
        R.assoc('city',ZSelect.getCityByProvice(val.value))
      )
    } else {
      action = R.assoc(name,val)
    }
    console.log(action(this.value))
    this.$emit('input',action(this.value))
  }
}

let filters = {
}

export default {
  data ,
  methods,
  filters,
  props:['value'],
  components:{ZSelect},
  watch:{},
  created(){
    this.assoc('provice',ZSelect.getProvice())
  },
  empty
}
</script>
