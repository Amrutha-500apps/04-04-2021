<template>
  <div>
    <h2>Form</h2>
    <p>{{firstname}}</p>
    <p>{{lastname}}</p>
 </div>
</template>
<script>
export default {
    name:'hloA2', 
    props:{
      message:String,
    },  
    data(){
        return{
            firstname:"500apps",
            lastname:"infinity",
        }
    },
      methods: {
        fullname(){
            this.fullname = this.firstname + this.lastname;
            console.log(this.fullname);
        }
    }  
    
}
</script>
