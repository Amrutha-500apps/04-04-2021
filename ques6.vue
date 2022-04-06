<template>
    <div>
        <h3>question 6</h3>
        <p>{{name}}</p>
    </div>    
</template>
<script>
export default {
    name:"childA3",
    props:{
        name1:String,
    },
    data(){
        return{
            name:"amrutha",
        }
    },
    methods:{
        func1(){
            alert("ok"); 
        }
    }
}
</script>
