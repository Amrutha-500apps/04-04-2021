import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import question5 from '../components/question5'
import question7 from '../components/question7'
import question4 from '../components/question4'
import question3 from '..components/question3'


 Vue.use(Router)
const routes = [
    {
        path:'/',
        name:'Home',
        component:HelloWorld
    },
    {
    path:'/question5',
    name:'Hom',
    component:question5
    },
  {
    path:'/question7',
    name:'Homl',
    component:question7
  },
   {
    path:'/question4',
   name:'Homm',
    component:question4
   },
   {
    path:'/question3',
    name:'sample',
    component:question3
  },

]
let router = new Router({routes})
export default router