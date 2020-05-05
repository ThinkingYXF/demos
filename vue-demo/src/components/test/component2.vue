<template>
  <div class="test1">
    <h2>222222222222</h2>
    <p>这是子传父的例子</p>
    <p @click="showMsg()">Component two</p>
  </div>
</template>
<script>
import connect from '../../eventBus'
export default {
    data(){
      return {
        msg: '子传父的信息'
      }
    },
    created(){
      connect.$on('demo1To2', data=>{
        console.log(data)
      })
    },
    methods: {
      showMsg(){
        this.$emit('demoClick', this.msg)
      }
    }
}
</script>

<style scoped>

</style>