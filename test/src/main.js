import Vue from 'vue'
import app from './App.vue'
import VueToastify from "vue-toastify";
import VueDraggable from 'vue-draggable'
import VTooltip from 'v-tooltip'
import VueSocketIOExt from 'vue-socket.io-extended'
import socketio from 'socket.io-client'
import GSignInButton from 'vue-google-signin-button'
import "./assets/style.css"


const socket = socketio("http://localhost:3000",{transports:['websocket']})

Vue.use(VueSocketIOExt,socket)

Vue.use(VueToastify,{
  position: "top-center"
})

Vue.use(VueDraggable)
Vue.use(VTooltip)
Vue.use(GSignInButton)


new Vue({
  render: h=>h(app),
}).$mount('#app')
