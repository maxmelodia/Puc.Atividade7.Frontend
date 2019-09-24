import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Comp1 from '../components/Comp1'
import Comp2 from '../components/Comp2'
import Comp3 from '../components/Comp3'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
            if(savedPosition) {
                return savedPosition
        } else if(to.hash) {
                return { selector: to.hash }
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes: [{
            name: 'home',
            path: '/',
            components: {
                default: Home,
                menu: Home
            }
        },
        {
            name: 'comp1',
            path: '/Comp1',
            components: {
                default: Comp1,
                home: Home
            }
        },
        {
            name: 'comp2',            
            path: '/Comp2',
            components: {
                default: Comp2
            }
        },
        {
            name: 'comp3',            
            path: '/Comp3',
            components: {
                default: Comp3
            }
        }
    ]
    
    
})

export default router