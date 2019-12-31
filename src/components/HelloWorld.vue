<template>
  <div class="hello">

    <div>
      <div class="test">
        <el-button @click="test">测试</el-button>
        <el-select v-model="selected">
          <el-option v-for="(item, index) in selects" :key="index"
          :value="item.id" :label="item.name"></el-option>
        </el-select>
        <el-button @click="submit">提交</el-button>
      </div>

      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          label="日期"
          width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="姓名"
          width="180">
          <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-select v-model="scope.row.$index" filterable placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      options: [],
      selects: [{id: 1, name: 'yxf'}, {id: 2, name: 'zy'}],
      selected: 1
    }
  },
  created(){
    this.$http.getTableList().then(json=>{
      this.tableData = json.data.data
    })
    this.$http.getFoods().then(json=>{
      this.options = json.data.data
    })
  },
  methods: {
    test(){
      let lastSelected = ''
      if(this.selected){
        this.selects.forEach(element=>{
          if(element.id == this.selected){
            lastSelected = element
            return false
          }
        })
      }

      this.selects = [lastSelected]
      let arr = [{id: 3, name: 'zs'}, {id: 4, name: 'ls'}]
      arr.forEach(element=>{
        this.selects.push(element)
      })
    },
    submit(){
      console.log(this.selected)
    }
  },
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
/* li {
  display: inline-block;
  margin: 0 10px;
} */
a {
  color: #42b983;
}
</style>
