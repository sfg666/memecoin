import 'solana-wallets-vue/styles.css'
import './main.css'

import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { sync } from 'vuex-router-sync'
import routes from './routes'
import store from './vuex'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './util/flexible'
import '@/assets/fonts/style/public.css'
import 'flag-icon-css/css/flag-icons.css'
const router = createRouter({
    history: createWebHashHistory(),
    routes,
    store
})

sync(store, router);

createApp(App).use(router).use(ElementPlus).mount('#app')
