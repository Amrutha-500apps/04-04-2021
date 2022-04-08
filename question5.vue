<template>
<div>
<b-table striped hover :items="posts" :fields="fields"></b-table>
{{posts}}
</div>
</template>
<script>
//var axios = require("axios").default;
export default {
   name:"quesSA",
    data() {
     return {
     posts:' ',
     fields:["web_pages","alpha_two_code","country","name","domains","state-province"],
      }
    },
    methods: {
    async getData() {
    try {
    let response = await fetch("http://universities.hipolabs.com/search?country");
    this.posts = await response.json();
     } catch (error) {
    console.log(error);
     }
   },
   },

/*mounted() {

axios

.get("http://www.json-generator.com/api/json/get/bSldINskRK")

.then(response=>(this.posts=response))

}*/

  created() { 
  this.getData();
  },
}
</script>