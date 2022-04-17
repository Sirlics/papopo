import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'
import post from "./store/modules/modules"


const store =createStore({
   modules:{
      post
   }
 })

const app = createApp(App);
app.use( store)
app.mount('#app')