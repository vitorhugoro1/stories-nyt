import Vue from 'vue'
import VueRouter from 'vue-router'
import lodash from 'lodash'
import VueLodash from 'vue-lodash'

Vue.use(VueRouter, lodash, VueLodash)

import App from './App.vue'
import Stories from './components/Stories.vue'
import Home from './components/Home.vue'

const routes = [
    {
        'path': '/stories/:section',
        'component': Stories,
        'name': 'Stories'
    },
    {
        'path': '/',
        'component': Home,
        'name': 'Home'
    }
]

const router = new VueRouter({
    routes
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
