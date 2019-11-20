import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faTwitter,
  faGithub,
  faWeixin
} from '@fortawesome/free-brands-svg-icons'

library.add(faTwitter, faGithub, faWeixin, faEnvelope)

Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: h => h(App),
  router,
  components: { App }
}).$mount('#app')
