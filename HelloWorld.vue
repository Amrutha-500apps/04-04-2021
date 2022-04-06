<template>
  <div>
  <button @click="func()">clcik me</button>
  <p ref="name">{{name}}</p>
  <ques6></ques6>
  </div>
</template>
<script>
import ques6 from '../components/ques6.vue'
export default {
  name: 'HelloWorld',
  components:{
    ques6,
  },
  props: {
    msg: String
  },
  methods:{
    func(){
      this.$ref.name.func1();
    }
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
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
