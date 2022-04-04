import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
//import q10 from '../components/q10'
//import q3 from '../components/q3'
//import q5 from '../components/q5'
//import q6 from '../components/q6'
//import q3 from '../components/q3'
 Vue.use(Router)
const routes = [
    {
        path:'/',
        name:'Home',
        component:HelloWorld
    },
    //{
   // path:'/q10',
    //name:'hlo',
    //component:q10
    //},
    //{
        //path:'/q3',
        //name:'Home',
        //component:q3
    //}
    //{
        //path:'/q5',
        //name:'hii',
        //component:q5
    //},
   // {
     //   path:'/q6',
      //  name:'Hloo',
       // component:q6
   // },
  // {
   // path:'/q3',
    //name:'amrutha',
    //component:q3
//},
    
]
let router = new Router({routes})
export default router