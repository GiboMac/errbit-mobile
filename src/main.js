import Vue from 'nativescript-vue'

import router from './router'
// import firebase from './services/firebase'

import './styles.scss'

import database from './services/firebase'
// Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

new Vue({

  router,
  firebase: database

}).$start()
