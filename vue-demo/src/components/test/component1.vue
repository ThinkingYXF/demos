<template>
  <div class="test">
      <h2>11111111111111</h2>
      <p @click="sendMsg">这是父传子的例子</p>
      <p>Component {{name}}, <b>{{title}}</b></p>
      <b>{{localTitle}}</b>

      <!-- <component-b></component-b> -->
  </div>
</template>
<script>
import connect from '../../eventBus'
// import component2 from './component2.vue'
export default {
    props: ['title'],
    // components: {
    //   'component-b': component2
    // },
    data(){
      return {
        name: '1111 one',
        localTitle: this.title
      }
    },
    created(){

    },
    methods: {
      sendMsg(){
        connect.$emit('demo1To2', this.name)
      }
    }
}
</script>

<style scoped>

</style>