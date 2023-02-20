import { createRouter, createWebHistory } from 'vue-router';
import MainVue from '../Views/MainVue.vue';
import Artist from '../Views/Artist2.vue'
import SearchFeed from '../Views/SearchFeed.vue'
import Login from '../Views/Login.vue'
import Account from '../Views/Account.vue'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component:MainVue
            
            
          
        },
        {
          path: '/login',
          name: 'login',
          component:Login
          
          
        
      }, {
        path: '/account',
        name: 'account',
        component:Account
        
        
      
    },
      
        {
          path:'/artist/:Id',
          name:"artist",
          component:Artist
        }

        ,
      
        {
          path:'/search/:Id',
          name:"search",
          component:SearchFeed
        }
    ]
  })
  
  export default router