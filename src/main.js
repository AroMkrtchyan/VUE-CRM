import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from './filters/date.filters'
import messagePlugin from './utils/message.plugin'
import 'materialize-css/dist/js/materialize.min.js'

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

firebase.initializeApp({
  apiKey: "AIzaSyDNkjlq9XhLTW84ZS9Yhd4wfQwgSqpQt7w",
  authDomain: "crm-vue-test-cb5ab.firebaseapp.com",
  projectId: "crm-vue-test-cb5ab",
  storageBucket: "crm-vue-test-cb5ab.appspot.com",
  messagingSenderId: "534309869137",
  appId: "1:534309869137:web:21f08a58c48cb460410a70",
  measurementId: "G-8JWCQJ38Q6"
})

let app
console.log('db,',firebase.auth())
firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
  
})


