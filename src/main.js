import './firebase'
import Vue from 'vue'
import App from './App'
import VueFire from 'vueFire'

Vue.use(VueFire)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
